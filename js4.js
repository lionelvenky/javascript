// sum of array elements


function sumArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

const numbersArray = [1, 2, 3, 4, 5];
console.log(sumArray(numbersArray));
