class Ball{
    constructor(x,y){
        this.posInit = createVector(x,y);
        this.pos = this.posInit.copy();
        this.vel = createVector(0,0);
        this.acc = createVector(0,0);
        this.vel_lim = 10;
        this.radius = 5;
    }

    reset() {
        console.log('reset');
        this.pos = this.posInit.copy();
        //this.pos.set(mouseX,mouseY);
        this.acc.set(0, 0);
        this.vel.set(0, 0);
    }
    edges() {
        if (this.pos.y >= height - this.radius) {
            this.pos.y = height - this.radius;
            //this.vel.y *= -1;
            this.vel.y = 0;
        }
        if (this.pos.x >= width - this.radius) {
            this.pos.x = width - this.radius;
            this.vel.x *= -1;
        }
        if (this.pos.x <= this.radius) {
            this.pos.x = this.radius;
            this.vel.x *= -1;
        }
    }
    applyForce(force) {
        this.acc.add(force);
    }
    update() {
        this.vel.add(this.acc);
        if (this.pos.y === height - this.radius) this.vel.x *= 0.95;
        this.pos.add(this.vel);
        // console.log('vel',this.vel.y);
        // console.log('posY',this.pos.y);
        //console.log('');
        this.acc.set(0, 0);
    }
    move(direction){
        console.log('move',direction);
        switch (direction){
            case 'up':
                if (this.pos.y === height - this.radius) this.vel.y -= 10;
                break;
            case 'down':
                break;
            case 'left':
                if (this.pos.y === height - this.radius && abs(this.vel.x - 0.5)  < this.vel_lim) this.vel.x -= 0.5;
                break;
            case 'right':
                if (this.pos.y === height - this.radius&& this.vel.x + 0.5  < this.vel_lim) this.vel.x += 0.5;
                break;
            default:
                console.log('not a valid command');
        }
  
      }

    show() {
        stroke(255);
        strokeWeight(2);
        fill(255, 100);
        ellipse(this.pos.x, this.pos.y, this.radius * 2);
    }
}