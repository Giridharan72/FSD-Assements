const jsonObject = {
    "name": "Giri",
    "age": 22,
    "city": "New York",
    "skills": ["JavaScript", "Python", "HTML", "CSS"]
  };

  const keys = Object.keys(jsonObject);
  
  for(const key in jsonObject){
    const values=jsonObject[key];
    console.log(`${key}: ${values}`);

  }