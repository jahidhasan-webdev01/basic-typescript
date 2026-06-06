// Type Annotation
const myName: string = "Jahid Hasan"

// console.log(myName);    

// Function
const greetings = (friendName: string): string => {
    return `"Hey ${friendName}, Welcome Back!"`
}

console.log(greetings("Rahad"));

// Object
type Student = {
    name: string,
    roll: number,
    gpa: number,
    age: number,
    additional: {
        isRegular?: boolean,
        parentContact: string
    }
}

const student1: Student = {
    name: "Jahid",
    roll: 12,
    gpa: 4.5,
    age: 15,
    additional: {
        parentContact: "01740801878"
    }
}

const studentResult = ({ name, gpa }: Student) => {
    return `Student is: ${name}, and result is: GPA ${gpa}`
}

// console.log(studentResult(student1));

// Array
const numberArray: number[] = [1, 2, 3, 4, 5]
numberArray.push(6)

const twoDimensionalArray: number[][] = [
    [1, 3, 5, 7],
    [2, 4, 6, 8],
    [10, 20, 30, 40]
]

const matrix3D: number[][][] = [
    [
        [1, 2], [3, 4]
    ],
    [
        [5, 6], [7, 8]
    ]
];

// Union Type
let contactNumber: string | number = "01XXX"
contactNumber = 7454

const mixArray: (number | string | boolean)[] = [1, 2, "ABC", true]

let gender: "MALE" | "FEMALE" | "TRANSGENDER" = "MALE"
gender = "FEMALE"


// Type Narrowing
const totalBalance = (name: string, bankBalance: number | string): void => {
    const handCash: number = 100;
    let total: number;
    if (typeof bankBalance === "string") {
        total = handCash + Number(bankBalance);
    } else {
        total = handCash + bankBalance;
    }

    console.log(`Hey ${name}, you have total of ${total} taka`);
}

// totalBalance("Jahid", "50");

// Interface
interface People {
    firstName: string,
    lastName: string,
    age: number

    fullName(): string
}

const jahid: People = {
    firstName: "Jahid",
    lastName: "Hasan",
    age: 25,

    fullName: function () {
        return `${this.firstName} ${this.lastName}`
    }
}

// console.log(jahid.fullName());
interface Family {
    isMarried: boolean
}

interface Employee extends People, Family {
    degination: string,
    yearsOfExperience: number
}

const newTrainee: Employee = {
    firstName: "Jahid",
    lastName: "Hasan",
    age: 25,

    fullName: function () {
        return `${this.firstName} ${this.lastName}`
    },

    degination: "Frontend Intern",
    yearsOfExperience: 0,
    isMarried: false
}

// console.log(newTrainee);