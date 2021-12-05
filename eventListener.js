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
    console.log(keyPress.key)
    switch (keyPress.key){
        case ' ':
            rotate();
            ctx.fillStyle = randomColor();
            break;
        case '9':
            if (height <= -1){ // it works okay? OKAY?
                height += 100;
                console.log(height)
            }
            break;
        case '0':
            if (height <= 0){
                height -= 100;
                console.log(height)
            }
            break;

            //if "1" is pressed
        case '1':
            if(toglRect === 0){
                toglRect = 1; // this toggles rectangle effect
            }else {
                toglRect = 0;
            }
            break;
        case '2':
            if(toglStrobe === 0){
                toglStrobe = 1; // this toggles rectangle effect
            }else {
                toglStrobe = 0;
            }
            break;
            // I like it being positive
        case '+':
            if (reset === 0){
                box.h += 10;
                strobeInt++;
            }else {
                box.w += 10;
                strobeInt++;
            }
            break;
            // stop being so negative
        case '-':
            if (reset === 1){
                box.w -= 10;
                strobeInt--;
            }else {
                box.h -= 10;
                strobeInt--;
            }
            break;

        case 'p':
            if (toglClearCanvas === 1){
                toglClearCanvas = 0;
            }else{
                toglClearCanvas = 1;
            }

            break;
    }

});

// Makes box bigger or smaller depending on mousewheel
window.addEventListener('mousewheel', // yes I know it's super ugly, but I need breakfast ait, got a problem with that?!?
    function (event){
    // WET: We Elsker Trepitisjon (Du klarer ikke bedre selv)
    if (reset === 0) {
        if (event.deltaY > 0){
        box.w += event.deltaY/wheelSpeed;
        ctx.fillStyle = randomColor();
        console.log(box);
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
let kakeMannLangVarFor = 0;
document.getElementById('2DShait').addEventListener('click', () => {

    if (kakeMannLangVarFor === 0) {
        kakeMannLangVarFor++;
        startThisOrSomething();
        console.log(kakeMannLangVarFor)
    }else {
        kakeMannLangVarFor = 0;
        console.log("else")
        window.cancelAnimationFrame(oogaBoogaAniMation);
    }

    document.getElementById('canvas1').style.display = "block";
});