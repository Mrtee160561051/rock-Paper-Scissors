function getComputerChoice (){
const choice = ["rock","paper","scissors"];

return choice[Math.floor(Math.random()*3)]

}
console.log(getComputerChoice ())