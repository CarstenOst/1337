// Find out mouse movement or something
let mouse = {
    x: null,
    y: null,
    radius: 100
}
// Event listener for the mouse obviously
window.addEventListener('mousemove',
    function (event){
        mouse.x = event.x + canvas.clientLeft/2;
        mouse.y = event.y + canvas.clientTop/2;
    });


//Checks for space keypress
document.addEventListener('keypress', (keyPress) =>{
    if(keyPress.code === 'Space'){
        rotate()
    }
});//rotates
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

// Makes box bigger or smaller depending on mousewheel
window.addEventListener('mousewheel',
    function (event){
        if (event.deltaY > 0){
            box.w += event.deltaY/wheelSpeed;
            ctx.fillStyle = randomColor(); //this shit is gold
            console.log(box);
        }
        else if (event.deltaY < 0 ){
            box.w += event.deltaY/wheelSpeed;
            ctx.fillStyle = randomColor(); //makes it blue
            console.log(box);
        }
    });