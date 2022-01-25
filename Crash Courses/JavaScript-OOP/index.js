// Objects

// Creating objects

// Object literal syntax
const circle = {
    radius: 1, // Attributes/properties
    location: {
        x: 1,
        y: 1,
    },
    draw: function () {
        // Method
        console.log('draw');
    },
};

circle.draw();

// Factories
const createCircle = radius => {
    return {
        radius,
        draw: function () {
            console.log('draw');
        },
    };
};

const circle1 = createCircle(2); // Instantiate the object with the factory function
circle1.draw();

// Constructors
// Apparently this doesn't work with ES6 arrow functions
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    };
}
const circle2 = new Circle(2);
circle2.draw();

// Constructor property
console.log(circle2.constructor);

let a = {}; // let x = new Object();
// JavaScript has a lot of objects, like Object(), String(), Boolean(), Number(), Array()...

// Using the JS object Function()
const Circle1 = new Function(
    'radius',
    `this.radius = radius;
this.draw = function () {
    console.log('draw');
};`
);

const circle3 = new Circle1(10);
console.log(circle3);

/* Value Types vs Reference Types
 *   Number         Object
 *   String         Function
 *   Boolean        Array
 *   Symbol
 *   undefined
 *   null
 *
 *  Primitives are copied by value
 *  Objects are copied by reference
 */

// using value types
let x = 10;
let y = x; // makes a copy of x into y

x = 20;
console.log(x); // 20
console.log(y); // 10

// using reference
let x1 = { value: 10 };
let y1 = x1; // this makes y1 point to x1

x1.value = 20;
console.log(x1); // {value: 20}
console.log(y1); // {value: 20}

// Using functions
let number = 10;
const increase = number => number++;
increase(number);
console.log(number); // 10 -> the function doesn't change, it was passed by value

let number1 = { value: 10 };
const increase1 = number => number.value++;
increase1(number1);
console.log(number1); // {value: 11} -> number1 was passed by reference and is changed by the function

// Adding / Removing properties from objects (using Circle object from line 35)

const circle4 = new Circle(10);

circle4.location = { x: 1 };
// Using bracket notation
circle4['locationY'] = { y: 1 };
const propertyName = 'diameter';
circle4[propertyName] = 50;
console.log(circle4);

// Dinamically delete properties from objects
delete circle4.diameter;
delete circle4['locationY'];
console.log(circle4);

// Getting keys from an object
const circle5 = new Circle(20);

for (let key in circle5) {
    console.log(key, circle5[key]);
}

const keys = Object.keys(circle5); // return all object keys in an array
// With this approach, we cannot separate properties from methods
console.log(keys);

// To get a specific property, we use 'in' operator
if ('radius' in circle5) {
    console.log('Circle has a radius');
}
