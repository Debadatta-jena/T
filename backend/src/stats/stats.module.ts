import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { StatsService } from "./stats.service";
import { StatsController } from "./stats.controller";
import { Project } from "../projects/entities/project.entity";
import { Testimonial } from "../testimonials/entities/testimonial.entity";
import { Contact } from "../contact/entities/contact.entity";
import { User } from "../users/entities/user.entity";
import { AuthModule } from "../auth/auth.module";

@Module({
  imports: [
    TypeOrmModule.forFeature([Project, Testimonial, Contact, User]),
    AuthModule,
  ],
  controllers: [StatsController],
  providers: [StatsService],
  exports: [StatsService],
})
export class StatsModule {}
