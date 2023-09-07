  class footballer {
    constructor(Name,team,age) {
        this.Name = Name;       
        this.age = age;
    }

    get name() {
        return `${this.Name}`;
    }
   
    get isAdult(){
        return this.age >= 18;
    }
}


const player1 = new footballer('lionel messi',36)
const player2 = new footballer('pablo gavi',17)


console.log(`player1 Full Name: ${player1.name}`);
console.log(`Person 1 Age: ${player1.age}`);
console.log(`Is player1 an Adult? ${person1.isAdult}`);
  
  console.log(`player2 Full Name: ${player2.Name}`);
  console.log(`player2 Age: ${player2.age}`);
  console.log(`Is player2 an Adult? ${player2.isAdult}`);