let message :string= "good morning";
console.log(message);


// objects
// A javaScript object is an entity having state and behavior (properties and method). For example: car, pen, bike, chair, glass, keyboard, monitor etc. JavaScript is an object-based language. Everything is an object in JavaScript.
let user ={
    name: "bushra",
    age: 20 ,
    qualification : "matric"
}
console.table(user);

// in javascript everything is an object
// a way to group values with similar characteristics together to make your code more readable. 

// Type Declaration
let student : {
    name: string,
    age: number
}

student = {
    name: "bushra",
    age: 20
}

console.log(student.age);
console.log(student["name"]);
console.table(student);

// anonymous

let teacher : {name: string, exp: number} = {
    name: "shazia",
    exp: 12
}

console.log("teacher");

// interface

interface Manager {
    name: string,
    subordiates?: number
}

let storeManager: Manager = {
    name: "Bilal"
}