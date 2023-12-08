function add(x, y) {
    return x + y;
}

const result = add(5, 3);
console.log(result); 



function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

const resultFactorial = factorial(5);
console.log(resultFactorial); 
