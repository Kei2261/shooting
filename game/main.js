document.getElementById("shirushi").innerText = "これはゲームです";
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");








// width="480" height="640"
let x = 225;
let y = 0;

window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
        x -= 10;
    } else if (e.key === "ArrowRight") {
        x += 10;
    }
});



function gameLoop() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "blue";
    ctx.fillRect(x, 480, 30, 30);
    ctx.fillStyle = "red";
    ctx.fillRect(x, y, 30, 30);
    if (y > 480) {
        y = 0;
    }
    requestAnimationFrame(gameLoop);
    y += 5;
}

gameLoop();