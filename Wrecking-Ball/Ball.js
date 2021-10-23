class Ball{
    constructor(x, y){
         var EP = {
             frictionAir:0.5,
             density:1

             }
             this.body=Bodies.rectangle(x,y, 50, 50);
             World.add(world, this.body);
    }
    display(){
        push()
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        fill("gold");
        ellipseMode(CENTER);
        ellipse(0, 0, 80, 80);
        pop();
    }
}