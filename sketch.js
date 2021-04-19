const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var stone1 ;
var rubber1 , rubber2,rubber3,rubber4,rubber5,rubber6;
var rubber7 , rubber8,rubber9,rubber10,rubber11,rubber12;
var iron1 ;
var stone2 ;
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    
    stone1 = new stone(400,590,90,90);
    rubber1 = new Rubber(550,580,10);
    rubber2 = new Rubber(550,580,10);
    rubber3 = new Rubber(550,580,10);
    rubber4 = new Rubber(550,580,10);
    rubber5 = new Rubber(550,580,10);
    rubber6 = new Rubber(550,580,10);
    rubber7 = new Rubber(550,590,10);
    rubber8 = new Rubber(550,590,10);
    rubber9 = new Rubber(550,590,10);
    rubber10 = new Rubber(550,590,10);
    rubber11 = new Rubber(550,590,10);
    rubber12 = new Rubber(550,590,10);
    iron1 = new iron(200,580,90,50);
    stone2 = new stone(1000,580,40,30);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    stone1.display();
    rubber1.display();
    iron1.display();
    stone2.display();
    rubber2.display();
    rubber3.display();
    rubber4.display();
    rubber5.display();
    rubber6.display();
    rubber7.display();
    rubber8.display();
    rubber9.display();
    rubber10.display();
    rubber11.display();
    rubber12.display();
}