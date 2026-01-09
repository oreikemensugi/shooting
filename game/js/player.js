

export const player = {
    x: 0,
    y: 0,
    width: 60,
    height: 60,
    color: "transparent",
    life: 3,
    score: 0,
};
const playerImage = new Image();
playerImage.src = "https://baseballking.jp/wp-content/uploads/2022/08/2022081310849-1200x800.jpg";
export function initPlayer(canvas) {
    player.x = canvas.width / 2 - player.width / 2;
    player.y = canvas.height - 60;
    console.log("Player:", player);
}

export function drawPlayer(ctx) {
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.width, player.height);
    ctx.drawImage(playerImage,player.x, player.y, player.width, player.height);
}