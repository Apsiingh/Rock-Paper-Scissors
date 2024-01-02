let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector('#user-score');
const compScorePara=document.querySelector("#comp-score");


const genCompChoice=()=>{
    const option=["rock","paper","scissors"];
     return option[Math.floor(Math.random()*3)];
}


const showWinner = (userWin ,userChoice ,compChoice) => {
    if(userWin==true){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText= ` you Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=` you lose ! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

   const gameDraw =()=>{
    console.log(" Game was draw !");
    msg.innerText="The Game is Draw ";
    msg.style.backgroundColor="white";
    msg.style.color ="black";
   }
const playGame=(userChoice)=>{
     console.log("user choice = ",userChoice);

     //Genrating Computer choice...
     const compChoice=genCompChoice();
     console.log("comp Choice = " ,compChoice);

     if(userChoice===compChoice){
       gameDraw();
     }
     else {
         let userWin=true;
         if(userChoice==="rock"){
         // comp option -- paper,scissor..
           userWin = compChoice === "paper" ? false: true;
         }
         else if(userChoice=="paper"){
            // comp option -- rock,scissor..
           userWin = compChoice === "rock" ? true : false;
         }else{
            // comp option -- rock,paper..
            userWin = compChoice ==="rock" ? false : true ;
         }
         showWinner(userWin ,userChoice ,compChoice);
     }


     
}


// program will be Start from here...

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
      const userChoice = choice.getAttribute("id");
      playGame(userChoice);
    })
})