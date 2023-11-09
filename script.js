document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Replace this with your own authentication logic
        if (username === "yourUsername" && password === "yourPassword") {
            alert("Login successful");
            // Redirect to a new page or perform other actions here
        } else {
            alert("Login failed. Please check your username and password.");
        }
    });
});
