function horRect(){//makes the horizontal rectangles
    for (let i = height; i < height*-1; i = i+distApart){
        ctx.fillRect(mouse.x + i, mouse.y + i, box.w, box.h);
    }
}

//rotates
let reset = 0;//fix na etterkvart, va ganske stygt
function rotate(){
    if (reset === 0){
        box.w = 2; box.h = 100;
        reset = 1;
        console.log("spaceship")
    }else if(reset === 1){
        box.w = 100; box.h = 2;
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