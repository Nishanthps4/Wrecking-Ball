class Box{
    constructor(x, y){
         var EP = {
             restitution:0.8,
             density:0.05,
             friction:1
             }
             this.body=Bodies.rectangle(x,y, 50, 50);
             World.add(world, this.body);
    }
    display(){
        push()
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        fill("blue");
        rectMode(CENTER);
        rect(0, 0, 50, 50);
        pop();
    }
}