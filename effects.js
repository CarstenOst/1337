function horRect(){//makes the horizontal rectangles
    for (let i = height; i < height*-1; i = i + distApart){
        void ctx.fillRect(mouse.x - i, mouse.y + i, box.w, box.h);
    }
}


function uptoDate(){
    ctx1.fillStyle = fade(255, 0, 10);
    ctx1.fillRect(0, 0, canvas.width, canvas.height);
}


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