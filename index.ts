// Problem 1:
// Create a TypeScript function filterEvenNumbers that accepts an array of numbers and returns a new array containing only the even numbers.

const filterEvenNumbers = (numbers: number[]): number[] => {
    return numbers.filter(num => num % 2 === 0);
}
// console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));


// Problem 2:
// Write a function reverseString that takes a string as input and returns the reversed version of that string.

const reverseString = (str: string): string => {
    return str.split("").reverse().join("");
}
// console.log(reverseString("BANGLADESH"));


// Problem 3:
// Define a union type StringOrNumber and create a function checkType that uses type guards to return "String" if the input is a string or "Number" if the input is a number.

type StringOrNumber = string | number;
const checkType = (str: StringOrNumber): string => {
    if (typeof str === "string") {
        return "String"
    }
    return "Number"
}

// console.log(checkType(10));


// Problem 4:
// Write a generic function getProperty that takes an object and a key, then returns the value of that key. Use constraints to ensure the key exists on the object.

const getProperty = <T, K extends keyof T>(obj: T, key: K) => {
    return obj[key]
}

const user = {
    id: 1,
    name: "John Doe",
    age: 21
};
// console.log(getProperty(user, "name"));


// Problem 5:
// Define an interface Book with properties title, author, and publishedYear. Create a function toggleReadStatus that accepts a Book object and returns a new object with an added isRead property (boolean), defaulting to true.

interface Book {
    title: string;
    author: string;
    publishedYear: number
}

const toggleReadStatus = (obj: Book): Book & { isRead: boolean } => {
    return {
        ...obj,
        isRead: true
    }
}
// console.log(toggleReadStatus({
//     title: "ABC",
//     author: "XYZ",
//     publishedYear: 2010
// }));


// Problem 6:
// Create a class Person with a name and age. Then, create a subclass Student that adds a grade property. Include a method getDetails in the Student class that returns a string with the student's name, age, and grade.

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age
    }
}

class Student extends Person {
    grade: string;

    constructor(name: string, age: number, grade: string) {
        super(name, age)
        this.grade = grade
    }

    getDetails(): string {
        return `${this.name} is ${this.age} years old and got ${this.grade}`
    }
}

const student1 = new Student("ABC", 12, "B+")
const student2 = new Student("XYZ", 12, "B+")

// console.log(student1.getDetails());