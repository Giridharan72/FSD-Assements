const jsonObject = {
    "name": "JGiri",
    "age": 22,
    "city": "New York",
    "skills": ["JavaScript", "Python", "HTML", "CSS"]
  };

  const keys = Object.keys(jsonObject);
  if (jsonObject.hasOwnProperty("skills") && Array.isArray(jsonObject.skills)) {
    for(const skill of jsonObject.skills){
        console.log(`Skill: ${skill}`);
    }
  }