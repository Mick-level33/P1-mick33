let kleuren = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "cyan"];
let vormen = ["cirkel", "vierkant", "driehoek"];

let chaos = false;

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(20);

  if (chaos == true) {

    for (let i = 0; i < 50; i++) {

      // Elke vorm beweegt een andere kant op
      let snelheidX = (i % 7) - 3;
      let snelheidY = (i % 5) - 2;

      let x = (i * 91 + frameCount * snelheidX) % 900;
      let y = (i * 63 + frameCount * snelheidY) % 700;

      // Als positie negatief wordt, terug naar andere kant
      if (x < -50) {
        x += 900;
      }

      if (y < -50) {
        y += 700;
      }

      // Groter en kleiner worden
      let grootte = 60 + sin(frameCount * 0.05 + i) * 40;

      // Kleur en vorm uit arrays
      let kleur = kleuren[i % kleuren.length];
      let vorm = vormen[i % vormen.length];

      fill(kleur);
      noStroke();

      if (vorm == "cirkel") {
        circle(x, y, grootte);
      }

      if (vorm == "vierkant") {
        square(x, y, grootte);
      }

      if (vorm == "driehoek") {
        triangle(
          x, y - grootte / 2,
          x - grootte / 2, y + grootte / 2,
          x + grootte / 2, y + grootte / 2
        );
      }
    }
  }
}

function keyPressed() {

  if (keyCode == BACKSPACE) {

    chaos = true;

    shuffle(kleuren, true);
    shuffle(vormen, true);

    return false;
  }
}