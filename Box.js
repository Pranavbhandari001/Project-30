class Box  {
    constructor(x, y, width, height){
      var options = {
        
        'density':1.0
    }
    }  
    
    display(){
      console.log(this.body.speed);
      if(this.body.speed<3){
        super.display();
      
      }
      else{
        //This command will remove the object from world
        World.remove(world,this.body);
        push();
        this.Visiblity=this.Visiblity-5;
        tint(255,this.Visiblity);
        image(this.image,this.body.position.x,this.body.position.y,50,50);
        pop();
      }
    }
}
    