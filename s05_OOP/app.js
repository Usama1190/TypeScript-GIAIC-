// Topic : Object Oriented Programming ( OOP )               June 22 , 24
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Object based programming , clean efficient code
// 1. Objects         2. Class  ( blue print )
/*
class House {
    ownerName: string = 'Usama';
    address: string = 'A123';
    numberOfDoors: number = 2;
}

let h1 = new House();                 // Promise => class
 
console.log(h1);
console.log(h1.address);
console.log(h1['address']);


let h2 = new House();
let h3 = new House();
*/
/*
class House {
    ownerName: string = 'usama';
    address:string = 'A123';

    constructor() {}
}
*/
/*
class House {
    ownerName: string;
    // address:string;

    constructor(name: string) {
        this.ownerName = name;
    }
}

let h1 = new House('usama');

console.log(h1);
*/
/*
class House {
    ownerName: string;
    address:string;

    constructor(name: string, ads: string) {
        this.ownerName = name;
        this.address = ads;
    }
}

let h1 = new House('usama', 'A345');

console.log(h1);
*/
// prototypes home work
/*
class House {
    ownerName: string;
    readonly address:string;

    constructor(name: string, ads: string) {
        this.ownerName = name;
        this.address = ads;
    }
}

let h1 = new House('usama', 'A123');

console.log(h1);
*/
// Objects have two main things properties and methods
/*
class House {
    ownerName: string;
    readonly address:string;
    bell() {
        console.log('Ding Dong');
        
    }

    constructor(name: string, ads: string) {
        this.ownerName = name;
        this.address = ads;
    }
}

let h1 = new House('usama', 'A123');
h1.bell();

console.log(h1);
*/
// Four principals or rules in OOP 
// 1. Encapsulation      2. Polymorphism         3. Inheritance
// 4. Abstraction
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.eat = function () {
        console.log('Eaten!');
    };
    return Animal;
}());
/*
class Cat extends Animal{
    meow() {
        console.log('Meow meow!!');
        
    }
}
*/
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name, color) {
        var _this = _super.call(this, name) || this;
        _this.eyeColor = color;
        return _this;
    }
    return Cat;
}(Animal));
var myCat1 = new Cat('Bublo', 'pink');
myCat1.eat();
// myCat1.meow();
console.log(myCat1);
// class ko used karte hue object or instance banao
// let h2 = new Cat('Tuk tuk');
// console.log(h2);
// Topic Synchoronous and Asynchoronous JavaScript ,         June 08 , 24
//       setTimeout() , callBack function , Promise , await
// Synchoronous JavaScript executes line by line and fast , no wait
/*
console.log("First");

setTimeout( () => {
    console.log("Second");
    
}, 3000);

console.log("Third");
*/
// Asynchronous JavaScript executes parallel programming
/*
console.log("First");

setTimeout( () => {
    console.log("Second");
    
}, 0);

console.log("Third");
*/
/*
console.log("First");

setTimeout( () => {
    console.log("Second");
    
});

console.log("Third");
*/
/*
function orderPizza() {
    setTimeout( () => {
        return "Order Placed";
    }, 2000);
}

let result = orderPizza();

console.log(result);          // undefined
*/
/*
function orderPizza() {
    setTimeout( () => {
        console.log("Order Placed");
        
    }, 2000);
}

orderPizza();
*/
/*
function orderPizza() {

}

console.log(orderPizza());        // undefined
*/
/*
function preparePizza() {
    setTimeout( () => {
        console.log("Prepared Pizza!");
        
    }, 5000);
}

preparePizza();
*/
/*
function orderPizza( preparePizzaCb: any ) {
    setTimeout( () => {
        console.log("Order Placed");
        preparePizzaCb();
        
    }, 2000);
}

orderPizza( preparePizza );

function preparePizza() {
    setTimeout( () => {
        console.log("Prepared Pizza!");
        
    }, 5000);
}
*/
/*
type Fn = () => void;

function orderPizza( preparePizzaCb: Fn ) {
    setTimeout( () => {
        console.log("Order Placed");
        preparePizzaCb();
        
    }, 2000);
}

orderPizza( preparePizza );

function preparePizza() {
    setTimeout( () => {
        console.log("Prepared Pizza!");
        
    }, 5000);
}
*/
// Call back hell  ( function inside function inside function inside... )
//                   Pyramid of dooooom!
// Pormise
/*
function checksMarks() {
    return new Promise( (resolve, reject) => {
        
        let marks = 91;

        setTimeout( () => {
            if(marks >= 90) {
                resolve("Party!!!");
            }
            else {
                reject("Nalaik!!");
            }
        }, 5000)
    })
}

checksMarks().then( () => {        // .then method is always used on promise
    console.log("Party!!!!");
    
})
.catch( () => {
    console.log("No Party!!");
    
})
*/
// tsc --init , npm init -y
/*
function checksMarks() {
    return new Promise( (resolve, reject) => {
        
        let marks = 89;

        setTimeout( () => {
            if(marks >= 90) {
                resolve("Party!!");
            }
            else {
                reject("Nalaik!!");
            }
        }, 5000)
    })
}

checksMarks()
.then( (msg) => {
    console.log("Party!!!!");
    console.log(msg, 'Message!');
    
})
.catch( (err) => {
    console.log("No Party!!!!");
    console.log(err, 'Error!');
    
})
*/
/*
function checksMarks() {
    return new Promise( (resolve, reject) => {
        
        let marks = 91;

        setTimeout( () => {
            if(marks >= 90) {
                resolve("Party!!");
            }
            else {
                reject("Nalaik!!");
            }
        }, 5000)
    })
}

// await is always connect to promise

const returnValue = await checksMarks();
console.log(returnValue);
*/
// Topic toFixed , toUpperCase , toLowerCase , slice ,        June 1 , 24
// current topic narrowing , typeof , Math.random , 
// interface , Structural Typeing , stale objects and fresh objects
// let a = 18.5;
// a.toFixed(2);
// console.log(a);
// let num = a.toFixed(2);
// console.log(num);
// let a = '18.5';
// a.toFixed(2);    // error b/c toFixed() method for number not for string
// let a = 'Usama';
// let b = a.toUpperCase();
// console.log(b);
// let b = a.toLowerCase();
// console.log(b);
// for title case
// let titleCase = a[0].toUpperCase() + a.slice(1);
// console.log(titleCase);
// Narrowing
// let a: string | number;
// // a.            ( show common methods )
// a = 10;          // Narrowing process. Original datatype is not change
// a.toFixed(2);    // show number methods
// a = 'Usama';     // no error b/c both data type is accepted
// // a.toFixed(2); // throw error b/c this time a will be string and toFixed is number method
// a.toUpperCase(); // show string methods
// a = 10;          // Narrowing process
// a.toUpperCase()   // throw error b/c toUpperCase() is string method
// Narrwoing is basically for TypeScript
// Home Work   ( Asynchronous JavaScript )
// a = 10;
// number
// number
// number
// a = 'Usama';
// string
// string
// string
// typeof function
// let num1 = 18;
// console.log(typeof num1);     // number
// let num1 = '18';
// console.log(typeof num1);        // string
// let num1 = true;
//           'boolean' == 'boolean'         true
// console.log(typeof num1 == 'boolean');    // true
// let num1 = 18;
//           'number' == 'boolean'       false
// console.log(typeof num1 == 'boolean');    // false
// let num1 = 18;
//          'number' == 'number'        true
// console.log(typeof num1 == 'number');     // true
// (typeof num1 == 'number') this is type card
// window + dot open emogis popup
// Math.random()     ( generate random number range 0.00000... to 0.99999... )
// console.log(Math.random());
// let random = Math.random();
// console.log(random);
// let a = random > 0.6 ? 'Usama' : 16;   // ternary operator most used operator
// console.log(a);
// console.log(`My random no is ${a}`);       // template literals
// a ( data type is union , string or number )
// if( typeof a == 'string' ) {                 // (typeof a == 'string') Typecard
//     console.log('Narrowing to string!');
// }
// else {
//     console.log('Narrowing to number!');
// }
// let random = Math.random();
// let a = random > 0.6 ? 'Usama' : random > 0.8 ? 'Hamza' : 16
// console.log(a);
// null 
// let age: null | number = null;           // put intensionally null
// let salary: null | number = null;
// Structural Typing     step 05c
// interface         ( use to make object type )
// interface User {               // interface syntax
//     name: string,
//     age: number,
//     address: {
//         city: string,
//         state: string
//     }
// }
// type User = {              // type alias syntax
//     name: string,
//     age: number,
//     address: {
//         city: string,
//         state: string
//     }
// }
// difference between interface and type alias
// interface type for usually using to objects and some time to function
// type alias make type for multiple data type 
// interface Address {
//     city: string,
//     state: string
// }
// interface User {
//     name: string,
//     age: number,
//     address: Address
// }
// let User1: User = {
//     name: 'Usama',
//     age: 20,
//     address: {
//         city: 'Karchi',
//         state: 'Sindh'
//     }
// }
// make interface I choose car
// interface Brand {
//     name: string,
//     register: boolean
// }
// interface Model {
//     name: string,
//     year: number
// }
// interface Car {
//     color: string,
//     brand: Brand,
//     model: Model
// }
// let myCar: Car = {
//     color: 'White',
//     brand: {
//         name: 'Volvo',
//         register: true
//     },
//     model: {
//         name: 'XC60',
//         year: 2020
//     }
// }
// Structural Typing
// interface Deal1 {
//     food: string
// }
// interface Deal2 {
//     food: string,
//     drink: string
// }
// let usamaOrder: Deal1 = {
//     food: 'biryani'
// }
// let aliOrder: Deal2 = {
//     food: 'biryani',
//     drink: 'ishting'
// }
// structural typing
// let usamaTable: Deal1 = aliOrder;    // no error b/c extra properties are allowed
// let aliTable: Deal2 = usamaOrder  // error b/c missing properties are not allowed
// here you drink make an optional
// stale objects vs fresh objects      // stale means baasi
// let usamaTable: Deal1 = aliOrder;    // here is stale object use 
// let aliTable: Deal2 = {          // here is fresh object use
//     food: 'biryani',
//     drink: 'ishting',
// salet: true         // extra properties are not allowed in fresh objects
// }
// extra properties are allowed in stale objects
// extra properties are not allowed in fresh objects
// Topic any , unknown , explicit typecasting , rest parameter    May 25 , 24
// and function overloading 
// any
// let age: any;
// age = 18;        // '18' or true or [] or {} no error
// age.xyz.usama;   // no error
// unknown
// let age: unknown;
// age = true;
// age.xyz.usama;    // error data type any
// first we known the data type than use
// example
// let price = 18;
// use number method toFixed()
// console.log(price.toFixed(2));
// explicit type casting
// let age: unknown;
// age = 18;
// age as number;     // explicit type casting
// let newAge = age as number;
// console.log(newAge.toFixed(2));
// console.log( (age as number).toFixed(2) );
// explicit type casting age ko number me convert karega  (age as number)
// (age as number)                // method 01
// let newAge = age as number;    // method 02 create a variable
// (<number>age).toFixed(2);         // method 03
// revision function
// function sum(a: number, b: number): number {
//     return a + b;
// }
// let mySum = sum(23, 25);
// console.log(mySum);
// In this case function return a number than type of function is number
// if function does not return a value than the type of function is void
// rest parameter
// function sum(...usama: number[]) {
//     let myNum = 0;
//     for(let i = 0; i < usama.length; i++) {
//         myNum += usama[i];
//     }
//     return myNum;
// }
// let mySum = sum(13, 23, 53, 11);
// console.log(mySum);
// function overloading
// function add(arg1: number, arg2: number): number 
// function add(arg1: string, arg2: string): string
// function add(arg1: boolean, arg2: boolean): boolean
// function add(arg1: any, arg2: any): any {
//     return arg1 + arg2;
// }
// add(2, 3);         // argument accepted, number to number
// add('2', '3');     // argument accepted, string to string
// add(true, false);  // argument accepted, boolean to boolean
// add('2', 3);          // argument regected, string to boolean
// add(3, '3');          // argument rejected, number to string
// add(true, 2);         // argument rejected, boolean to number
// function add(arg1: string, arg2: number): string    // concatenation 
// function add(arg1: number, arg2: string): string    // concatenation
// function add(arg1: number, arg2: boolean): boolean  // boolean
// function add(arg1: any, arg2: any): any {
//     return arg1 + arg2;
// }
// add('2', 4);      // argument accepted, string to number
// add(3, '1');      // argument accepted, number to string
// add(3, true);     // argument accepted, number to boolean
// home work : create login function that accepts two overloads
// first overload accept email or password both
// second overload accept email
// function login(email: string, password: string): string;
// function login(email: string): string;
// function login(email: any, password?: any): any {
//     return 'welcome you are logged in!';
// }
// let user = login('usama@gmail.com', 'dshfjh');
// console.log(user);
// Topic : enum + loop + any + unknown                      MAY 18 , 24
// enum Color {
//     Red,
//     Green,
//     Yellow
// }
// let trafficLight : Color = Color.Green; 
// console.log(Color.Yellow);           // result 2
// console.log(Color[0]);               // result Red
// console.log(Color['Yellow']);        // result 2
// console.log(trafficLight);           // result 1
// initialization enum
// enum Color {
//     Red = 2,
//     Green,
//     Yellow
// }
// console.log(Color.Green);               // result 3
// console.log(Color.Yellow);              // result 4
// console.log(Color.Red);                 // result 2
// enum Color {
//     Red,
//     Green = 2,
//     Yellow
// }
// console.log(Color.Yellow);                // result 3
// console.log(Color.Green);                 // result 2
// console.log(Color.Red);                   // result 0
// real world example
// enum Login {
//     Google,
//     Facebook,
//     Email
// }
// enum are alternate of type literals or union
// enum are used for data type or value
// enum Color {
//     Red,
//     Green,
//     Yellow
// }
// let trafficLight = Color.Red;
// if( trafficLight == Color.Red) {
//     console.log('Please Stop Vehicle!');
// }
// else if (trafficLight == Color.Yellow) {
//     console.log('Start the engine and ready for drive');
// }
// else if (trafficLight == Color.Green) {
//     console.log('Go!');
// }
// Home Work : enum example with switch statements / cases
// loop
// for(let i = 0; i < 100; i++) {
//     console.log('Sorry!');
// }
// for (let i = 0; i < 3; i++) {
//     console.log('Sorry!');
// }
// for(let i = 0; i < 10; i++) {
//     console.log(i);
// }
// for(let i = 10; i > 0; i--) {
//     console.log(i);
// }
// let fruits = ['Apple','Mango','Banana'];
// for(let i = 0; i <= 2; i++) {
//     console.log(fruits[1]);
// }
// for(let i = 0; i <= 2; i++) {
//     console.log(fruits[i]);
// }
// for(let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }
// Home Work : while loop
// type any
// let age: any;       // kuch bhi
// age = 1;            // ok
// age = 'John';       // ok
// age = true;         // ok
// age = null          // ok
// age.shfjdfhj;       // ok
// type unknown
// let age: unknown;      // pata nahi
// age = 2;               // ok
// age = 'Doe';           // ok
// age = false;           // ok
// age = null;            // ok
// age.sfhdkhfj;          // not ok
// Home Work : difference b/w any and unknown
// Book: TypeScript Mastary a step-by-step learning experience
// Variables
// let favoriteColor = "red";
// console.log(favoriteColor);
// Change the value of favoriteColor
// let myColor = "blue";
// console.log(myColor);
// myColor = "green";
// console.log(myColor);
// TypeScript assign types to variables
// let userName: string = "Usama Israr Khan";
// number not assign in type string
// userName = 25;
// basic data types
// let firstName: string = "Usama Israr";   // string
// let age: number = 25;   // number
// let isStudent: boolean = true;   // boolean
// let randomValue: any = "https://www.linkdin.com/in/usamaisrar/"   // any
// commits 
// This is Usama Israr, a DevOps Architect
/* I recommand you use this platform.
You can follow me at "http://linktr.ee/ameenalam"
*/
// let firstName: string = "Usama";
// let secondName: string = "Israr";
// let fullName: string = firstName + " " + secondName;
// console.log(fullName);
// type interface
// strongly type
// let a : string = "Pakistan";
// let b : number = 9;
// let c : boolean = true;
//type interface
// let e = "USA";
// let f = 10.9;
// let g = false;
// let or const
// let currentBalance = 100;   // This value can change
// const accountNumber = "123456789";   //This value remains constant
// currentBalance = 50;   // this is allowed
// accountNumber = "987654321";   // Error: cannot assign to 'accountNumber' because it is a constant
// Errors 
// syntax error
// lett message = "Hello World";   // syntax error
// console.log(message);
// type error
// let message = "Hello World";
// console.loger(message);    // type error
// assignment error
// let message = "Hello World";
// message = 6;                  // assignability error
// console.log(message);
// String concatenation
// let firstName: string = 'Usama';
// let lastName: string = 'Israr';
// let fullName: string = firstName + ' ' + lastName;
// console.log(fullName);
// Templates literals
// let firstName: string = "Usama";
// let lastName: string = "Israr";
// let fullName: string = `${firstName} + ${lastName}`;
// console.log(fullName);
//Operators
// Addition +
// console.log(2 + 3);
// let num1: number = 2;
// let num2: number = 3;
// let card: number = num1 + num2;
// console.log(card);  // 5
// subtraction
// let card: number = 5;
// let num3: number = 2;
// let total: number = card - num3;
// console.log(total);   // 3
// Multiplication
// let bags: number = 4;
// let apples: number = 5;
// let totalApples: number = bags * apples;
// console.log(totalApples);   // 20
// Division
// let totalApples: number = 20;
// let bags: number = 4;
// let eachBag: number = totalApples / bags;
// console.log(eachBag);   // 5
// Exponentiation
// let layer: number = 5;
// let apple: number = 5;
// let power: number = layer ** 2;
// console.log(power);   // 25
// Modulus
// let apple = 5;
// let bags = 2;
// let remainder = apple % bags;
// console.log(remainder);   // 1
// unary operators
// let a: number = 5;
// let b: number = 2;
// let c: number;
//   6  +  7  +  1  + 0   + 7 +  1  + 1
// c = ++a + a++ + --b + b-- + a + b++ + b;
// console.log(c);   // 23 but 22
// combining operators
// let result = 3 + 4 * 5;
// console.log(result);     // 23
// answer will be 23 or 35 or ??
// let result = 3 + 4 * 5;
// result++;
// console.log(result);   // 24
// answer will be 23 or 24 or 35 or 36 or ??
// 16-03-24 class 7
// let userPercentage = 90;
// if (userPercentage > 100 || userPercentage < 0) {
//     console.log("Invalid Percentage");
// }
// else if (userPercentage <= 100 || userPercentage >= 90) {
//     console.log("A+ Grade");
// }
// else if (userPercentage < 90 || userPercentage >= 80) {
//     console.log("A Grade");
// }
// else if (userPercentage < 80 || userPercentage >= 70) {
//     console.log("A- Grade");
// }
