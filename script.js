let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset-btn')
let newBtn = document.querySelector('#new-btn')
let msgContainer = document.querySelector('.msg-container')
let msg = document.querySelector('#msg')

let turnO = true;

const winPatrens = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () =>{
    turnO = true   
    enableBoxes();
    msgContainer.classList.add('hide')
}

boxes.forEach((box) =>{
    box.addEventListener('click', ()=>{
        if(turnO === true){
            box.innerText = 'X';
            turnO = false
        }else{
            box.innerText = 'O';
            turnO = true;
        }
        box.disabled = true;

        checkWiner();
    });
});

const disabledBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = '';
    }
}

const showWinner = (winner)=>{
    msg.innerText = `Congratulation, The Winner is ${winner}`
    msgContainer.classList.remove('hide')
    disabledBoxes();
}

const checkWiner = () => {
    for(let pattern of winPatrens){
        let posVal1 = boxes[pattern[0]].innerText;
        let posVal2 = boxes[pattern[1]].innerText;
        let posVal3 = boxes[pattern[2]].innerText;

        if(posVal1 != '' && posVal2 != '' && posVal3 != ''){
            if(posVal1 === posVal2 && posVal2 === posVal3){
                showWinner(posVal1);
            }
        }
    }
};

newBtn.addEventListener('click', resetGame)
resetBtn.addEventListener('click', resetGame)
