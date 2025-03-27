const canvas = document.getElementById("kanva");
const ctx = canvas.getContext("2d");

function puhasta() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function katus() {
    ctx.beginPath();
    ctx.moveTo(150, 150);
    ctx.lineTo(250, 80);
    ctx.lineTo(350, 150);
    ctx.closePath();
    ctx.fillStyle = "brown";
    ctx.fill();
    ctx.stroke();
}

function seinad() {
    ctx.fillStyle = "lightyellow";
    ctx.fillRect(150, 150, 200, 200);
    ctx.strokeRect(150, 150, 200, 200);
}

function uks() {
    ctx.fillStyle = "saddlebrown";
    ctx.fillRect(230, 250, 40, 100);
    ctx.strokeRect(230, 250, 40, 100);
}

function akenVasakul() {
    ctx.fillStyle = "lightblue";
    ctx.fillRect(170, 180, 40, 40);
    ctx.strokeRect(170, 180, 40, 40);
}

function akenParemal() {
    ctx.fillStyle = "lightblue";
    ctx.fillRect(290, 180, 40, 40);
    ctx.strokeRect(290, 180, 40, 40);
}

function koik() {
    puhasta();
    katus();
    seinad();
    uks();
    akenVasakul();
    akenParemal();
}
