var bubbleImg;
var bubbles = [];

function preload() {
  bubbleImg = loadImage('bubble1.gif');
}

function setup() { 
  createCanvas(600, 400);
} 

function mousePressed() {
  bubbles.push(new Bubble(bubbleImg, mouseX, mouseY, random(50, 150)));
}

function draw() { 
  background(51);
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].ascend();
    bubbles[i].display();
    bubbles[i].top();
    if (bubbles[i].isDead()) {
      bubbles.splice(i, 1);
      i--;
    }
  }
}