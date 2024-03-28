class PlayerArcher{
    constructor(x,y,width,height){
        const options = {
            isStatic: true
        };
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.body.width = width;
        this.body.height = height;
        this.collapse = false;
        this.image = loadImage("assets/playerArcher.png", ()=>{
            this.image.resize(100,200);
        });
        World.add(world, this.body);
        Matter.Body.setAngle(this.body,-90);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        console.log(angle);

        if (keyIsDown(DOWN_ARROW) && angle < -73){
            angle += 1;
            Bodies.setAngle(this.body,angle);
        }

        if (keyIsDown(UP_ARROW) && angle > -103){
            angle -= 1;
            Bodies.setAngle(this.body,angle);
        }

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}
