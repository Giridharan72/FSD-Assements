const jsonObject = {
    "name": "JGiri",
    "age": 22,
    "city": "New York",
    "skills": ["JavaScript", "Python", "HTML", "CSS"]
  };
  
  const keys = Object.keys(jsonObject);

if (Array.isArray(jsonObject.skills)) {
    jsonObject.skills.forEach(skill => {
      console.log(`Skill: ${skill}`);
    });
  }
  