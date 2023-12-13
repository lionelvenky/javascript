
// Using a callback function with setTimeout



function delayedGreeting(name, callback) {
    setTimeout(function() {
        callback("Hello, " + name + "!");
    }, 1000);
}

delayedGreeting("venky", function(message) {
    console.log(message); 
});


//----------------------------------------------------------------------------------------------------------------------


// Using a callback function with array



const numbers = [1, 2, 3, 4, 5];

function isEven(number) {
    return number % 2 === 0;
}

const evenNumbers = numbers.filter(isEven);
console.log(evenNumbers);
