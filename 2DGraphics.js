const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


function startThisOrSomtehing(){
    // Find out mouse movement or something
    let mouse = {
        x: null,
        y: null,
        radius: 100
    }//Start size
    let box = {
        w: 100,
        h: 100
    }
    // Event listener for the mouse obviously
    window.addEventListener('mousemove',
        function (event){
            mouse.x = event.x + canvas.clientLeft/2;
            mouse.y = event.y + canvas.clientTop/2;

        });
    // Makes box bigger or smaller depending on mousewheel
    window.addEventListener('mousewheel',
        function (event){
            if (event.deltaY < 0){
                box.w += event.deltaY
                box.h += event.deltaY
            }
            else {
                box.w += event.deltaY
                box.h += event.deltaY
            }
        });

    window.requestAnimationFrame(function whereTheMagicHappens(){


        ctx.clearRect(0,0,canvas.width, canvas.height)

        ctx.fillStyle = "#ffd700"
        ctx.fillRect(mouse.x - box.w/2,mouse.y - box.h/2,box.w,box.h)
        window.requestAnimationFrame(whereTheMagicHappens)
    })
}




// start code function goes here blyat!
document.getElementById('2DShait').addEventListener('click', () => {
    startThisOrSomtehing()
    document.getElementById('canvas1').style.display = "block";
});