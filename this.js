var calculator = {
    apple: 0,
    mango: 0,
    setOperands: function(a, b) {
        this.apple = a;
        this.mango = b;
    },
    add: function() {
        return this.apple + this.mango;
    },
    multiply: function() {
        return this.apple * this.mango;
    }
};

calculator.setOperands(20, 30);
console.log("Addition: " + calculator.add());
console.log("Multiplication: " + calculator.multiply());
