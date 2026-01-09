export const enemies = [];
    const SIZE=50;
const enemyImage = new Image();
enemyImage.src = "https://www.japan-baseball.jp/files/photosingle/318/image_idphoto/270x360/okoe_rui_l.jpg";
    function pushEnemies(canvas) {
        const w=SIZE;
        const h=SIZE;
        const x=Math.random()*(canvas.width -w);
        const y=0;
        const vy=5;

        enemies.push({x,y,width:w,height:h,vy});
    }

    export function spawnEnemy(canvas) {
        if(enemies.length < 30) {
            pushEnemies(canvas);
        }
    }

     export function updateEnemies(canvas) {
         for(let i = enemies.length -1; i >=0; i--) {
             const e = enemies[i];
             e.y += e.vy;
             if(e.y > canvas.height) {
                 enemies.splice(i, 1);
             }
        }
    }

     export function drawEnemies(ctx) {
         ctx.fillStyle = "transparent";
        for(const e of enemies) {
             ctx.fillRect(e.x, e.y, e.width, e.height);
             ctx.drawImage(enemyImage,e.x,e.y,e.width,e.height);
         }
     }   