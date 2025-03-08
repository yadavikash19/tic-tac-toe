let boxes= document.querySelectorAll(".box");
let resetBtn= document.querySelector(".rst");
let newGameBtn= document.querySelector(".new-btn");
let msgContainer= document.querySelector(".msg-container");
let msg= document.querySelector("#msg");

const winPattern= [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

let turnO= true;
let count=0;

const resetGame = () => {
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
    count=0;
}

boxes.forEach(box => {
    box.addEventListener( "click",() => {

        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        count++;
        if(count==9){
            gameDraw();
        }

        checkWinner();
    })
});
const disableBoxes= ()=>{
    for(let box of boxes){
        box.disabled=true;
        box.innerText="";
    }
}

const enableBoxes= ()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const checkWinner= () => {
    for(pattern of winPattern){
        let pos1Val= boxes[pattern[0]].innerText;
        let pos2Val= boxes[pattern[1]].innerText;
        let pos3Val= boxes[pattern[2]].innerText;

        if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
            if(pos1Val == pos2Val && pos2Val == pos3Val){
                showWinner(pos1Val);
            }
        }
    }
    }

const gameDraw = () => {
        msg.innerText = "😲 It's a Draw!";
        msgContainer.classList.remove("hide");
    };

const showWinner= (winner) => {
    msg.innerText= `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);