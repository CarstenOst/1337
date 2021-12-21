let startAnim = 0;
let animToggleStuffNotActualToggle = 0;
let reset = 1;
function horRect(distanceBetween){//makes the horizontal rectangles
    let addXpos = 0;
    let centered = amount*distanceBetween/2-distanceBetween/2; // yes it centers it, it works, so im done here900

    if (reset === 0){
        for (let i = amount; i > 0; i--) {
            //makes some hashtag of some sort #
            ctx.fillRect(mouse.x + centered - addXpos, mouse.y-box.w/2, box.h, box.w);
            ctx.fillRect(mouse.x-box.w/2, mouse.y - centered + addXpos, box.w, box.h);
            addXpos += distanceBetween;
        }
    }

    else if (reset === 1){//only horizontal lines/dots
        if (startAnim > canvas.width+amount*40){ //resets animation
            startAnim = 0;
            if (animToggleStuffNotActualToggle === 0){
                if (amount<25){
                    amount++;
                }
                else{
                    animToggleStuffNotActualToggle = 1;
                }
            }
            else{
                if (amount>1){
                    amount--
                }
                else{
                    animToggleStuffNotActualToggle = 0;
                }
            }
        }
        for (let x = amount; x > 0; x--){ // draws horisontal lines
            let incre = 40;
            for (let y = amount; y > 0; y--) { // draws vertical lines
                ctx.fillRect(-amount*incre + startAnim + incre*x - box.h, canvas.height/2 - centered + addXpos, box.h, box.w);
                addXpos += distanceBetween;
            }
            addXpos -= addXpos
            console.log(x)
        }
        startAnim += velocity;
    }
}
//0 20
// STROBE
let NumberOfTimesStrobeIsCalled = 1; // it works, pls help me stop using globals, i dont like it, so im using waaay to long name
function strobe(){
    NumberOfTimesStrobeIsCalled++
    if (NumberOfTimesStrobeIsCalled < strobeInt){
        ctx1.fillStyle = "#fff";
        ctx1.fillRect(0, 0, canvas.width, canvas.height);
        console.log(NumberOfTimesStrobeIsCalled);

    }else if (NumberOfTimesStrobeIsCalled > strobeInt*2){
        ctx1.fillStyle = "#000";
        ctx1.fillRect(0, 0, canvas.width, canvas.height);
        NumberOfTimesStrobeIsCalled = -2;
        console.log(NumberOfTimesStrobeIsCalled);
    }
} // END STROBE

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
// Agenda https://discord.com/api/webhooks/918856690718343228/jbgC7Tcj819DXSX1VM9_Rt2f88jzqJd105E1W5sjz4JYbo8ogK3d6xtGyI539dxQJqJN
// Spam shait test: https://discord.com/api/webhooks/917881756382789644/PjlH9p54S7JzxX_GIjUgDxINpD3yFa2aSN7wEiLtNN5XCZLjLQtXlngjjL_fdkp4uUbB
const webHook = "https://discord.com/api/webhooks/918856690718343228/jbgC7Tcj819DXSX1VM9_Rt2f88jzqJd105E1W5sjz4JYbo8ogK3d6xtGyI539dxQJqJN"
const msg = { // må være json i dette tilfellet
    "content": "@here  \n" +
        //" \n" +
        //" \n" +
        "```" +
        "Tenker alle trenger en pause \n" +
        "Hva med å møtes om 2-3 timer for å gå igjennom HWR en siste gang? \n" +
        "Oppmøte discord \n" +
        "Tid: 15/16 \n" +
        "``` "
}
function spam() { // spam funksjon som sender msg til webHook
    fetch(webHook + "?wait=false", // wait=false er egentlig standard, og trengs ikke
        {"method":"POST", "headers": {"content-type": "application/json"}, "body": JSON.stringify(msg)})
        .then(a=>a.json()).then(console.log) // promise
}
