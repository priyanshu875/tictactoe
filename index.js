// alert("start");
const classCircle='circle';
const classX='x';
const cellElements= document.querySelectorAll('[data-cell]');
const boardHover= document.getElementById('board');
const winningMsg= document.getElementById('winningmsg');
const winningMsgText= document.getElementById('winningmsgtext');
const winningCombination=[
    [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]
]
let circleturn;

circleturn=false;
turnhover();

cellElements.forEach( cell => {

    cell.addEventListener('click', handleClick, {once:true} )
})

function handleClick(e){
    console.log('clicked');
    const cell=e.target;
    const currentClass= circleturn ? classCircle : classX ;
     

    //placemark
    placemark(cell, currentClass);
    //checkwin
    if(checkwin(currentClass)){
        console.log('winner')
        gameEnd(false);
    }
    // if(isDraw()){
    //     gameEnd(true);
    // }
        swapturn();
    }
    

    

function gameEnd(draw){
    if(draw){
        winningMsgText.innerHTML="DRAW";
    }
    else{
      // winningMsgText.innerText= `${circleturn ?  "0's WIns" : "X Wins"}`;

      if(circleturn){
          winningMsgText.innerHTML="O Wins!";
      }
      else if(!circleturn){
          winningMsgText.innerHTML="X Wins!";
      }

  }

    winningMsg.classList.add("show");
}

function isDraw(){
    return [...cellElements].every(cell=>{
        return cell.classList.contains(classX) || 
        cell.classList.conatains.conatins(classCircle);
    })
}






function placemark(cell, currentClass){
    cell.classList.add(currentClass);
}
function swapturn(){
    circleturn = !circleturn;
    //TURNHOVER
    turnhover()
}
function turnhover(){
    boardHover.classList.remove(classX);
    boardHover.classList.remove(classCircle);

    if(circleturn){
        boardHover.classList.add(classCircle);
    }
    else if(!circleturn){
        boardHover.classList.add(classX);
    }
    
}

//check win
function checkwin(currentClass){
    return winningCombination.some(combination =>{
        return combination.every(index=>{
           return cellElements[index].classList.contains(currentClass)
        })
    })

}

//dark theme
function darkfunction(){
    theme.classList.add('dark');

}
function whitefunction(){
    theme.classList.remove('dark');
}

