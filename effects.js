function horRect(){//makes the horizontal rectangles
    for (let i = height; i < height*-1; i = i + distApart){
        void ctx.fillRect(mouse.x - i, mouse.y + i, box.w, box.h);
    }
}

function Circle(x, y, r, c){
    //this is now a ball
    this.x = c;
    this.y = y;
    this.r = r;
    this.c = randomColor();

    this.dx = (Math.random()*4)+1;
    this.dy = (Math.random()*4)+1;

    this.draw = function (){
        ctx.beginPath();
        ctx.fillStyle = this.c;
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fill();
    }
    this.animate = function (){
        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }
}
const balls = [];
for (let i = 0; i<20; i++){
    let r = Math.floor(Math.random()*30)+15;
    let x = Math.random()* (canvas.width-r*2)+r;
    let y = Math.random()* (canvas.height-r*2)+r;
    let c = randomColor();
    balls.push(new Circle(x, y, r, c))
}
function uptoDate(){
    for (let i = 0; i < balls.length; i++){
        balls[i].animate();
    }
}

3

//rotates
let reset = 0;//fix na etterkvart, va ganske stygt
function rotate(){
    if (reset === 0){
        let temp = box.w; //stores value so vars can swap value
        box.w = box.h; box.h = temp;
        reset++;
        console.log("spaceship")
    }else if(reset === 1){
        let temp = box.w;
        box.w = box.h; box.h = temp;
        reset = 0;
        console.log("spaceship")
    }
}

//displays fps
let lastCalledTime;
let fps;
function FPS(){
    if(!lastCalledTime) {
        lastCalledTime = performance.now();
        fps = 0;
        return;
    }
    let delta = (performance.now() - lastCalledTime)/1000;
    lastCalledTime = performance.now();
    fps = Math.round(1/delta);
    document.getElementById('fps').innerHTML = "fps: "+ fps;

}

//random color
function randomColor() {// stjal na fra jossomjod
    return 'rgb(' + Math.ceil(Math.random() * 255) + ',' + Math.ceil(Math.random() * 255) + ',' + Math.ceil(Math.random() * 255) + ')';
}