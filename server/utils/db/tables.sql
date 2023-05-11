create DATABASE `college-management-system`;


------------------------- Students
CREATE TABLE students (
    id VARCHAR(22) NOT NULL PRIMARY KEY DEFAULT SUBSTR(MD5(RAND()), 1, 22),
    ssn INT NOT NULL UNIQUE,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    phone_number VARCHAR(11),
    address VARCHAR(20),
    image VARCHAR(20),
    fees BOOLEAN NOT NULL DEFAULT false,
    academic_year INT NOT NULL DEFAULT 1 CHECK (academic_year >= 1 AND academic_year <= 5),
    gender ENUM('male', 'female') NOT NULL DEFAULT 'male',
    date_of_birth TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


-- Add Values
INSERT INTO 
	students(ssn, name, email, phone_number, fees)
VALUES
	(1, "Lamiaa Gabriel", "lamiaamoname6@gmail.com", '01022184878', true), 
	(2, "Lamiaa Gabriel", "lamiaamoname16@gmail.com", '01022184878', false),
	(3, "Lamiaa Gabriel", "lamiaamoname62@gmail.com", '01022184878', true),
	(4, "Lamiaa Gabriel", "lamiaamoname63@gmail.com", '01022184878', false),
	(5, "Lamiaa Gabriel", "lamiaamoname64@gmail.com", '01022184878', true),
	(6, "Lamiaa Gabriel", "lamiaamoname65@gmail.com", '01022184878', true)
;



-- Update Values
UPDATE categories
SET title = 'New Value'
WHERE title = 'Old Value'

