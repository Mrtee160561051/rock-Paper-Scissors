const images = document.querySelectorAll(".game_btn");
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
 
images.forEach(item =>item.addEventListener("click",()=>imageFn(item.id)))

const imageFn = (id)=>
{
 if (score.player < 5 && score.computer < 5) {
   let val;
   if(id==="rock_btn"){
     val="rock"
   }else if(id==="paper_btn"){
     val="paper"
   }else if(id==="scissors_btn"){
     val="scissors"
   }
   
result.textContent= comparison(val)
}else{
   return ;
}
}


function getComputerChoice (){
   const choice = ["rock","paper","scissors"];
   return choice[Math.floor(Math.random()*3)]
}

function checkGameEnd() {
   setTimeout(() => {
      if(playerScore.textContent === "5" || comScore.textContent === "5") {
         (score.player > score.computer) ?
         alert("Congratulations you won the game!") :
         alert("You lost the game!");
         
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
  
  

  