const block = document.getElementById("block");
const player = document.getElementById("player");
const scoreDisplay = document.getElementById("score");

let playerX = 160;
let blockX = Math.floor(Math.random() * 360);
let blockY = 0;
let score = 0;

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft" && playerX > 0) {
        playerX -= 20;
    }

    if (e.key === "ArrowRight" && playerX < 320) {
        playerX += 20;
    }

    player.style.left = playerX + "px";
});

function moveBlock() {
    blockY += 5;

    if (blockY > 460) {
        if (blockX > playerX && blockX < playerX + 80) {
            score++;
            scoreDisplay.innerText = score;
        } else {
            alert("Game Over! Score: " + score);
            location.reload();
        }

        blockY = 0;
        blockX = Math.floor(Math.random() * 360);
    }

    block.style.top = blockY + "px";
    block.style.left = blockX + "px";
}

setInterval(moveBlock, 50);
