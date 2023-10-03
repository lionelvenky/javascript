function mango(){
    console.log ("hello world  apple is red in color");
}

// apple();
// apple();
// apple();
// apple();

// global scope



// let apple ="red";
// var orange = "yello";
// const banana = "green";

// function fruit(){
//     console.log(apple);
// console.log(orange);
// console.log(banana);
// }
// fruit();


// functon scope

// function fruit(){
//     let a ="lionel";
//     var b = "messi";
//     const c ="venky";

    
// }
// console.log(a)
// console.log(b)
// console.log(c)
// fruit();


//block scope

function sports(){

    if (10<20){
        let cricket = "sachin"
        var football = "messi"
        const basketball = "mj"

       
       console.log (cricket);
        console.log(basketball);
    }
    
console.log(football);
}
sports();