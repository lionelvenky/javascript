// element by its ID
const elementById = document.querySelector("#elementId");

// element by its class
const elementsByClass = document.querySelector(".elementClass");

// element by its tag name
const elementsByTagName = document.querySelector("div");

// element by other CSS selectors
const elementsBySelector = document.querySelector("div#exampleElement.exampleClass");

// first matching element
const firstElement = document.querySelector("div");

// first matching element within another element
const elementWithinElement = parentElement.querySelector(".childElement");


const elements = document.querySelectorAll(".exampleClass");




const myHeading = document.querySelector("#myHeading");
const changeTextButton = document.querySelector("#changeTextButton");

changeTextButton.addEventListener("click", function () {
    myHeading.textContent = "Text Changed!";
});
