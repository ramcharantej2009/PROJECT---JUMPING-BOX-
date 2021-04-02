const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

    var ball_options ={
        restitution: 1.0
    }

    ball = Bodies.circle(200,100,20, ball_options);
    World.add(world,ball);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);

    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 20, 20);
}
/*To use the physics engine, we will use three objects created in Matter.js library -> World, Engine and Bodies.
Universe --> Earth --> People
Since these objects are a part of Matter library, they are referenced as Matter.World, Matter.Engine and Matter.Bodies.
Let's rename them as World, Engine and Bodies so that it is easy to write and read our code. This is called namespacing in programming.
Ram charan Tej from hyderabad = Ram
Nickname
Matter.World=w
Left side original name
Right side nickname
const is just like var - except you cannot change the value stored in a const anywhere in your program. ● Engine is used to create the physics engine. ● World is used to create the physical world and add objects to it. ● Bodies is used to create the physical objects which inhabit the world.
var ball= createSprite()
var --> Variable
const --> constant
const pi=3.14
12:59
Guest
As soon as you create a physics engine, a new world is created using the physics engine.
https://github.com/whitehatjr/bouncyBall*/