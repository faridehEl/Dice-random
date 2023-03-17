var randomNum1=Math.floor((Math.random()*6)+1) ;

var randomNum2=Math.floor((Math.random()*6)+1) ;

if(randomNum1>randomNum2){
    document.querySelector('h1').textContent="player 1 is winner";
}
if(randomNum2>randomNum1){
    document.querySelector('h1').textContent="player 2 is winner";
}
if(randomNum1==randomNum2)
{
    document.querySelector('h1').textContent="Draw";
}

var randomImg1="images/dice"+ randomNum1 + ".png";
var randomImg2="images/dice"+ randomNum2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomImg1);
document.querySelectorAll("img")[1].setAttribute("src", randomImg2);