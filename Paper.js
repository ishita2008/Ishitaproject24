class Paper{
    constructor(x,y,width,height){
    var options={

        isStatic:false,
        restitution:0.3,
        friction:0.3,
        density:150.0

    }
    this.body=Bodies.rectangle(x,y,width,height,options)
    this.width=width;
    this.height=height
    World.add(world, this.body);
}

    
    display(){
        var pos=this.body.position



push();
        translate(pos.x,pos.y)
       

        ellipseMode(CENTER)
        ellipse(0,0,this.width,this.height)
        pop();
    }
   
}

