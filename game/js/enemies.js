export const enemies = [];
    const SIZE=50;
const enemyImage = new Image();
enemyImage.src = "https://w7.pngwing.com/pngs/339/709/png-transparent-sasuke-uchiha-naruto-shippuden-naruto-vs-sasuke-naruto-uzumaki-itachi-uchiha-orochimaru-naruto-purple-black-hair-manga-thumbnail.png";
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