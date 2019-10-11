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
    this.specialty = instructorProperties.specialty;
    this.favLanguage = instructorProperties.favLanguage;
    this.catchPhrase = instructorProperties.catchPhrase;
  }
  demo(subject) {
    console.log('Today we are leaning about {subject}');
  }
}

class Student extends Person {
  constructor(studentProperties) {
    super(studentProperties);
    this.previousBackground = studentProperties.previousBackground;
    this.className = studentProperties.className;
    this.favSubjects = studentProperties.favSubjects;
  }
  listsSubjects() {
    console.log('studentProperties.fabSubjects');
  }
  PRAssignment() {
    console.log(`${this.name} has submitted a PR for {subject}`);
  }
  sprintChallenge() {
    console.log(`${this.name} hav begun sprint challenge on {subject}`);
  }
}

class ProjectManagers extends Instructor {
  constructor(projectManagersProperties){
    super(projectManagersProperties)
    this.gradClassName = projectManagersProperties.gradClassName;
    this.favInstructor = projectManagersProperties.favInstructor;
  }
  standUp() {
    console.log(`{name} announces to {channel}, @channel standy times!`);
  }
  debugsCode() {
    console.log(`{name} debus {student.name}'s cone on {subject}`);
  }
}

const teacher = new Instructor('Hello');
const learn = new Student('Hey, there');
const teamLead = new ProjectManagers('Howdy');

console.log(teacher);
console.log(learn);
console.log(teamLead);