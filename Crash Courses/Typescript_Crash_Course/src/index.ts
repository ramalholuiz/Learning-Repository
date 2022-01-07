// Basic types
let id: number = 5;
let company: string = 'Dale';
let isOk: boolean = true;
let qualquerCoisa: any = 'hello';
let age: number;

let ids: number[] = [1,2,3,4,5];
let arr: any[] = [1, true, 'hehe'];

// Tuples
let person: [number, string, boolean] = [1, 'hehe', false]; // Order is important!
// Tuple array
let employee: [number, string][]
employee = [
  [1, 'Renato'],
  [2, 'Floki'],
  [3, 'Amanda']
]

// Union
let pid: string | number = 22; // Or operator in types
pid = '22';

// Enums
enum Direction1 {
  Up,
  Down,
  Left,
  Right
}

enum Direction2 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
}

// Objects

// This is an interface
type User = {
  id: number,
  name: string
}

const user: User = {
  id: 1,
  name: 'John'
}

// Type Assertion
let cid: any = 1;
let customerId = <number>cid; // This feels like a casting in C/C++
let customerId2 = cid as number; // Another way to do type assertion

// Functions
const addNum = (x: number, y: number): number => {
  return x + y;
}

const log = (message: string | number): void =>{
  console.log(message);
}
// log('hehe');
// log(1);

// Interfaces: this is used to create custom typedefs
interface UserInterface {
  id: number
  name: string
  age?: number // optional property
}

const user1: UserInterface = {
  id: 2,
  name: 'Renato',
  // this would give an error if age wasn't optional
}

// type can be used with primitive and unions
type Point = number | string;
let p1: Point = 1;
p1 = 'hehe';

// Readonly properties
interface UserInterface2 {
  readonly id: number
  name: string
}

const user2: UserInterface2 = {
  id: 3,
  name: 'Amanda',
}

// user2.id = 1; // Error because id is readonly

interface MathFunc{
  (x: number, y: number): number
}

// const add: MathFunc = (x: string, y) => x + y; // this gives an error because it isn't agreeing with the function interface
const sub: MathFunc = (x: number, y: number): number => x - y // this is ok, all types match


// Interface for classes
interface PersonInterface {
  id: number
  name: string
  register(): string
}


// Classes
class Person implements PersonInterface{
  id: number
  name: string

  constructor(id: number, name: string){
    this.id = id;
    this.name = name;
  }

  register(){
    return `${this.name} is now registered `
  }
}

const renato = new Person(1, 'Renato');
const amanda = new Person(2, 'Amanda');
// console.log(renato.register(), amanda.register());


// Extending classes
// Subclass
class Employee extends Person {
  occupation: string

  constructor(id: number, name: string, occupation: string){
    super(id, name);
    this.occupation = occupation;
  }
}

const renato2 = new Employee(1, 'Renato', 'desempregado');
// console.log(renato2, renato2.register());


// Generics (reusable components)
const getArray = <T>(items: T[]):T[] => { // This REALLY looks like a template in C++
  return new Array().concat(items);
}

const numArray = getArray<number>([1,2,3,4]);
const strArray = getArray<string>(['Renato','amanda','dale']);

numArray.push(5);
