const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d", { alpha: true });
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const canvas1 = document.getElementById("canvas2");
const ctx1 = canvas1.getContext("2d", { alpha: true }); //speedy if false / however, wont work as well


// I dunno how to do this so, im making tons of global variables, can't hurt right? RIGHT!? Yeah, I know... bad practise, or is it?
let sColor = "#22ff22";//starter color
let wheelSpeed = 50; //speed of mousewheel (lower number, means less scrolling (I know I could switch this around, but why not make it confusing and have way to long comments?))
let velocity = 10;
let amount = 5; //just let it be negative, ait, stop judging
let distApart = 40;
let strobeInt = 4; // Strobe, lower number is faster strobe. Yes IK should be other way around, well you can't always have it your way... This is for learning purposes only anyway
//Start size
let box = {
    w: 2,
    h: 2
}

let toglRect = 1;
let toglStrobe = 0;

let oogaBoogaAniMation; // The requestAnimationFrame made togglable in eventlistener at the bottom :/
let toglClearCanvas = 1; // toggle to clear canvas, usfull for painting. Press "p" to use

if (toglRect === 1){
    //spam();
}
function startThisOrSomething(){
    ctx.fillStyle = sColor;
    window.requestAnimationFrame(function update(){//makes it happen pretty much
        if (toglClearCanvas === 1) {
            ctx.clearRect(0,0,canvas.width, canvas.height);
            ctx1.clearRect(0,0,canvas.width, canvas.height)
        }
        canvas1.width = window.innerWidth;
        canvas1.height = window.innerHeight;

        if (toglStrobe === 1){
            strobe();
        }
        if (toglRect === 1){
            horRect(distApart);
        }

        FPS();
        oogaBoogaAniMation = window.requestAnimationFrame(update);
    })
}

//this is the end, nothing more, just like the shit ending in "I am Legend"


