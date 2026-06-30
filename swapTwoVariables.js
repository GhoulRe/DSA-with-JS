//method 1
//Swap two variables 
let a  = 10;
let b = 20;
let c;

c = a // c = 10 a = 10
a = b // a = 20 
b = c // b = 10

console.log(a);
console.log(b);


// method 2
// Swap two variables without extra variables 

let a  = 10;
let b = 20;

a = a + b; //a = 30
b = a - b; // b = 10; a = 30
a = a - b; // a = 20; 

console.log(a);
console.log(b);

//method 3
//swap two variables in JavaScript using array destructuring.

let a = 10;
let b = 20;

[a,b] = [b,a]

console.log(a,b);
