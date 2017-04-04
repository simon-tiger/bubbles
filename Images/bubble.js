function Bubble(img, x, y, diam) {
  this.x = x;
  this.y = y;
  this.img = img;
  this.diam = diam;
  
  this.lifespan = random(128, 255);
  
  this.ascend = function() {
    this.x += random(-5, 5);
    this.y -= 1;
    this.lifespan -= 2;
  }
  
  this.isDead = function() {
    return this.lifespan < 0;
  }
  
  this.display = function() {
    imageMode(CENTER);
    //tint(255, this.lifespan);
    image(this.img, this.x, this.y, this.diam, this.diam);
  }
  
  this.top = function() {
    if (this.y < this.diam / 2) {
      this.y = this.diam / 2;
    }
  }
}