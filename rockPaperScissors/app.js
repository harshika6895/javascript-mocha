//chapter_10 Rock-paper-scissors

let user_score = 0;
let comp_score = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user_score");
const compScorePara = document.querySelector("#comp_score");

//generate and tracing user_choice
choices.forEach((choice)=> {
    choice.addEventListener("click", ()=>{
        const user_choice = choice.getAttribute("id")
        console.log("Choice was clicked" , user_choice);
        playGame(user_choice);
    })
})
//generate computer choice
const computer_choice = ()=>{
    //array of choices
    const options = ['rock' , 'paper' , 'scissors'];
    let random_index =  Math.floor(Math.random()*3);
    return options[random_index];
}

// display of draw
const drawGame = () =>{
    msg.innerText = "Game was Draw";
    msg.style.backgroundColor = "#1C0221";
}

// display of winner
const showWinner = (userWin , user_choice, comp_choice)=>{
    if(userWin){
        msg.innerText = `You Won! Your ${user_choice} beats ${comp_choice}`
        msg.style.backgroundColor = "green";
        user_score++;
        userScorePara.innerText = user_score;
    }
    else{
        msg.innerText = `You lost! ${comp_choice} beats Your ${user_choice}`
        msg.style.backgroundColor = "red";
        comp_score++;
        compScorePara.innerText = comp_score;
    }
}


//Game
const playGame = (user_choice)=>{
    const comp_choice = computer_choice();
    //checking conditions 
    if(user_choice == comp_choice){
        drawGame();
    }
    else{
        let userWin = true;
        if(user_choice == 'rock'){
            userWin = comp_choice == 'paper'?  false: true; 
        }
        else if (user_choice == 'paper'){
            userWin = comp_choice == 'scissors'?  false: true;
        }
        else{
            userWin = comp_choice == 'rock' ?  false: true;
        }
        showWinner(userWin , user_choice , comp_choice);
    }
}



