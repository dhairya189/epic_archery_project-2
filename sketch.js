const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher;
var baseImg;

function preload(){
    backgroundImg = loadImage("assets/background.png");
    baseImg = loadImage("assets/base.png");
    playerImg = loadImage('assets/player.png');
}

function setup(){
    canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;
    angleMode(DEGREES);

    var options = {
        isStatic: true
    };

    playerBase = Bodies.rectangle(200,350,180,150,options);
    World.add(world,playerBase);

    player = Bodies.rectangle(250,playerBase.position.y - 150,50,100,options);
    World.add(world,player);

    playerArcher = new PlayerArcher(340, playerBase.position.y - 112, 120,120);
}

function draw(){
    background(backgroundImg);

    imageMode(CENTER);
    image(baseImg,playerBase.position.x,playerBase.position.y,180,150);
    image(playerImg,player.position.x,player.position.y,50,180);

    Engine.update(engine);

    playerArcher.display();
    if (keyCode === 32){
      shoot(playerArcher.angle);
    }

    fill("#FFFF");
    textAlign("center");
    textSize(40);
    text("EPIC ARCHERY",width/2,100);

}