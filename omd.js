var gcount=0;
var scount=3;
var turn=0; 	// 0 for user and 1 for computer
var whose="Your"; // Game starts of with User
var roundnum=0;
var gvar=-1;	// game timer variable
var svar=-1;	// switch timer variable
var userscore=0;
var machinescore=0;
var t=0;	
var face=0;
var alreadyClicked=1;



function init()
{

if(gvar!=-1)
clearInterval(gvar);

if(svar!=-1)
clearInterval(svar);

document.getElementById('die').innerHTML='<img src=\"images/bluedie.png\" height=100% width=100% />';

gcount=0;
scount=3;
turn=0; 	// 0 for user and 1 for computer
whose="Your"; // Game starts of with User
roundnum=0;
gvar=-1;
svar=-1;
userscore=0;
machinescore=0;
t=0;
face=0;
alreadyClicked=1;
document.getElementById('userscore').innerHTML="";
document.getElementById('machinescore').innerHTML="";
document.getElementById('timer').innerHTML="";
runSwitchClock();
}

function runGameClock(){
if(turn==0 && alreadyClicked==0){
alreadyClicked=1;
face = Math.floor((Math.random() * 6) + 1);
var x=parseInt(document.getElementById('timer').innerHTML);
x=Math.abs(50-x);
x=50-x;
userscore+=2*face*x;
document.getElementById('dieface').innerHTML='<img src=\"images/blue'+face+'.png\" height=100% width=100% />';
document.getElementById('userscore').innerHTML="<br />"+"You : "+userscore;
turn=1;
clearInterval(gvar);
gcount=0;
runSwitchClock();
}
}


function machineGameClock(){
if(turn==1){
document.getElementById('die').innerHTML='<img src=\"images/reddie.png\" height=100% width=100% />';
face = Math.floor((Math.random() * 6) + 1);
t= Math.floor((Math.random() * 20) + 40);
gvar = setInterval(gameTimer, 50);
}

}



function gameTimer(){
if(turn==0)
{
document.getElementById('timer').innerHTML=gcount;
gcount=gcount+1;
if(gcount==101){
clearInterval(gvar);
gcount=0;
turn=1;
runSwitchClock();
}
}
else{
document.getElementById('timer').innerHTML=gcount;
gcount=gcount+1;
if(gcount==t){
var x=parseInt(document.getElementById('timer').innerHTML);
x=Math.abs(50-x);
x=50-x;
machinescore+=2*face*x;

document.getElementById('dieface').innerHTML='<img src=\"images/red'+face+'.png\" height=100% width=100% />';
document.getElementById('machinescore').innerHTML="<br />"+"Machine : "+machinescore;

if(turn==1 && roundnum==10)
results();

else{
turn=0;
clearInterval(gvar);
gcount=0;
runSwitchClock();
}
}
}
}

function runSwitchClock(){
svar=setInterval(switchTimer,600);
}

function switchTimer(){
document.getElementById('rounds').innerHTML=whose+" turn in : "+scount;
scount=scount-1;

if(scount==-1){
scount=3;
clearInterval(svar);

if(turn==0)
whose="Machines"; // next is machine
else
whose="Your";	// next is your

if(turn==0){
alreadyClicked=0;
document.getElementById('die').innerHTML='<img src=\"images/bluedie.png\" height=100% width=100% />';
document.getElementById('rounds').innerHTML="Round # "+(++roundnum);
gvar = setInterval(gameTimer, 50);
}
else
{
document.getElementById('rounds').innerHTML="Round # "+(roundnum);
machineGameClock();
}
}
}

function results(){
clearInterval(gvar);
document.getElementById('die').innerHTML='<img src=\"images/bluedie.png\" height=100% width=100% />';
document.getElementById('dieface').innerHTML="";
document.getElementById('timer').innerHTML="";
document.getElementById('userscore').innerHTML="";
document.getElementById('machinescore').innerHTML="";
document.getElementById('rounds').innerHTML="";

if(userscore>machinescore)
alert("You : "+userscore+"\nMachine : "+machinescore+"\nYou Win !");
else if(userscore==machinescore)
alert("You : "+userscore+"\nMachine : "+machinescore+"\nIt's a Tie !");
else
alert("You : "+userscore+"\nMachine : "+machinescore+"\nMachine Wins !");
}