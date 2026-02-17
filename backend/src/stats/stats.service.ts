import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Project } from "../projects/entities/project.entity";
import { Testimonial } from "../testimonials/entities/testimonial.entity";
import { Contact } from "../contact/entities/contact.entity";
import { User, UserRole } from "../users/entities/user.entity";

@Injectable()
export class StatsService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
    @InjectRepository(Testimonial)
    private readonly testimonialRepository: Repository<Testimonial>,
    @InjectRepository(Contact)
    private readonly contactRepository: Repository<Contact>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async getDashboardStats() {
    const [projectStats, testimonialStats, contactStats, userStats] =
      await Promise.all([
        this.getProjectStats(),
        this.getTestimonialStats(),
        this.getContactStats(),
        this.getUserStats(),
      ]);

    return {
      projects: projectStats,
      testimonials: testimonialStats,
      contacts: contactStats,
      users: userStats,
      overview: {
        totalProjects: projectStats.total,
        totalTestimonials: testimonialStats.total,
        totalContacts: contactStats.total,
        totalUsers: userStats.total,
        completionRate: this.calculateCompletionRate(projectStats),
        satisfactionRate: this.calculateSatisfactionRate(testimonialStats),
      },
    };
  }

  async getProjectStats() {
    const total = await this.projectRepository.count();
    const completed = await this.projectRepository.count({
      where: { status: "completed" },
    });
    const inProgress = await this.projectRepository.count({
      where: { status: "in-progress" },
    });
    const planning = await this.projectRepository.count({
      where: { status: "planning" },
    });
    const featured = await this.projectRepository.count({
      where: { isFeatured: true },
    });
    const visible = await this.projectRepository.count({
      where: { isVisible: true },
    });

    const categoryStats = await this.projectRepository
      .createQueryBuilder("project")
      .select("project.category", "category")
      .addSelect("COUNT(*)", "count")
      .where("project.isVisible = :isVisible", { isVisible: true })
      .groupBy("project.category")
      .getRawMany();

    const monthlyStats = await this.projectRepository
      .createQueryBuilder("project")
      .select("DATE_TRUNC('month', project.createdAt)", "month")
      .addSelect("COUNT(*)", "count")
      .groupBy("DATE_TRUNC('month', project.createdAt)")
      .orderBy("month", "DESC")
      .limit(12)
      .getRawMany();

    return {
      total,
      completed,
      inProgress,
      planning,
      featured,
      visible,
      categoryStats,
      monthlyStats,
    };
  }

  async getTestimonialStats() {
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

    return {
      total,
      approved,
      pending,
      rejected,
      featured,
      visible,
      ratingStats,
      averageRating: averageRating?.average || 0,
    };
  }

  async getContactStats() {
    const total = await this.contactRepository.count();
    const newCount = await this.contactRepository.count({
      where: { status: "new" },
    });
    const inProgress = await this.contactRepository.count({
      where: { status: "in-progress" },
    });
    const completed = await this.contactRepository.count({
      where: { status: "completed" },
    });
    const archived = await this.contactRepository.count({
      where: { status: "archived" },
    });

    const sourceStats = await this.contactRepository
      .createQueryBuilder("contact")
      .select("contact.source", "source")
      .addSelect("COUNT(*)", "count")
      .groupBy("contact.source")
      .getRawMany();

    const serviceStats = await this.contactRepository
      .createQueryBuilder("contact")
      .select("contact.serviceInterest", "service")
      .addSelect("COUNT(*)", "count")
      .where("contact.serviceInterest IS NOT NULL")
      .groupBy("contact.serviceInterest")
      .getRawMany();

    const monthlyStats = await this.contactRepository
      .createQueryBuilder("contact")
      .select("DATE_TRUNC('month', contact.createdAt)", "month")
      .addSelect("COUNT(*)", "count")
      .groupBy("DATE_TRUNC('month', contact.createdAt)")
      .orderBy("month", "DESC")
      .limit(12)
      .getRawMany();

    return {
      total,
      new: newCount,
      inProgress,
      completed,
      archived,
      sourceStats,
      serviceStats,
      monthlyStats,
    };
  }

  async getUserStats() {
    const total = await this.userRepository.count();
    const admins = await this.userRepository.count({
      where: { role: UserRole.ADMIN },
    });
    const clients = await this.userRepository.count({
      where: { role: UserRole.CLIENT },
    });
    const active = await this.userRepository.count({
      where: { isActive: true },
    });
    const verified = await this.userRepository.count({
      where: { isEmailVerified: true },
    });

    const monthlyStats = await this.userRepository
      .createQueryBuilder("user")
      .select("DATE_TRUNC('month', user.createdAt)", "month")
      .addSelect("COUNT(*)", "count")
      .groupBy("DATE_TRUNC('month', user.createdAt)")
      .orderBy("month", "DESC")
      .limit(12)
      .getRawMany();

    return {
      total,
      admins,
      clients,
      active,
      verified,
      monthlyStats,
    };
  }

  private calculateCompletionRate(projectStats: any): number {
    return projectStats.total > 0
      ? Math.round((projectStats.completed / projectStats.total) * 100)
      : 0;
  }

  private calculateSatisfactionRate(testimonialStats: any): number {
    return testimonialStats.total > 0
      ? Math.round((testimonialStats.approved / testimonialStats.total) * 100)
      : 0;
  }

  async getRevenueStats() {
    // This would typically integrate with payment systems
    // For now, return estimated revenue based on project costs
    const projectRevenue = await this.projectRepository
      .createQueryBuilder("project")
      .select("SUM(project.cost)", "total")
      .where("project.status = :status", { status: "completed" })
      .andWhere("project.cost IS NOT NULL")
      .getRawOne();

    const monthlyRevenue = await this.projectRepository
      .createQueryBuilder("project")
      .select("DATE_TRUNC('month', project.endDate)", "month")
      .addSelect("SUM(project.cost)", "revenue")
      .where("project.status = :status", { status: "completed" })
      .andWhere("project.cost IS NOT NULL")
      .andWhere("project.endDate IS NOT NULL")
      .groupBy("DATE_TRUNC('month', project.endDate)")
      .orderBy("month", "DESC")
      .limit(12)
      .getRawMany();

    return {
      totalRevenue: projectRevenue?.total || 0,
      monthlyRevenue,
    };
  }
}
