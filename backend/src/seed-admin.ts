import { DataSource } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User, UserRole } from './users/entities/user.entity';

async function createAdminUser() {
  // Create a simple data source for seeding
  const dataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '4521',
    database: 'my_web',
    entities: [User],
  });

  await dataSource.initialize();

  const email = 'debadattajena552@gmail.com';
  const plainPassword = 'debadatta2004';
  
  // Check if user already exists
  const existingUser = await dataSource.getRepository(User).findOne({
    where: { email }
  });

  if (existingUser) {
    console.log('User already exists, updating...');
    const hashedPassword = await bcrypt.hash(plainPassword, 10);
    await dataSource.getRepository(User).update(existingUser.id, {
      password: hashedPassword,
      role: UserRole.ADMIN,
      isActive: true,
      isEmailVerified: true,
      name: 'Debadatta Jena'
    });
    console.log('✅ Admin user updated successfully!');
  } else {
    console.log('Creating new admin user...');
    const hashedPassword = await bcrypt.hash(plainPassword, 10);
    
    const adminUser = dataSource.getRepository(User).create({
      name: 'Debadatta Jena',
      email: email,
      password: hashedPassword,
      phone: '9692292496',
      role: UserRole.ADMIN,
      isActive: true,
      isEmailVerified: true,
    });

    await dataSource.getRepository(User).save(adminUser);
    console.log('✅ Admin user created successfully!');
  }

  await dataSource.destroy();
}

createAdminUser().catch(console.error);
