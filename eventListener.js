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


//Checks for keypress
document.addEventListener('keypress', (keyPress) =>{
    if(keyPress.code === 'Space'){
        rotate()
    }
});

// Makes box bigger or smaller depending on mousewheel
window.addEventListener('mousewheel', // yes I know it's super ugly, but I need breakfast ait, got a problem with that?!?
    function (event){
    if (reset === 0) {
        if (event.deltaY > 0){
        box.w += event.deltaY/wheelSpeed;
        ctx.fillStyle = randomColor(); //this shit is gold
        console.log(box + '');
    }
    else if (event.deltaY < 0 ){
        box.w += event.deltaY/wheelSpeed;
        ctx.fillStyle = randomColor(); //makes it blue
        console.log(box);
    }}
        else if (reset === 1) {
            if (event.deltaY > 0){
                box.h += event.deltaY/wheelSpeed;
                ctx.fillStyle = randomColor(); //this shit is gold
                console.log(box);
            }
            else if (event.deltaY < 0 ){
                box.h += event.deltaY/wheelSpeed;
                ctx.fillStyle = randomColor(); //makes it blue
                console.log(box);
            }}

    });