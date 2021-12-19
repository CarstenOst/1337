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
            if (reset === 1){
                reset = 0;
            }else{
                reset = 1;
            }
            ctx.fillStyle = randomColor();
            break;
        case '7':
            if (velocity > 0){ // it works okay? OKAY?
                velocity -= 1;
                console.log(velocity)
            }
            break;
            case '8':
            if (velocity < 1000){ // it works okay? OKAY?
                velocity += 1;
                console.log(velocity)
            }
            break;

        case '9':
            if (amount > 0){ // it works okay? OKAY?
                amount -= 1;
                console.log(amount)
            }
            break;
        case '0':
            if (amount >= 0){
                amount += 1;
                console.log(amount)
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
            box.h += 10;
            if (toglStrobe === 1){
                strobeInt++;
            }
            break;
            // stop being so negative
        case '-':
            box.h -= 10;
            if (toglStrobe === 1){
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
        if (event.deltaY > 0){
            box.w += event.deltaY/wheelSpeed;
            ctx.fillStyle = randomColor();
            console.log(box);
        }
        else if (event.deltaY < 0 ){
            box.w += event.deltaY/wheelSpeed;
            ctx.fillStyle = randomColor();
            console.log(box);
    }
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