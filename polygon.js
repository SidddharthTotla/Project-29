class Polygon{
    constructor(x,y,radius){
        var options = {
            'restitution':0.5,
            'friction':0.5,
            'density':1.0
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        this.image = loadImage("Polygon.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.radius,this.radius);
    }
}