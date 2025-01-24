function setup(){
    let canvas = createCanvas(400, 400);
    canvas.parent('canvas-container');
}

function draw(){
    background(0);
    fill(255);
    ellipse(mouseX, mouseY, 50, 50);
}
