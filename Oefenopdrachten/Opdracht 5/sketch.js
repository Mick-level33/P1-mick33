function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(10);

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {

      let afstand = dist(mouseX, mouseY, i * 50 + 25, j * 50 + 25);
      let grootte = 15 + sin(frameCount * 0.05 + afstand * 0.05) * 12;

      fill(i * 25, j * 25, 255);
      noStroke();

      ellipse(i * 50 + 25, j * 50 + 25, grootte, grootte);
    }
  }
}