const JsonObject={
    "name":"Giridharan",
    "age":22,
    "city":"salem",
    "skills":["JavaScript","Java","C++","HTML","CSS"]
};
const keys=Object.keys(JsonObject);
console.log(keys);

for(let i=0;i<keys.length;i++){
    const key=keys[i];
    const value=JsonObject[key];
    console.log(`${key}:${value}`);
}
