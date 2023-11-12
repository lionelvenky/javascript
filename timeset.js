
var currentDate = new Date();


currentDate.setHours(12);
currentDate.setMinutes(30);
currentDate.setSeconds(0);


console.log(currentDate);

//timeout
function myFunction() {
    console.log("Timeout completed!");
}


setTimeout(myFunction, 4000);

