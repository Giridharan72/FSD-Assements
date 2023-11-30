const Resume = {
  "name": "Giridharan",
  "contact": {
    "email": "giri@gmail.com",
    "phone": 984202325,
    "address": "salem"
  },
  "summary": "Results-driven software engineer with 1 year of experience in Analytics. Passionate about creating efficient and scalable solutions.",
  "education": [{
    "degree": "Bachelor of Engineering in Electronics and communication engineering",
    "school": "kumaraguru college of technology",
    "year": 2023
  }],
  "experience": [
    {
      "position": "Analyst",
      "company": "Tech Solutions Inc.",
      "location": "kochi",
      "startDate": "20-02-2023",
      "endDate": "30-08-2023",
      "responsibilities": [
        "Generating reports using analytical tools and need to creat data set"
      ]
    }
  ],
  "skills": ["JavaScript", "React", "Node.js", "HTML", "CSS", "SQL", "Git"],
  "languages": ["English (Fluent)", "Spanish (Intermediate)"],
  "certifications": ["AWS Certified Developer - Associate"]
};

// Check if "skills" property exists and is an array
if (Resume.hasOwnProperty("skills") && Array.isArray(Resume.skills)) {
  // Iterate over the "skills" array using for...of loop
  for (const skill of Resume.skills) {
    console.log(`Skill: ${skill}`);
  }
}
