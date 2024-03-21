const buttons = document.querySelectorAll(".gamebtn");
const startBtn= document.getElementById("start_btn");
const rockBtn= document.getElementById("rock_btn");
const paperBtn= document.getElementById("paper_btn");
const scissorsBtn= document.getElementById("scissors_btn");
const comScore= document.getElementById("comScore");
const playerScore= document.getElementById("playerScore");
const result = document.getElementById("output");

startBtn.addEventListener("click",()=>location.reload())
const score ={
computer:0,
   player:0,
}
 playerScore.textContent = 0;
 comScore.textContent =0;

if((score.computer + score.player) === 5){
   alert("Congratulation you won the game!")
}
rockBtn.addEventListener("click",()=>{
   result.textContent= `${comparison("rock")}`
})
paperBtn.addEventListener("click",()=>{
   result.textContent= `${comparison("paper")}`
})
scissorsBtn.addEventListener("click",()=>{
   result.textContent= `${comparison("scissors")}`
})


function getComputerChoice (){
   const choice = ["rock","paper","scissors"];
   return choice[Math.floor(Math.random()*3)]
}

function checkGameEnd() {
   setTimeout(() => {
      if(playerScore.textContent === "5" || comScore.textContent === "5") {
         (score.player > score.computer) ?
         alert("Congratulations you win the game!") :
         alert("You lost the game!");
         buttons.forEach(button => {
            button.disabled = true;
        });
      }
   }, 1); 
}

const comparison =(val)=>{

   checkGameEnd()
   
   const computer= getComputerChoice();
   if(computer=== val){
      return `It a tie! Computer choose ${computer}`;
   }else if((val=== "rock" && computer==="scissors") ||
   (val=== "paper" && computer==="rock") ||
   (val=== "scissors" && computer==="paper")){
      score[1]= ++score.player
      playerScore.textContent = score[1]
      return `you Win! Computer choose ${computer}`;
   }else{
      score[0] = ++score.computer
      comScore.textContent = score[0]
      return `you lose! Computer choose ${computer}`;
   }
  }
  
  

  