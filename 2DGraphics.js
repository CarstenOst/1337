const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d", { alpha: true });
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


function startThisOrSomething(){
    //Start size
    let box = {
        w: 100,
        h: 2
    }

    let sColor = "#22ff22";//starter color
    let wheelSpeed = 2; //speed of mousewheel (lower number, means less scrolling (I know I could switch this around, but why not make it confusing and have way to long comments?))
    let height = -400; //just let it be negative, ait, stop judging
    let distApart = 40;
    let reset = 0;

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

    document.addEventListener('keypress', (keyPress) =>{
        if(keyPress.code === 'Space'){
            rotate()
        }
    });
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


    function verRect(){
        for (let i = height; i < height*-1; i = i+distApart){//makes the rectangles
            ctx.fillRect(mouse.x - box.w/2, mouse.y + i, box.w, box.h);
        }
    }
    function randomColor() {// stjal na fro jossomjod
        return 'rgb(' + Math.ceil(Math.random() * 255) + ',' + Math.ceil(Math.random() * 255) + ',' + Math.ceil(Math.random() * 255) + ')';
    }

    ctx.fillStyle = sColor;
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
    let lastCalledTime;
    let fps;
    window.requestAnimationFrame(function update(){

        ctx.clearRect(0,0,canvas.width, canvas.height);//clears the rectangles
        verRect();

        window.requestAnimationFrame(update);//makes it happen pretty much
        if(!lastCalledTime) {
            lastCalledTime = performance.now();
            fps = 0;
            return;
        }
        let delta = (performance.now() - lastCalledTime)/1000;
        lastCalledTime = performance.now();
        fps = Math.round(1/delta);
        document.getElementById('fps').innerHTML = "fps: "+ fps;

    })
}

// start code function goes here blyat!
document.getElementById('2DShait').addEventListener('click', () => {
    startThisOrSomething();
    document.getElementById('canvas1').style.display = "block";
});
//this is the end, nothing more, just like the shit ending in "I am Legend"