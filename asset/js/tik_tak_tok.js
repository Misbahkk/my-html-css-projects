console.log("Welcome to tik tac toe");
let music = new Audio("/asset/img/tik_tac_toe/music.mp3")
let audioturn = new Audio("/asset/img/tik_tac_toe/ting.mp3")
let gameover = new Audio("/asset/img/tik_tac_toe/gameover.mp3")
let turn ='X'
let isgameover = false

//Function to Change the turn
const changeTurn =()=>{
    return turn === "X"? "0":"X"
}

//Function to cheack a win
const cheackwin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let win =[
        [0 ,1 , 2 , 5 ,5,0 ] ,
        [3,4 , 5 , 5 ,15 ,0] ,
        [6 ,7 , 8 , 5 ,25 ,0] ,
        [0 ,3 , 6 , -5,15,90] ,
        [1 ,4 , 7 ,5 , 15 ,90] ,
        [2 ,5 , 8 ,15 ,15,90] ,
        [0 ,4 , 8 ,5 ,15 , 45] ,
        [2 ,4 , 6 ,5 ,15,135] ,
    ]
    win.forEach(e => {
    if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
        document.querySelector('.info').innerText = boxtext[e[0]].innerText +" Won"
        isgameover= true
        document.querySelector('.img-box').getElementsByTagName('img')[0].style.width='200px'
        document.querySelector(".line").style.width ='20vw';
        document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
        gameover.play();
    }
  })
}
  

//Game Logic
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element =>{
    let boxtext =element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText= turn;
           turn = changeTurn();
            audioturn.play();
            cheackwin();
            if(!isgameover){
                document.getElementsByClassName('info')[0].innerText =' turn for ' + turn;
            }

        }
    })
})

//Add rest game
reset.addEventListener('click' , ()=>{
    let boxtexts =document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText = ''
    });
    turn ='X'
    isgameover =false
    document.querySelector('.line').style.width ='0vw';
    document.getElementsByClassName('info')[0].innerText =' turn for ' + turn;
    document.querySelector('.img-box').getElementsByTagName('img')[0].style.width='0px'

})