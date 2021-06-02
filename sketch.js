// Simulating Forces
// The Nature of Code
// The Coding Train / Daniel Shiffman
// https://youtu.be/Uibl0UE4VH8
// https://thecodingtrain.com/learning/nature-of-code/2.1-simulating-forces.html
// https://editor.p5js.org/codingtrain/sketches/kYWcOmch

let ball;
let gravity;

function setup() {
  createCanvas(800, 400);
  ball = new Ball(100,100);
  gravity = createVector(0, 0.3);
//   noLoop();
}

function draw() {
    background(0);

    if (keyIsDown(UP_ARROW)) ball.move('up');
    if (keyIsDown(DOWN_ARROW)) ball.move('down');
    if (keyIsDown(LEFT_ARROW)) ball.move('left');
    if (keyIsDown(RIGHT_ARROW)) ball.move('right');
    

    ball.applyForce(gravity);
    ball.update();
    ball.edges();
    ball.show(); 

}
function mousePressed() {
    // console.log(keyCode);
    // ball.reset();
}
function keyPressed(){
    if (keyCode == 82) ball.reset();
    console.log(keyCode);
}
