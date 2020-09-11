class Chain{
constructor(bodyA,bodyB){
    var options={
        bodyA:bodyA,
        bodyB:bodyB,
        stiffness:0.04,
        length :10
    }
    this.chain= Constraint.create(options);
    World.add(world, this.chain);    
}
display(){

var pointA=bird.body.position;
var pointB=log6.body.position;

    strokeWeight(3);
    line(pointA.x,pointA.y,pointB.x,pointB.y);
}






}