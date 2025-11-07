export const enemies = [];
const SIZE = 26;
const enemyImage = new Image();
enemyImage.src = "https://w7.pngwing.com/pngs/334/689/png-transparent-dragon-quest-monsters-joker-2-dragon-quest-ix-dragon-quest-xi-dragon-quest-ii-slime-video-game-smiley-dragon-quest-thumbnail.png";

function pushEnemy(canvas) {
    const w = SIZE;
    const h = SIZE;
    const x = Math.random() * (canvas.width - w);
    const y = 0;
    const vy = 5

    enemies.push({ x, y, width: w, height: h, vy });
}

export function spawnEnemy(canvas) {
    if (enemies.length < 200) {
        pushEnemy(canvas);
    }
}

export function updateEnemies(canvas) {
    for (let i = enemies.length - 1; i >= 0; i--) {
        const e = enemies[i];
        e.y += e.vy;
        if (e.y > canvas.height) {
            enemies.splice(i, 1);
        }
    }
}

export function drawEnemies(ctx) {
    ctx.fillStyle = "crimson";
    for (const e of enemies) {
        ctx.drawImage(enemyImage, e.x, e.y, e.width, e.height);
    }
}