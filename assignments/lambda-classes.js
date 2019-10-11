// CODE here for your Lambda Classes

class Person {
  constructor(properties) {
    this.name = properties.name;
    this.age = properties.age;
    this.location = properties.location;
  }
  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
  }
}

class Instructor extends Person {
  constructor(properties) {
    super(properties);
    this.specialty = properties.specialty;
    this.favLanguage = properties.favLanguage;
    this.catchPhrase = properties.catchPhrase;
  }
  demo(subject) {
    console.log('Today we are leaning about ${subject}');
  }
}

class Student extends Person {
  constructor(properties) {
    super(properties);
    this.previousBackground = properties.previousBackground;
    this.className = properties.className;
    this.favSubjects = properties.favSubjects;
  }
  listsSubjects() {
    console.log(`${this.name}'s favorite subjects are ${this.favSubjects}`);
  }
  PRAssignment() {
    console.log(`${this.name} has submitted a PR for ${this.subject}`);
  }
  sprintChallenge() {
    console.log(`${this.name} has begun sprint challenge on ${this.subject}`);
  }
}

class ProjectManagers extends Instructor {
  constructor(properties){
    super(properties);
    this.gradClassName = properties.gradClassName;
    this.favInstructor = properties.favInstructor;
  }
  standUp() {
    console.log(`${this.name} announces to ${this.Channel}, @channel standy times!`);
  }
  debugsCode() {
    console.log(`${this.name} debugs ${this.student}'s code on ${this.subject}`);
  }
}

const teacher = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  favLanguage: 'JavaScript, Python, Elm etc.',
  specialty: 'Redux',
  catchPhrase: `Don't forget the homies`
});
const me = new Student({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`,
  previousBackground: 'Audio/Visual Installations',
  className: 'WEBPT11',
  favSubjects: 'JavaScript, Less, Flexbox'
});
const teamLead = new ProjectManagers({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`,
  gradClassName: 'WEBPT11', 
  favInstructor: 'Pace Elsworth'
});

console.log(teacher);
console.log(me);
console.log(teamLead);
teacher.demo();
me.listsSubjects();
me.PRAssignment();
me.sprintChallenge();
teamLead.standUp();
teamLead.debugsCode();