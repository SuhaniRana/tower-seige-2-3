
class Block{
  constructor(x, y, width, height) {
      var options = {
         
          restitution :0.4,
          friction :0.0,
          //isStatic:true
          
         
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.Visibility = 255;
    }
    score(){
      console.log(score);
      if(this.Visibility<0 && this.Visibility>-105){
        score++;
        console.log("if "+ score);
      }
    }
    display(){
      
      
        if(this.body.speed < 3){
          var ang = this.body.angle;
          var pos= this.body.position;
          push();
         //this.body.Visibility();
         translate(pos.x, pos.y);
         rotate(ang);
         rectMode(CENTER);
         rect(0,0,this.width, this.height);
         pop();
         } 
         else{
      
          World .remove (world, this.body);
          push ();
          this.Visibility = this.Visibility - 5;
          //tint (255, this.Visibility);
          //image (this.image, this.body.position.x, this.body.position.y, 50, 50);
          
          pop ();
         }
      
        } 
      }
    

