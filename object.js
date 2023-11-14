var student = {
    firstName: "lionel",
    lastName: "venky",
    age: 26,
    isStudent: false
};

console.log(student.firstName + " " + student.lastName + " is " + student.age + " years old.");



function car (make,model,year) {
    this.make= make;
    this.model = model;
    this.year = year ;
    this.displayInfo = function() {
        console.log (this.year + " " + this.make + " " + this.model);
    };
}

var mycar = new car ("tata","punch",2023);
mycar.displayInfo();