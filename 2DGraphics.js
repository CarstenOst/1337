const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d", { alpha: true });
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// I dunno how to do this so, im making tons of global variables, can't hurt right? RIGHT!? Yeah, I know... bad practise
let sColor = "#22ff22";//starter color
let wheelSpeed = 0.01; //speed of mousewheel (lower number, means less scrolling (I know I could switch this around, but why not make it confusing and have way to long comments?))
let height = -1600; //just let it be negative, ait, stop judging
let distApart = 40;
//Start size
let box = {
    w: 100,
    h: 2
}
function startThisOrSomething(){
    ctx.fillStyle = sColor;
    window.requestAnimationFrame(function update(){//makes it happen pretty much
        ctx.clearRect(0,0,canvas.width, canvas.height);//clears the rectangles
        horRect();
        FPS();
        window.requestAnimationFrame(update);
    })
}

// start code function goes here blyat!
document.getElementById('2DShait').addEventListener('click', () => {
    startThisOrSomething();
    document.getElementById('canvas1').style.display = "block";
});
//this is the end, nothing more, just like the shit ending in "I am Legend"