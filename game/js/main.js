import { player, initPlayer, drawPlayer } from "./player.js";
import { spawnEnemy, enemies,updateEnemies,drawEnemies } from "./enemies.js";
import { handleCollisions } from "./collision.js";

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");


initPlayer(canvas);

export const bullets = [];
const BULLET_SPEED = -5;

const bulletImage = new Image();
bulletImage.src = "https://photo.16pic.com/00/88/08/16pic_8808309_b.jpg"; 

function tryShoot() {
    bullets.push({
        x: player.x  + player.width / 2 - 150,
        y: player.y,
        width: 300,
        height: 300,
        vy: BULLET_SPEED,
    })
}




function updatescore() {
    const scoreBoard = document.getElementById("scoreBoard");
    scoreBoard.innerText = `Score: ${player.score}`;
    const lifeBoard = document.getElementById("lifeBoard");
    lifeBoard.innerText = `Life: ${player.life}`;
}


window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
        if (player.x > 10) {
            player.x -= 10;
        }
    } else if (e.key === "ArrowRight") {
        if (player.x < canvas.width - player.width - 10) {
            player.x += 10;
        }
    } else if (e.code === "Space") {
        tryShoot();
    }
});

function update() {
    for (let i = 0; i < bullets.length; i++) {
        const bullet = bullets[i];
        bullet.y += bullet.vy;
        if (bullet.y < 0) {
            bullets.splice(i, 1);
        }
    }
    spawnEnemy(canvas);
    updateEnemies(canvas);
    handleCollisions();
    updatescore();
}

const  canvasImage = new Image();
canvasImage.src = "https://pbs.twimg.com/media/DCFJIjNUMAA6k2X.jpg";

function draw() {
    ctx.fillStyle = "black";
    ctx.drawImage(canvasImage,0, 0, canvas.width, canvas.height);

    drawPlayer(ctx);

    ctx.fillStyle = "white";
    for (let i = 0; i < bullets.length; i++) {
        const bullet = bullets[i];
        ctx.drawImage(bulletImage, bullet.x, bullet.y, bullet.width, bullet.height);
    }
    drawEnemies(ctx);
}

  


function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

gameLoop();