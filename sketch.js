function setup() {
  createCanvas(600, 600);
  background("blue")
}

function draw() {
  stroke("#FFEB3B");
  fill("red");
  
  
  if (mouseIsPressed) {
    rect(mouseX, mouseY, 20, 35);
  }
}
