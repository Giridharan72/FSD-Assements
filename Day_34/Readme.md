## Guvi Database
This repository contains SQL scripts to create and populate the "Guvi" database, which is designed to store information about student profiles, activities, dashboard statistics, leaderboard rankings, and queries.

## Database Structure
Tables
profile: Stores information about student profiles.
activities: Records session roadmaps, activities, and tasks associated with student profiles.
dashboard: Tracks Codekata, Webkata, and task completion statistics for each student.
task: Describes various tasks that students may complete.
leaderboard: Ranks students based on their performance in different learning areas.
queries: Stores questions or queries raised by students.
Sample Data
The database includes sample data to demonstrate its structure and functionality. Sample data is provided for each table to illustrate how information can be stored and queried.

Queries
The repository also includes sample SQL queries to retrieve information from the database. These queries demonstrate common data retrieval operations and can be used as a reference for building custom queries.


##SQL QUERY 

CREATE DATABASE guvi;

CREATE TABLE profile (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    phone VARCHAR(20),
    email VARCHAR(255),
    batch VARCHAR(50),
    qualification VARCHAR(100),
    year_of_passing INT
);

CREATE TABLE activities (
    id INT AUTO_INCREMENT PRIMARY KEY,
    session_roadmap VARCHAR(255),
    activities VARCHAR(255),
    task VARCHAR(255),
    profile_id INT,
    FOREIGN KEY (profile_id) REFERENCES profile(id)
);

CREATE TABLE dashboard (
    id INT AUTO_INCREMENT PRIMARY KEY,
    codekata INT,
    webkata INT,
    task INT,
    profile_id INT,
    FOREIGN KEY (profile_id) REFERENCES profile(id)
);

CREATE TABLE task (
    id INT AUTO_INCREMENT PRIMARY KEY,
    task_description VARCHAR(255)
);

CREATE TABLE leaderboard (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    ranks INT,
    batch VARCHAR(50),
    learning VARCHAR(255),
    profile_id INT,
    FOREIGN KEY (profile_id) REFERENCES profile(id)
);

CREATE TABLE queries (
    id INT AUTO_INCREMENT PRIMARY KEY,
    query VARCHAR(255),
    profile_id INT,
    FOREIGN KEY (profile_id) REFERENCES profile(id)
);
-- Sample data for the profile table
INSERT INTO profile (name, phone, email, batch, qualification, year_of_passing)
VALUES
    ('John Doe', '1234567890', 'john@example.com', 'Batch A', 'Bachelor of Science', 2022),
    ('Jane Smith', '9876543210', 'jane@example.com', 'Batch B', 'Master of Arts', 2021),
    ('Alice Johnson', '5556667777', 'alice@example.com', 'Batch C', 'Bachelor of Engineering', 2023),
    -- Add more sample profile data as needed
    ('Bob Brown', '4445556666', 'bob@example.com', 'Batch A', 'Bachelor of Business', 2024),
    ('Emma Lee', '3332221111', 'emma@example.com', 'Batch B', 'Bachelor of Medicine', 2022),
    ('Michael Johnson', '9998887777', 'michael@example.com', 'Batch C', 'Master of Science', 2023),
    ('Sara Williams', '7778889999', 'sara@example.com', 'Batch A', 'Bachelor of Arts', 2021),
    ('David Clark', '2223334444', 'david@example.com', 'Batch B', 'Bachelor of Computer Science', 2024),
    ('Jennifer Martinez', '6667778888', 'jennifer@example.com', 'Batch C', 'Master of Engineering', 2022),
    ('Daniel Taylor', '1112223333', 'daniel@example.com', 'Batch A', 'Bachelor of Education', 2023),
    ('Sophia White', '8889990000', 'sophia@example.com', 'Batch B', 'Bachelor of Design', 2021),
    ('Matthew Harris', '7776665555', 'matthew@example.com', 'Batch C', 'Master of Business Administration', 2024),
    ('Olivia Wilson', '5554443333', 'olivia@example.com', 'Batch A', 'Bachelor of Pharmacy', 2022),
    ('James Anderson', '2221110000', 'james@example.com', 'Batch B', 'Bachelor of Law', 2023),
    ('Grace Thomas', '9990001111', 'grace@example.com', 'Batch C', 'Master of Fine Arts', 2021);

-- Sample data for the activities table
INSERT INTO activities (session_roadmap, activities, task, profile_id)
VALUES
    ('Session 1', 'Introduction to Programming', 'Complete exercises 1-5', 1),
    ('Session 2', 'Data Structures', 'Read chapter 2 and complete quiz', 2),
    ('Session 3', 'Algorithms', 'Write a program for sorting algorithms', 3),
    -- Add more sample activities data as needed
    ('Session 1', 'Introduction to HTML', 'Complete HTML exercises', 4),
    ('Session 2', 'CSS Styling', 'Build a webpage using CSS', 5),
    ('Session 3', 'JavaScript Basics', 'Create interactive elements using JavaScript', 6),
    ('Session 1', 'Introduction to Python', 'Complete Python exercises', 7),
    ('Session 2', 'Python Data Analysis', 'Analyze data using Python libraries', 8),
    ('Session 3', 'Machine Learning Fundamentals', 'Build a simple machine learning model', 9),
    ('Session 1', 'Introduction to SQL', 'Write basic SQL queries', 10),
    ('Session 2', 'Database Design', 'Design a database schema', 11),
    ('Session 3', 'Advanced SQL Queries', 'Write complex SQL queries', 12),
    ('Session 1', 'Introduction to React', 'Build a simple React app', 13),
    ('Session 2', 'State Management in React', 'Manage state using React Hooks', 14),
    ('Session 3', 'Building Full-Stack Applications', 'Build a full-stack web application', 15);

-- Sample data for the dashboard table
INSERT INTO dashboard (codekata, webkata, task, profile_id)
VALUES
    (10, 5, 3, 1),
    (15, 8, 4, 2),
    (5, 3, 2, 3),
    -- Add more sample dashboard data as needed
    (12, 7, 2, 4),
    (8, 4, 1, 5),
    (20, 10, 5, 6),
    (14, 6, 3, 7),
    (18, 9, 4, 8),
    (6, 2, 1, 9),
    (16, 8, 3, 10),
    (9, 5, 2, 11),
    (22, 12, 6, 12),
    (11, 6, 3, 13),
    (17, 9, 4, 14),
    (13, 7, 2, 15);

-- Sample data for the task table
INSERT INTO task (task_description)
VALUES
    ('Complete Assignment 1'),
    ('Read Chapter 3'),
    ('Prepare for Presentation'),
    -- Add more sample task data as needed
    ('Research Topic for Project'),
    ('Write Project Proposal'),
    ('Conduct Experiments'),
    ('Write Research Paper'),
    ('Prepare Poster Presentation'),
    ('Revise for Exams'),
    ('Attend Seminar'),
    ('Complete Lab Exercises'),
    ('Write Thesis'),
    ('Create Project Documentation'),
    ('Present Project'),
    ('Defend Thesis');

-- Sample data for the leaderboard table
INSERT INTO leaderboard (name, rank, batch, learning, profile_id)
VALUES
    ('John Doe', 1, 'Batch A', 'Python Programming', 1),
    ('Jane Smith', 2, 'Batch B', 'Data Science', 2),
    ('Alice Johnson', 3, 'Batch C', 'Web Development', 3),
    -- Add more sample leaderboard data as needed
    ('Bob Brown', 4, 'Batch A', 'JavaScript Development', 4),
    ('Emma Lee', 5, 'Batch B', 'Machine Learning', 5),
    ('Michael Johnson', 6, 'Batch C', 'Data Analysis', 6),
    ('Sara Williams', 7, 'Batch A', 'Frontend Development', 7),
    ('David Clark', 8, 'Batch B', 'Backend Development', 8),
    ('Jennifer Martinez', 9, 'Batch C', 'Software Engineering', 9),
    ('Daniel Taylor', 10, 'Batch A', 'Database Management', 10),
    ('Sophia White', 11, 'Batch B', 'UI/UX Design', 11),
    ('Matthew Harris', 12, 'Batch C', 'Business Analytics', 12),
    ('Olivia Wilson', 13, 'Batch A', 'Pharmaceutical Sciences', 13),
    ('James Anderson', 14, 'Batch B', 'Legal Studies', 14),
    ('Grace Thomas', 15, 'Batch C', 'Fine Arts', 15);

-- Sample data for the queries table
INSERT INTO queries (query, profile_id)
VALUES
    ('How to implement binary search?', 1),
    ('What is the best data structure for a priority queue?', 2),
    ('How to optimize database queries?', 3),
    -- Add more sample queries data as needed
    ('How to deploy a React app?', 4),
    ('What are the advantages of using Redux?', 5),
    ('How to perform sentiment analysis using Python?', 6),
    ('What are the types of joins in SQL?', 7),
    ('How to design a RESTful API?', 8),
    ('What is the difference between supervised and unsupervised learning?', 9),
    ('How to normalize a database?', 10),
    ('What are the principles of responsive web design?', 11),
    ('How to perform financial analysis using Excel?', 12),
    ('What are the side effects of a specific medication?', 13),
    ('How to file a legal case?', 14),
    ('What are the different painting techniques?', 15);

SELECT p.name, a.session_roadmap, a.activities, a.task
FROM profile p
JOIN activities a ON p.id = a.profile_id;

SELECT d.*, l.name, l.ranks
FROM dashboard d
JOIN leaderboard l ON d.profile_id = l.profile_id;

SELECT batch, COUNT(*) AS total_students, SUM(codekata) AS total_codekata
FROM dashboard d
JOIN profile p ON d.profile_id = p.id
GROUP BY batch;

SELECT session_roadmap, COUNT(*) AS total_activities
FROM activities
GROUP BY session_roadmap;


