import{ player ,initPlayer,drawPlayer } from "./player.js";
import { enemies, spawnEnemy } from "./enemies.js";



const canvas =document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

initPlayer(canvas);
spawnEnemy (canvas);

const bullets=[];
const BULLET_SPEED = -10;

function tryShoot(){
    bullets.push({
        x: player.x ,
        y: player.y,
        width:5,
        height:5, 
        vy: BULLET_SPEED,
        color:"yellow"
    })
    }


//fillRect(x座標、ｙ座標、横幅、縦幅)


window.addEventListener("keydown",(e)=>{
    if(e.key === "ArrowLeft"){
       if(player.x >10){
        player.x-=10;
       }
    }else if(e.key === "ArrowRight"){
         if(player.x < canvas.width - player.width -10){   
         player.x+=10; 
            }
    }else if(e.code === "Space"){
        tryShoot();
    }
});

let y1=0;
let y2=0;


function update(){
         for(let i =bullets.length -1; i >=0; i--){
        const bullet = bullets[i];
        bullet.y += bullet.vy;

         if(bullet.y<0){
        bullets.splice(i,1);    
      }
    }
}
function draw(){
    ctx.fillStyle="black";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    drawPlayer (ctx);

      ctx.fillStyle="cyan";

         for(let i =bullets.length -1; i >=0; i--){
        const bullet = bullets[i];
         ctx.fillRect(bullet.x,bullet.y,bullet.width,bullet.height);
         }
          ctx.fillStyle="red";

         for(let i =0;1<enemies.length; i++){
        const enemy = enemies[i];
         ctx.fillRect(enemy.x,enemy.y,enemy.width,enemy.height);
         }
}

function gameLoop() {
    update();
    draw();
      requestAnimationFrame(gameLoop);

}

gameLoop();