    function login() {
      var username = document.getElementById("username").value;
      var password = document.getElementById("password").value;
  
     if (username === "venky" && password === "venky123") {
      alert("Login Success full ")
      window.location.assign("index.html");
      } 
    
    else if (username === "venky" && password === "venky123") {
      alert("Login Success full")
      window.location.assign("http://127.0.0.1:5500/ChoCo.htm");
      }
        else{
          alert("Invalid username or password")
        }
    }  

   