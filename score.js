var p1=document.querySelector('#p1');
var p2=document.querySelector('#p2');
var h1=document.querySelector('h1');
var p1disp=document.querySelector('#p1disp');
var p2disp=document.querySelector('#p2disp');
var reset=document.querySelector('#reset');
var numInput=document.querySelector('input');
var windisp=document.querySelector('p span');
var p1Score=0;
var p2Score=0;
var gameOver=false;
var winning=5

p1.addEventListener('click',function(){
    if(!gameOver){
    p1Score++;
    if (p1Score===winning)
    {gameOver=true;
        p1disp.classList.add('winner')}
    p1disp.textContent=p1Score;}
});

p2.addEventListener('click',function(){
    if (!gameOver){
    p2Score++;
    if (p2Score===winning){
    gameOver=true;
    p2disp.classList.add('winner');
    }
    p2disp.textContent=p2Score;}
});

function reset_it(){
    p1Score=0;
    p2Score=0;
    p1disp.textContent=p1Score;
    p2disp.textContent=p2Score;
    p1disp.classList.remove('winner');
    p2disp.classList.remove('winner');
    gameOver=false;
}

reset.addEventListener('click',function(){
    reset_it();
});
numInput.addEventListener('change',function(){
    windisp.textContent=numInput.value;
    winning=Number(numInput.value);
    reset_it();
});