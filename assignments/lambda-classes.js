// CODE here for your Lambda Classes

class Person {
  constructor([properties]) {
    this.name = properties.name;
    this.age = properties.age;
    this.location = properties.location;
  }
  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
  }
}

class Instructor extends Person {
  constructor(instructorProperties) {
    super(instructorProperties);
    
  }
}
