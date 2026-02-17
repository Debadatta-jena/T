import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Testimonial } from "./entities/testimonial.entity";
import { CreateTestimonialDto } from "./dto/create-testimonial.dto";
import { UpdateTestimonialDto } from "./dto/update-testimonial.dto";
import { PaginatedResult } from "../common/interfaces/paginated-result.interface";

@Injectable()
export class TestimonialsService {
  constructor(
    @InjectRepository(Testimonial)
    private readonly testimonialRepository: Repository<Testimonial>,
  ) {}

  async create(
    createTestimonialDto: CreateTestimonialDto,
  ): Promise<Testimonial> {
    try {
      const testimonial = this.testimonialRepository.create({
        ...createTestimonialDto,
        status: "pending",
        isVisible: false,
        isFeatured: false,
      });

      return await this.testimonialRepository.save(testimonial);
    } catch (error) {
      throw new BadRequestException(
        "Failed to create testimonial: " + error.message,
      );
    }
  }

  async findAll(
    page = 1,
    limit = 10,
    status?: string,
    featured?: boolean,
  ): Promise<PaginatedResult<Testimonial>> {
    const skip = (page - 1) * limit;

    const queryBuilder = this.testimonialRepository
      .createQueryBuilder("testimonial")
      .leftJoinAndSelect("testimonial.project", "project")
      .leftJoinAndSelect("testimonial.approvedBy", "approvedBy");

    if (status) {
      queryBuilder.andWhere("testimonial.status = :status", { status });
    }

    if (featured !== undefined) {
      queryBuilder.andWhere("testimonial.isFeatured = :isFeatured", {
        isFeatured: featured,
      });
    }

    const [testimonials, total] = await queryBuilder
      .orderBy("testimonial.createdAt", "DESC")
      .skip(skip)
      .take(limit)
      .getManyAndCount();

    return {
      data: testimonials,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  async findVisible(): Promise<Testimonial[]> {
    return await this.testimonialRepository.find({
      where: { isVisible: true, status: "approved" },
      order: { isFeatured: "DESC", createdAt: "DESC" },
      relations: ["project"],
    });
  }

  async findFeatured(): Promise<Testimonial[]> {
    return await this.testimonialRepository.find({
      where: { isFeatured: true, isVisible: true, status: "approved" },
      order: { createdAt: "DESC" },
      relations: ["project"],
      take: 6,
    });
  }

  async findByCategory(category: string): Promise<Testimonial[]> {
    return await this.testimonialRepository
      .createQueryBuilder("testimonial")
      .leftJoinAndSelect("testimonial.project", "project")
      .where("testimonial.serviceCategory = :category", { category })
      .andWhere("testimonial.isVisible = :isVisible", { isVisible: true })
      .andWhere("testimonial.status = :status", { status: "approved" })
      .orderBy("testimonial.isFeatured", "DESC")
      .addOrderBy("testimonial.createdAt", "DESC")
      .getMany();
  }

  async findOne(id: string): Promise<Testimonial> {
    const testimonial = await this.testimonialRepository.findOne({
      where: { id },
      relations: ["project", "approvedBy"],
    });

    if (!testimonial) {
      throw new NotFoundException(`Testimonial with ID ${id} not found`);
    }

    return testimonial;
  }

  async update(
    id: string,
    updateTestimonialDto: UpdateTestimonialDto,
  ): Promise<Testimonial> {
    try {
      const testimonial = await this.findOne(id);

      const updatedTestimonial = this.testimonialRepository.merge(
        testimonial,
        updateTestimonialDto,
      );
      return await this.testimonialRepository.save(updatedTestimonial);
    } catch (error) {
      throw new BadRequestException(
        "Failed to update testimonial: " + error.message,
      );
    }
  }

  async remove(id: string): Promise<void> {
    const testimonial = await this.findOne(id);
    await this.testimonialRepository.remove(testimonial);
  }

  async approveTestimonial(
    id: string,
    approvedById: string,
  ): Promise<Testimonial> {
    const testimonial = await this.findOne(id);

    testimonial.status = "approved";
    testimonial.isVisible = true;
    testimonial.approvedBy = { id: approvedById } as any;

    return await this.testimonialRepository.save(testimonial);
  }

  async rejectTestimonial(
    id: string,
    adminNotes?: string,
  ): Promise<Testimonial> {
    const testimonial = await this.findOne(id);

    testimonial.status = "rejected";
    testimonial.isVisible = false;
    testimonial.adminNotes = adminNotes;

    return await this.testimonialRepository.save(testimonial);
  }

  async toggleFeatured(id: string): Promise<Testimonial> {
    const testimonial = await this.findOne(id);
    testimonial.isFeatured = !testimonial.isFeatured;
    return await this.testimonialRepository.save(testimonial);
  }

  async toggleVisibility(id: string): Promise<Testimonial> {
    const testimonial = await this.findOne(id);
    testimonial.isVisible = !testimonial.isVisible;
    return await this.testimonialRepository.save(testimonial);
  }

  async getTestimonialStats(): Promise<any> {
    const total = await this.testimonialRepository.count();
    const approved = await this.testimonialRepository.count({
      where: { status: "approved" },
    });
    const pending = await this.testimonialRepository.count({
      where: { status: "pending" },
    });
    const rejected = await this.testimonialRepository.count({
      where: { status: "rejected" },
    });
    const featured = await this.testimonialRepository.count({
      where: { isFeatured: true },
    });
    const visible = await this.testimonialRepository.count({
      where: { isVisible: true },
    });

    const ratingStats = await this.testimonialRepository
      .createQueryBuilder("testimonial")
      .select("testimonial.rating", "rating")
      .addSelect("COUNT(*)", "count")
      .where("testimonial.status = :status", { status: "approved" })
      .groupBy("testimonial.rating")
      .getRawMany();

    const averageRating = await this.testimonialRepository
      .createQueryBuilder("testimonial")
      .select("AVG(testimonial.rating)", "average")
      .where("testimonial.status = :status", { status: "approved" })
      .andWhere("testimonial.rating IS NOT NULL")
      .getRawOne();

    const categoryStats = await this.testimonialRepository
      .createQueryBuilder("testimonial")
      .select("testimonial.serviceCategory", "category")
      .addSelect("COUNT(*)", "count")
      .where("testimonial.status = :status", { status: "approved" })
      .andWhere("testimonial.isVisible = :isVisible", { isVisible: true })
      .groupBy("testimonial.serviceCategory")
      .getRawMany();

    return {
      total,
      approved,
      pending,
      rejected,
      featured,
      visible,
      ratingStats,
      averageRating: averageRating?.average || 0,
      categoryStats,
    };
  }
}
