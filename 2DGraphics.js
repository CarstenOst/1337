const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d", { alpha: true });
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const canvas1 = document.getElementById("canvas2");
const ctx1 = canvas1.getContext("2d", { alpha: true }); //speedy if false / however, wont work as well
canvas1.width = window.innerWidth;
canvas1.height = window.innerHeight;


// I dunno how to do this so, im making tons of global variables, can't hurt right? RIGHT!? Yeah, I know... bad practise, or is it?
let sColor = "#22ff22";//starter color
let wheelSpeed = 0.01; //speed of mousewheel (lower number, means less scrolling (I know I could switch this around, but why not make it confusing and have way to long comments?))
let height = -1600; //just let it be negative, ait, stop judging
let distApart = 40;
//Start size
let box = {
    w: 2,
    h: 2
}
let toglRect = 0;
let toglStrobe = 0;
function startThisOrSomething(){
    ctx.fillStyle = sColor;
    window.requestAnimationFrame(function update(){//makes it happen pretty much
        ctx.clearRect(0,0,canvas.width, canvas.height);//clears the rectangles
        ctx1.clearRect(0,0,canvas.width, canvas.height);//clears the rectangles

        if (toglStrobe === 1){
            uptoDate();
        }
        if (toglRect === 1){
            horRect();
        }

        FPS();
        window.requestAnimationFrame(update);
    })
}

//this is the end, nothing more, just like the shit ending in "I am Legend"