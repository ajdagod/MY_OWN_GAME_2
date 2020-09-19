class enemy{
constructor(x,y,width,height){

this.body=Bodies.rectangle(x, y, 10, 20);
this.width=width;
this.height=height;
this.image=loadImage("monster.png");
World.add(world,this.body);

}

display(){
imageMode(CENTER);
image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
}
}




