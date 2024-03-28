class playerArrow{
    constructor(x,y,width,height,options){
        arrow_options = {
            isStatic: true,
            density: 0.1
        };
        this.body.width = width;
        this.body.height = height;
        this.body = Bodies.rectangle(x,y,this.width,this.height,options);

        this.image = loadImage("assets/arrow.png");
        World.add(world, this.body);        
    }

    shoot(ArcherAngle){
        var velocity = p5.Vector.fromAngle(ArcherAngle);
        velocity.mult(20);
        Matter.Body.setStatic(this.body,false);
        Matter.Body.setVelocity(this.body,{x: velocity.x, y: velocity.y});
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}