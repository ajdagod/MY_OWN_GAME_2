const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
var engine,world;
var backimg;

function preload(){
backimg=loadImage("background.jpeg");


}

function setup(){
engine=Engine.create();
world=engine.world;
canvas=createCanvas(700,450);
enemy1=new enemy(200,200);
person1=new person(200,200,40,40);
gun1=new gun(100,100,10,10);
}

function draw(){    
background(backimg);
enemy1.display();
person1.display();
gun1.display();
}

