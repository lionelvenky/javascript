
//recursive function


//factorial cal

function factorial(n) {
    return n <= 1 ? 1 : n * factorial(n - 1);
}

const resultFactorial = factorial(5);
console.log(resultFactorial); 



// countdown

function countdown(n) {
    if (n <= 0) {
        console.log("Done!");
    } else {
        console.log(n);
        countdown(n - 1);
    }
}

countdown(5);



//sum of array

function sumArray(arr, index = 0) {
    if (index === arr.length) {
        return 0;
    } else {
        return arr[index] + sumArray(arr, index + 1);
    }
}

const numbersArray = [1, 2, 3, 4, 5];
const resultSum = sumArray(numbersArray);
console.log(resultSum); 
