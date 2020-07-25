class Rope{
    constructor(body1,body2,Xoffset,Yoffset){
       this.Xoffset = Xoffset;
       this.Yoffset = Yoffset;
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB:{x:this.Xoffset,y:this.Yoffset}
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        strokeWeight(4);
        stroke("white");
       // var anchorX = pointA.x;
       // var anchorY = pointB.x;
      //  var anchor2X = pointB.x+this.Xoffset;
       // var anchor2Y = pointB.y+this.Yofsfset;
        line(pointA.x, pointA.y, pointB.x+this.Xoffset, pointB.y+this.Yoffset );
        
    }
    
}