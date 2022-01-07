"use strict";
// Basic types
let id = 5;
let company = 'Dale';
let isOk = true;
let qualquerCoisa = 'hello';
let age;
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'hehe'];
// Tuples
let person = [1, 'hehe', false]; // Order is important!
// Tuple array
let employee;
employee = [
    [1, 'Renato'],
    [2, 'Floki'],
    [3, 'Amanda']
];
// Union
let pid = 22; // Or operator in types
pid = '22';
// Enums
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: 'John'
};
// Type Assertion
let cid = 1;
let customerId = cid; // This feels like a casting in C/C++
let customerId2 = cid; // Another way to do type assertion
// Functions
const addNum = (x, y) => {
    return x + y;
};
const log = (message) => {
    console.log(message);
};
const user1 = {
    id: 2,
    name: 'Renato',
    // this would give an error if age wasn't optional
};
let p1 = 1;
p1 = 'hehe';
const user2 = {
    id: 3,
    name: 'Amanda',
};
// const add: MathFunc = (x: string, y) => x + y; // this gives an error because it isn't agreeing with the function interface
const sub = (x, y) => x - y; // this is ok, all types match
// Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered `;
    }
}
const renato = new Person(1, 'Renato');
const amanda = new Person(2, 'Amanda');
// console.log(renato.register(), amanda.register());
// Extending classes
// Subclass
class Employee extends Person {
    constructor(id, name, occupation) {
        super(id, name);
        this.occupation = occupation;
    }
}
const renato2 = new Employee(1, 'Renato', 'desempregado');
// console.log(renato2, renato2.register());
// Generics (reusable components)
const getArray = (items) => {
    return new Array().concat(items);
};
const numArray = getArray([1, 2, 3, 4]);
const strArray = getArray(['Renato', 'amanda', 'dale']);
numArray.push(5);
