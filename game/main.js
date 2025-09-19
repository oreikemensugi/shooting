document.getElementById("shirusi").innerText="これはゲームです";
const canvas =document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

//fillRect(x座標、ｙ座標、横幅、縦幅)


let x=225;

window.addEventListener("keydown",(e)=>{
    if(e.key==="ArrowLeft"){
        x-=10;
    }else if(e.key==="ArrowRight"){
        x+=10;
    }
});
window.addEventListener("keyup",(e)=>{
    if(e.key==="ArrowLeft"){
        x+=10;
    }else if(e.key==="ArrowRight"){
        x-=10;
    } else if(e.key==="space"){
        tama +=1;
    }
});

let y1=0;
let y2=0;

function gameLoop() {
   ctx.fillStyle="black";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle="white";
      ctx.fillRect(150,y1,30,30);
      y1+=1

      ctx.fillStyle="white";
      ctx.fillRect(300,y2,30,30);
      y2+=1

     ctx.fillStyle="white";
      ctx.fillRect(x,480,30,30);
      x+=0;
      requestAnimationFrame(gameLoop);

}

gameLoop();