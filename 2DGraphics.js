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
    }
    // Event listener for the mouse obviously
    window.addEventListener('mousemove',
        function (event){
            mouse.x = event.x + canvas.clientLeft/2;
            mouse.y = event.y + canvas.clientTop/2;
            console.log(mouse.x)
        });
    window.requestAnimationFrame(function whereTheMagicHappens(){
        let boxWidth = 100;
        let boxHeight = 100;

        ctx.clearRect(0,0,canvas.width, canvas.height)

        ctx.fillStyle = "#ffd700"
        ctx.fillRect(mouse.x - boxWidth/2,mouse.y - boxHeight/2,boxWidth,boxHeight)
        window.requestAnimationFrame(whereTheMagicHappens)
    })
}




// start code function goes here blyat!
document.getElementById('2DShait').addEventListener('click', () => {
    startThisOrSomtehing()
    document.getElementById('canvas1').style.display = "block"
});