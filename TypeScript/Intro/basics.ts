// Primitives: number, string, boolean, null, undefined

let age: number;
age = 12;

let username: string;
username = "Tony";

let isDeveloper: boolean;
isDeveloper = true;

// More complex types

let hobbies: string[];
hobbies = ["Sports", "Cooking"];

let person: {
  name: string;
  age: number;
};
person = {
  name: "Tony",
  age: 32,
};

let people: {
  name: string;
  age: number;
}[];

// Type inference

let course = "React";
// course = 1;

// Union types

let course1: string | number = "React";
course1 = 1;

// Alias types

type Person = {
  name: string;
  age: number;
};
let person1: Person;
let people1: Person[];

// Functions & types

function add(a: number, b: number): number {
  return a + b;
}

function printOutput(value: any): void {
  console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const numberArray = insertAtBeginning(demoArray, -1);
const stringArray = insertAtBeginning(["a", "b", "c"], "d");

// Classes

class Student {
  firstName: string;
  lastName: string;
  age: number;
  private courses: string[];

  constructor(first: string, last: string, age: number, courses: string[]) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.courses = courses;
  }

  // Shorthand notation
  // class Student {

  // constructor(
  // public firstName: string,
  // public lastName: string,
  // public age: number,
  // private courses: string[]
  // ){}

  enroll(courseName: string) {
    this.courses.push(courseName);
  }

  listCourses() {
    return this.courses.slice();
  }
}

const student = new Student("Tony", "Nacheva", 20, ["Angular"]);
student.enroll("React");
student.listCourses();

// Interfaces

interface Human {
  firstName: string;
  age: number;

  greet: () => void;
}

let tony: Human;

tony = {
  firstName: "Tony",
  age: 20,
  greet() {
    console.log("Hello!");
  },
};

class Developer implements Human {
  firstName!: string;
  age!: number;
  greet!: () => void;
}
