
//greeting function 


function greet(name) {
    return "Hello, " + name + "!";
}

const greeting = greet("venky");
console.log(greeting); 


// temperature

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

const temperatureInCelsius = 25;
const temperatureInFahrenheit = celsiusToFahrenheit(temperatureInCelsius);
console.log(temperatureInFahrenheit); 


// even or odd

function isEven(number) {
    return number % 2 === 0;
}

const num = 10;
console.log(isEven(num)); 
