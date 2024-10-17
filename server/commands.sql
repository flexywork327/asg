
-- todo : ====================================== create database =============================================

-- create database ;
    CREATE DATABASE stevens;

-- drop database
    DROP DATABASE IF EXISTS stevens;

-- connect to database
    sudo -i -u postgres psql  -- connect to database
    \l   -- list all databases
    \c church -- connect to church database
    \d   -- show all tables in database
    \du  -- show all tables in users database
    \?   -- show all commands


-- todo : ====================================== IMPORTANT SQL COMMANDS ======================================
-- create table
    CREATE TABLE user (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL, -- Adjust the length as needed
    contact VARCHAR(15) NOT NULL, -- Adjust the length as needed
    isverified BOOLEAN DEFAULT false,
    status VARCHAR(255) DEFAULT 'active',
    level VARCHAR(255) DEFAULT 'subordinate',
    opt_code VARCHAR(255) DEFAULT '1234',
    recruited_by VARCHAR(255) DEFAULT 'admin',
    subordinates VARCHAR(255) DEFAULT 'none',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- drop TABLES
    DROP TABLE IF EXISTS med_delivery;

-- INSERT DATA
    INSERT INTO users (first_name,last_name, email, password,role) VALUES ('John','Doe' 'flexywork327@gmail.com', '123456','admin');

-- Delete DATA
    DELETE FROM staff WHERE id = 1;

-- Show items in table
    SELECT * FROM users;

-- update items in table
    UPDATE users SET first_name = 'John' WHERE id = 1;    

-- modify column
    ALTER TABLE products MODIFY product_description VARCHAR(65530) NOT NULL;
    
-- insert new column 
    ALTER TABLE setup_user ADD status VARCHAR(255) DEFAULT 'active';

CREATE TABLE user (
    id INT PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    contact VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);
