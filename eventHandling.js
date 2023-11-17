// button click event

var button = document.getElementById("myButton");

button.addEventListener("click", function() {
    alert("Button clicked!");
});


// mouseover event

var hoverElement = document.getElementById("hoverElement");

hoverElement.addEventListener("mouseover", function() {
    console.log("Mouse over the element!");
});


// key press event

var input = document.getElementById("myInput");

input.addEventListener("keypress", function(event) {
    console.log("Key pressed: " + event.key);
});
