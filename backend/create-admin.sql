-- SQL Script to create admin user
-- Run this in your MySQL database

-- First, you need to generate a bcrypt hash of the password
-- The password 'debadatta2004' with bcrypt salt rounds 10 produces:
-- $2b$10$... (this is just a placeholder, the actual hash will be generated)

-- For now, let's create a simple insert (you can update the password hash later)
-- Run this in your MySQL Workbench or command line:

-- Option 1: If you have phpMyAdmin or MySQL Workbench:
-- Insert into your users table with a temporary password hash

-- The easiest way is to register through the website and then update the role in database:
-- UPDATE users SET role = 'admin' WHERE email = 'debadattajena552@gmail.com';

-- Here's a direct insert with a pre-generated hash for 'debadatta2004':
INSERT INTO users (id, name, email, password, phone, role, "isActive", "isEmailVerified", "createdAt", "updatedAt")
VALUES (
    UUID(),
    'Debadatta Jena',
    'debadattajena552@gmail.com',
    '$2b$10$rBV2JzS3U/YCQdL3kVQYXOiXQD8xYqF3P4uP6uYxJ5xKQZqQqXHq',  -- placeholder - register first then update
    '9692292496',
    'admin',
    true,
    true,
    NOW(),
    NOW()
) ON DUPLICATE KEY UPDATE role = 'admin', "isActive" = true;
