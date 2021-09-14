//ball
let xBall = 300
let yBall = 200
let dBall = 25
let rBall = dBall/2
let xmovement = 7
let ymovement = 7

//rect1
let xRect1 = 20
let yRect1 = 170
let lRect1 = 10
let aRect1 = 60

//rect2
let xRect2 = 570
let yRect2 = 170
let lRect2 = 10
let aRect2 = 60
let vRect2;

//chance de errar
let chanceDeErrar = 0;


//função colidir da biblioteca
let colidiu = false

//placar
let meusPontos = 0;
let pontosOponente = 0;

//sons do jogo
let raquetada;
let ponto;
let trilha;

function preload(){
  trilha=loadSound("trilha-1.mp3")
  ponto=loadSound("ponto.mp3")
  raquetada=loadSound("raquetada.mp3")
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  ball();
  ballmovement();
  mRect(xRect1, yRect1);
  rect1movement();
  colisionrect1();
  verificaColisao(xRect1, yRect1);
  mRect(xRect2, yRect2);
  rect2movement();
  verificaColisao(xRect2, yRect2);
  incluiPlacar();
  marcaPonto();
}

function ball(){
  circle(xBall, yBall, dBall)
}

function ballmovement(){
  xBall += xmovement;
  yBall += ymovement;
  if(xBall + rBall > width ||
    xBall - rBall < 0){
    xmovement *= -1
  }
  if(yBall + rBall > height ||
    yBall - rBall < 0){
    ymovement *= -1;
  }
}  

function mRect(x, y){
    rect(x, y,lRect1, aRect1);
}

function rect1movement(){
    if(keyIsDown(UP_ARROW)){
    yRect1 -= 10
  }
  if(keyIsDown(DOWN_ARROW)){
    yRect1 += 10
  }
}

function colisionrect1(){
  if(xBall - rBall < xRect1+lRect1 && yBall - rBall < yRect1 + aRect1 && yBall + rBall > yRect1){
  xmovement *= -1;
    raquetada.play();
  }
}

function verificaColisao (x, y){
  colidiu =
  collideRectCircle(x, y, lRect1, aRect1, xBall, yBall, rBall);
  if (colidiu){
    xmovement *= -1
    raquetada.play();
  }
}

function rect2movement (){
  vRect2 = yBall - yRect2 - lRect2 /2 - 30;
  yRect2 += vRect2 + chanceDeErrar
  calculaChanceDeErrar()
}

function marcaPonto() {
    if (xBall > 585) {
        meusPontos += 1;
      ponto.play();
    }
    if (xBall < 15) {
        pontosOponente += 1;
      ponto.play();
    }
}

function incluiPlacar (){
  stroke (255)
  textAlign(CENTER);
  textSize(22);
  fill (color(255, 140, 0));
  rect(180,5,40,25);
  fill (255);
  text(meusPontos, 200, 26);
  fill (color(255, 140, 0));
  rect(380,5,40,25)
  fill (255);
  text(pontosOponente, 400,26);
}

function calculaChanceDeErrar() {
  if (pontosOponente >= meusPontos) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
  }
}
