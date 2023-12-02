class Person {
    constructor(firstname, secondname, age, email, number) {
      this.firstname = firstname;
      this.secondname = secondname;
      this.age = age;
      this.email = email;
      this.number = number;
    }
  
    getdetails = function() {
      console.log(`Name: ${this.firstname}.${this.secondname}, Age: ${this.age}, Email: ${this.email}, Number: ${this.number}`);
    };
  }

const person=new Person("Giridharan","K",22,"giridharan@722.com",9543029010)
person.getdetails();