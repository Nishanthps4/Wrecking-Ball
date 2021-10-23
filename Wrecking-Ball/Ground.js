class Ground{
    constructor(){
        var EP = {
            isStatic:true
        }
        this.body=Bodies.rectangle(1500, 600, 3000, 20, EP);
        World.add(world, this.body);
    }
    display(){
        fill("brown");
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, 3000, 20);
        
    }
}