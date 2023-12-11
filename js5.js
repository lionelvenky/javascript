// arrow function types


const add = (x, y) => x + y;

const result = add(5, 3);
console.log(result); 



const factorial = (n) => (n === 0 || n === 1) ? 1 : n * factorial(n - 1);

const resultFactorial = factorial(5);
console.log(resultFactorial); 




const greet = (name) => `Hello, ${name}!`;

const greeting = greet("venky");
console.log(greeting); 




const isEven = (number) => number % 2 === 0;

const num = 10;
console.log(isEven(num)); 