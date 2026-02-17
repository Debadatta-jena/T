import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Project } from "./entities/project.entity";
import { CreateProjectDto } from "./dto/create-project.dto";
import { UpdateProjectDto } from "./dto/update-project.dto";
import { PaginatedResult } from "../common/interfaces/paginated-result.interface";

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
  ) {}

  async create(createProjectDto: CreateProjectDto): Promise<Project> {
    try {
      const project = this.projectRepository.create({
        ...createProjectDto,
        status: createProjectDto.status || "planning",
        priority: createProjectDto.priority || "medium",
        isVisible:
          createProjectDto.isVisible !== undefined
            ? createProjectDto.isVisible
            : true,
        isFeatured: createProjectDto.isFeatured || false,
      });

      return await this.projectRepository.save(project);
    } catch (error) {
      throw new BadRequestException(
        "Failed to create project: " + error.message,
      );
    }
  }

  async findAll(
    page = 1,
    limit = 10,
    category?: string,
  ): Promise<PaginatedResult<Project>> {
    const skip = (page - 1) * limit;

    const queryBuilder = this.projectRepository
      .createQueryBuilder("project")
      .where("project.isVisible = :isVisible", { isVisible: true });

    if (category) {
      queryBuilder.andWhere("project.category = :category", { category });
    }

    const [projects, total] = await queryBuilder
      .orderBy("project.createdAt", "DESC")
      .skip(skip)
      .take(limit)
      .getManyAndCount();

    return {
      data: projects,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  async findFeatured(): Promise<Project[]> {
    return await this.projectRepository.find({
      where: { isFeatured: true, isVisible: true },
      order: { createdAt: "DESC" },
      take: 6,
    });
  }

  async findByCategory(category: string): Promise<Project[]> {
    return await this.projectRepository.find({
      where: { category, isVisible: true },
      order: { createdAt: "DESC" },
    });
  }

  async findOne(id: string): Promise<Project> {
    const project = await this.projectRepository.findOne({
      where: { id },
      relations: ["testimonials"],
    });

    if (!project) {
      throw new NotFoundException(`Project with ID ${id} not found`);
    }

    return project;
  }

  async update(
    id: string,
    updateProjectDto: UpdateProjectDto,
  ): Promise<Project> {
    try {
      const project = await this.findOne(id);

      const updatedProject = this.projectRepository.merge(
        project,
        updateProjectDto,
      );
      return await this.projectRepository.save(updatedProject);
    } catch (error) {
      throw new BadRequestException(
        "Failed to update project: " + error.message,
      );
    }
  }

  async remove(id: string): Promise<void> {
    const project = await this.findOne(id);
    await this.projectRepository.remove(project);
  }

  async getProjectStats(): Promise<any> {
    const total = await this.projectRepository.count();
    const completed = await this.projectRepository.count({
      where: { status: "completed" },
    });
    const inProgress = await this.projectRepository.count({
      where: { status: "in-progress" },
    });
    const featured = await this.projectRepository.count({
      where: { isFeatured: true },
    });

    const categoryStats = await this.projectRepository
      .createQueryBuilder("project")
      .select("project.category", "category")
      .addSelect("COUNT(*)", "count")
      .where("project.isVisible = :isVisible", { isVisible: true })
      .groupBy("project.category")
      .getRawMany();

    return {
      total,
      completed,
      inProgress,
      featured,
      categoryStats,
    };
  }

  async searchProjects(query: string): Promise<Project[]> {
    return await this.projectRepository
      .createQueryBuilder("project")
      .where("project.isVisible = :isVisible", { isVisible: true })
      .andWhere(
        "(project.title ILIKE :query OR project.description ILIKE :query OR project.technologies &&:technologies)",
        {
          query: `%${query}%`,
          technologies: query.split(" ").map((q) => `%${q}%`),
        },
      )
      .orderBy("project.createdAt", "DESC")
      .getMany();
  }

  async getProjectsByClient(clientName: string): Promise<Project[]> {
    return await this.projectRepository.find({
      where: { clientName, isVisible: true },
      order: { createdAt: "DESC" },
    });
  }

  async updateProjectStatus(id: string, status: string): Promise<Project> {
    const project = await this.findOne(id);
    project.status = status as any;

    if (status === "in-progress" && !project.startDate) {
      project.startDate = new Date();
    }

    if (status === "completed") {
      project.endDate = new Date();
    }

    return await this.projectRepository.save(project);
  }

  async toggleFeatured(id: string): Promise<Project> {
    const project = await this.findOne(id);
    project.isFeatured = !project.isFeatured;
    return await this.projectRepository.save(project);
  }

  async toggleVisibility(id: string): Promise<Project> {
    const project = await this.findOne(id);
    project.isVisible = !project.isVisible;
    return await this.projectRepository.save(project);
  }
}
