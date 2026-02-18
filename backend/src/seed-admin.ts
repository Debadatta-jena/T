import "dotenv/config";
import { DataSource } from "typeorm";
import * as bcrypt from "bcrypt";
import { User, UserRole } from "./users/entities/user.entity";

async function createAdminUser() {
  // Create a simple data source for seeding
  // Uses environment variables - update .env file with your database credentials
  const dataSource = new DataSource({
    type: "postgres" as any,
    host: process.env.DB_HOST || "localhost",
    port: parseInt(process.env.DB_PORT || "5432"),
    username: process.env.DB_USERNAME || "postgres",
    password: process.env.DB_PASSWORD || "password",
    database: process.env.DB_DATABASE || "trionex_db",
    entities: [User],
  });

  await dataSource.initialize();

  const email = process.env.OWNER_EMAIL || "debadattajena552@gmail.com";
  const plainPassword = "debadatta2004"; // Change this default password!

  // Check if user already exists
  const existingUser = await dataSource.getRepository(User).findOne({
    where: { email },
  });

  if (existingUser) {
    console.log("User already exists, updating...");
    const hashedPassword = await bcrypt.hash(plainPassword, 10);
    await dataSource.getRepository(User).update(existingUser.id, {
      password: hashedPassword,
      role: UserRole.ADMIN,
      isActive: true,
      isEmailVerified: true,
      name: "Debadatta Jena",
    });
    console.log("✅ Admin user updated successfully!");
  } else {
    console.log("Creating new admin user...");
    const hashedPassword = await bcrypt.hash(plainPassword, 10);

    const adminUser = dataSource.getRepository(User).create({
      name: "Debadatta Jena",
      email: email,
      password: hashedPassword,
      phone: "9692292496",
      role: UserRole.ADMIN,
      isActive: true,
      isEmailVerified: true,
    });

    await dataSource.getRepository(User).save(adminUser);
    console.log("✅ Admin user created successfully!");
  }

  await dataSource.destroy();
}

createAdminUser().catch(console.error);
