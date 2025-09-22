
const canvas =document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const pleyer={
    x: canvas.width/2 -15,
    y: canvas.height -60,
    width:30,
    height:30,
    color:"white",
    life: 3
};

const bullets=[];
const BULLET_SPEED = -10;

function tryShoot(){
    bullets.push({
        x: pleyer.x ,
        y: pleyer.y,
        width:5,
        height:5, 
        vy: BULLET_SPEED,
        color:"red"
    })
    }


//fillRect(x座標、ｙ座標、横幅、縦幅)


window.addEventListener("keydown",(e)=>{
    if(e.key === "ArrowLeft"){
       if(pleyer.x >10){
        pleyer.x-=10;
       }
    }else if(e.key === "ArrowRight"){
         if(pleyer.x < canvas.width - pleyer.width -10){   
         pleyer.x+=10; 
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

      ctx.fillStyle=pleyer.color;
      ctx.fillRect(pleyer.x,pleyer.y,pleyer.width,pleyer.height); 

      ctx.fillStyle="red";

         for(let i =bullets.length -1; i >=0; i--){
        const bullet = bullets[i];
         ctx.fillRect(bullet.x,bullet.y,bullet.width,bullet.height);
         }
}

function gameLoop() {
    update();
    draw();
      requestAnimationFrame(gameLoop);

}

gameLoop();