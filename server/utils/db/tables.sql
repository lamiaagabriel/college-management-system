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

------------------------- Courses
CREATE TABLE `courses` (
	`id` varchar(22) NOT NULL,
	`name` varchar(150) NOT NULL,
	`year` int NOT NULL,
	`semester` int NOT NULL,
	PRIMARY KEY (`id`)
)


------------------------- Professors
CREATE TABLE `professors` (
	`id` varchar(22) NOT NULL,
	`ssn` varchar(14) NOT NULL,
	`name` varchar(50) NOT NULL,
	`email` varchar(50) NOT NULL,
	`phone_number` varchar(11),
	`address` varchar(20),
	`image` varchar(20),
	`gender` enum('male', 'female') NOT NULL DEFAULT 'male',
	`created_at` timestamp NULL DEFAULT current_timestamp(),
	`updated_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
	`phd` varchar(200),
	`master` varchar(200),
	`university` varchar(200),
	`department` varchar(150),
	PRIMARY KEY (`id`),
	UNIQUE KEY `ssn` (`ssn`),
	UNIQUE KEY `email` (`email`)
) 