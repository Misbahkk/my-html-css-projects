let x = Math.floor(Math.random()*100);
let num;
let score=0;
// console.log(x)
do{
    num = prompt('Enter a num ')
    console.log(num)
    if(num>x){
    console.log('Your gase num is greter then random num')
    }
    else if(num<x){
        console.log('your gase num is less then the random num')
    }
    score++ 
}while(num!=x && num!=0)
console.log('Your random num is '+ x +' and you try the '+score+' time')