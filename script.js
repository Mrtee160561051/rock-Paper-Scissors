const choice = ["rock","paper","scissors"];
const answer= prompt("choose between rock,paper,scissors");

function getComputerChoice (){
return choice[Math.floor(Math.random()*3)]
}
console.log(getComputerChoice ());

const comparison =(val)=>{
 const computer= getComputerChoice();
return  computer.localeCompare(val,"en-Us",{sensitivity:"base"})===0? 
 `you win!. Computer choose ${computer}`: 
 `you Lose!. Computer choose ${computer}`;
}

alert(comparison(answer))
