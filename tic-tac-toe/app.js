// Chapter_9 - Tic-tac-toe

// Winning pattern - Horizontal pattern - 1. 0-1-2 2. 3-4-5 3. 6-7-8
//Vertical pattern - 1. 0-3-6 2. 1-4-7 3. 2-5-8
//Diagonal pattern - 1. 0-4-8 2. 2-4-6

let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGamebtn = document.querySelector("#newbtn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //playerX , playerO
let count = 0;
//2D Array
const winning_patterns = [
    [0,1,2] , 
    [3,4,5] ,
    [6,7,8] ,
    [0,3,6] ,
    [1,4,7] ,
    [2,5,8] ,
    [0,4,8] ,
    [2,4,6] 
];

const resetGame=()=>{
    turnO = true;
    enableBoxes();
    count = 0;
    msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        console.log("Box was clicked");
        count = 0;
        if (turnO){
            box.innerText = "O";
            box.style.color = "green";
            turnO = false;
            
        }
        else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        count++;

        let isWinner = checkWinner();
        if (count ==9 && !isWinner){
            gameDraw;
        }
    })
})

const gameDraw=()=>{
    msg.innerText = `Game is Draw`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const disableBoxes = ()=>{
    for (let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = ()=>{
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner)=>{
   
    msg.innerText = `Congratulations ${winner} is Winner`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = ()=>{
    for (let pattern of winning_patterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if( pos1val !="" && pos2val !="" && pos3val !=""){
            if(pos1val == pos2val && pos2val == pos3val){
                console.log("Winner" , pos1val);

                showWinner(pos1val);
                return true;
            }
        }
    }
};

newGamebtn.addEventListener("click", ()=>{resetGame();});

reset.addEventListener("click", ()=>{resetGame();});