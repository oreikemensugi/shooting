import { player, initPlayer, drawPlayer } from "./player.js";
import { spawnEnemy, enemies,updateEnemies,drawEnemies } from "./enemies.js";
import { handleCollisions } from "./collision.js";

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");


initPlayer(canvas);

export const bullets = [];
const BULLET_SPEED = -5;

const bulletImage = new Image();
bulletImage.src = "https://png.pngtree.com/png-vector/20240427/ourlarge/pngtree-amazing-baseballs-on-a-transparent-background-png-image_12335461.png"; 

function tryShoot() {
    bullets.push({
        x: player.x  + player.width / 2 - 15,
        y: player.y,
        width: 30,
        height: 30,
        vx:0,
        vy: BULLET_SPEED,
    },
    {
         x: player.x  + player.width / 2 - 15,
        y: player.y,
        width: 30,
        height: 30,
        vx:1,
        vy: BULLET_SPEED,
    },
    {
         x: player.x  + player.width / 2 - 15,
        y: player.y,
        width: 30,
        height: 30,
        vx:-1,
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
    } else if (e.key === "ArrowUp") {
        if (player.y > 10) {
            player.y -= 10;
           
        }
        } else if (e.key === "ArrowRight") {
        if (player.x < canvas.width - player.width - 10) {
            player.x += 10;
        }
     
    } else if (e.key === "ArrowDown") {
        if (player.y < canvas.height - player.heighat - 10) {
            player.y += 10;
        }
    } else if (e.code === "Space") {
        tryShoot();
    }
});

function update() {
    for (let i = 0; i < bullets.length; i++) {
        const bullet = bullets[i];
        bullet.y += bullet.vy;
        bullet.x += bullet.vx;
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
canvasImage.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhNyRKqUkLMLW_Be_DPWGWqORh35ODiHVqCmzl3paU9aC7Z_fvZDLf0wsGiD6wC6X4MV9N_Kzn82PdD1eWXYTJNxEMdsI3ZigPYZMJp-7NV7Rth6CRR0HWptqNqSvmK-nXW1Sw83Sihrek/w1200-h630-p-k-no-nu/bg_baseball_ground.jpg";

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