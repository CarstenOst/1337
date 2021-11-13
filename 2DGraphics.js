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
}




// start code function goes here blyat!
document.getElementById('2DShait').addEventListener('click', () => {
    startThisOrSomtehing()
});