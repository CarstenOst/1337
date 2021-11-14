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
let dig1 = 0;
document.addEventListener('keypress', (keyPress) =>{
    console.log(keyPress.key)
    switch (keyPress.key){
        case ' ':
            rotate();
            ctx.fillStyle = randomColor();
            break;
        case '1':
            if(dig1 === 0){
                dig1 = 1;
            }else {
                dig1 = 0;
            }
            break;
        case '+':
            if (reset === 0){
                box.h += 10;
            }else {
                box.w += 10;
            }

            break;
        case '-':
            if (reset === 1){
                box.w -= 10;
            }else {
                box.h -= 10;
            }
    }

});

// Makes box bigger or smaller depending on mousewheel
window.addEventListener('mousewheel', // yes I know it's super ugly, but I need breakfast ait, got a problem with that?!?
    function (event){
    if (reset === 0) {
        if (event.deltaY > 0){
        box.w += event.deltaY/wheelSpeed;
        ctx.fillStyle = randomColor();
        console.log(box + '');
    }
    else if (event.deltaY < 0 ){
        box.w += event.deltaY/wheelSpeed;
        ctx.fillStyle = randomColor();
        console.log(box);
    }}
    else if (reset === 1) {
        if (event.deltaY > 0){
            box.h += event.deltaY/wheelSpeed;
            ctx.fillStyle = randomColor();
            console.log(box);
        }
        else if (event.deltaY < 0 ){
            box.h += event.deltaY/wheelSpeed;
            ctx.fillStyle = randomColor();
            console.log(box);
        }}

    });

// start code function goes here blyat!
document.getElementById('2DShait').addEventListener('click', () => {
    startThisOrSomething();
    document.getElementById('canvas1').style.display = "block";
});