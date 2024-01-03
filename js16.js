// submission event


var form = document.getElementById("myForm");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the default form submission
    console.log("Form submitted!");
});


//resize event


window.addEventListener("resize", function() {
    console.log("Window resized!");
});


//dropdown change event

var select = document.getElementById("mySelect");

select.addEventListener("change", function() {
    console.log("Selected value: " + select.value);
});
