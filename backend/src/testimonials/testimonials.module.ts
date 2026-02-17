import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TestimonialsService } from "./testimonials.service";
import { TestimonialsController } from "./testimonials.controller";
import { Testimonial } from "./entities/testimonial.entity";
import { Project } from "../projects/entities/project.entity";
import { User } from "../users/entities/user.entity";
import { AuthModule } from "../auth/auth.module";

@Module({
  imports: [TypeOrmModule.forFeature([Testimonial, Project, User]), AuthModule],
  controllers: [TestimonialsController],
  providers: [TestimonialsService],
  exports: [TestimonialsService],
})
export class TestimonialsModule {}
