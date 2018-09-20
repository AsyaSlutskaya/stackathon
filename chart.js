let canvas = document.getElementById('c1');
let ctx = canvas.getContext('2d');
ctx.strokeStyle = "#aaaaff";

w = canvas.clientWidth;
h = canvas.clientHeight;

function rand(min,max) {
    let argc = arguments.length;
    if (argc === 0) {
        min = 0;
        max = 2147483647;
    } else if (argc === 1) {
        throw new Error('Warning: rand() expects exactly 2 parameters, 1 given');
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 1; i <= 20; i++) {
    ctx.beginPath();
    ctx.moveTo(i*(w/20),0);
    ctx.lineTo(i*(w/20),h);
    ctx.stroke();
}

for (let i = 1; i <= 20; i++) {
    ctx.beginPath();
    ctx.moveTo(0,i*(h/20));
    ctx.lineTo(w,i*(h/20));
    ctx.stroke();
}

ctx.strokeStyle = "#00ff00";
ctx.beginPath();
ctx.moveTo(0,h/2);
for (let i = 1; i <= 20; i++) {
    ctx.lineTo(i*(w/20),rand(0,h));
}
ctx.stroke();