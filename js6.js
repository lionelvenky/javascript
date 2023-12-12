// Using an anonymous function as a callback


const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map(function(num) {
    return num * num;
});

console.log(squaredNumbers); 


// Immediately Invoked Function Expression (IIFE) with an anonymous function


(function() {
    console.log("This is an IIFE with an anonymous function");
})();


const fruits = ["apple", "banana", "orange"];




// Using forEach with an anonymous function


fruits.forEach(function(fruit) {
    console.log(fruit);
});

