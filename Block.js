class Block {
  constructor(x, y, width, height){
    var options ={
      'isStatic': false,
      'restitution':0.8,
      'friction':1.0,
      'density':1.0
    }
    this.x = x;
    this.y =y;
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options);
    World.add(world,this.body);
  }
  display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(1);
        rect(0, 0, 30, 40);
        pop();
  }
}
