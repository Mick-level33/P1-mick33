
let achtergrond;
let scherm = "menu";
let niveau = "";
let niveaus = ["MAKKELIJK", "GEMIDDELD", "MOEILIJK"];

let vraagNummer = 0;
let score = 0;
let gekozenAntwoord = -1;

// Vragen voor makkelijk
let vragen = [
  {
    vraag: "Hoe heet de hoofdpersoon?",
    antwoorden: ["Thor", "Kratos", "Odin", "Baldur"],
    goed: 1
  },
  {
    vraag: "Hoe heet de zoon van Kratos?",
    antwoorden: ["Brok", "Tyr", "Atreus", "Freya"],
    goed: 2
  },
  {
    vraag: "Welk wapen gebruikt Kratos?",
    antwoorden: ["Leviathan Axe", "Mjolnir", "Boog", "Speer van Odin"],
    goed: 0
  },
  {
    vraag: "Wie is de vader van Thor?",
    antwoorden: ["Zeus", "Baldur", "Kratos", "Odin"],
    goed: 3
  },
  {
    vraag: "Hoe heet de dwerg met blauwe huid?",
    antwoorden: ["Sindri", "Brok", "Mimir", "Durlin"],
    goed: 1
  }
];

function preload() {
  achtergrond = loadImage("/../Assets/background.jpg");
}

function setup() {
  createCanvas(900, 600);
  textFont("Georgia");
}

function draw() {
  image(achtergrond, 0, 0, width, height);

  if (scherm == "menu") {
    fill(200, 35, 35);
    textSize(46);
    text("GOD OF WAR", 30, 130);

    fill("white");
    textSize(35);
    text("QUIZ", 30, 180);

    // Uitleg over welke games.
    fill(190);
    textSize(16);
    text("God of War (2018)", 30, 260);
    text("God of War Ragnarök (2022)", 30, 290);

    textSize(22);
    text("KIES JE NIVEAU", 650, 180);

    for (let i = 0; i < niveaus.length; i++) {
      let y = 260 + i * 90;

      if (mouseX > 640 && mouseX < 890 &&
          mouseY > y - 40 && mouseY < y + 20) {
        fill(180, 30, 30);
      } else {
        fill(35, 35, 35, 210);
      }

      noStroke();
      rect(640, y - 40, 250, 60, 8);

      fill("white");
      textSize(23);
      text(niveaus[i], 655, y);
    }

    fill(180);
    textSize(15);
    text("5 VRAGEN PER NIVEAU", 650, 555);
  }

  if (scherm == "quiz") {
    fill(0, 0, 0, 200);
    rect(0, 0, width, height);

    fill("white");
    textSize(22);
    text(niveau + "  |  VRAAG " + (vraagNummer + 1) + "/5", 50, 65);
    text("SCORE: " + score, 700, 65);

    textSize(29);
    text(vragen[vraagNummer].vraag, 50, 150);

    // Antwoordknoppen
    for (let i = 0; i < 4; i++) {
      let y = 220 + i * 80;

      if (gekozenAntwoord == i) {
        if (i == vragen[vraagNummer].goed) {
          fill(30, 130, 60);
        } else {
          fill(170, 35, 35);
        }
      } else {
        fill(40, 45, 55);
      }

      rect(50, y, 800, 65, 8);

      fill("white");
      textSize(22);
      text(vragen[vraagNummer].antwoorden[i], 75, y + 42);
    }

    if (gekozenAntwoord != -1) {
      fill("white");
      textSize(18);
      text("Klik om verder te gaan", 50, 580);
    }
  }

  if (scherm == "einde") {
    fill(0, 0, 0, 210);
    rect(0, 0, width, height);

    fill("white");
    textSize(45);
    text("QUIZ VOLTOOID!", 260, 220);

    textSize(30);
    text("Jouw score: " + score + " / 5", 320, 300);

    textSize(22);
    text("Klik om terug te gaan naar het menu", 230, 390);
  }
}

function mousePressed() {
  if (scherm == "menu") {
    for (let i = 0; i < niveaus.length; i++) {
      let y = 260 + i * 90;

      if (mouseX > 640 && mouseX < 890 &&
          mouseY > y - 40 && mouseY < y + 20) {
        niveau = niveaus[i];
        vraagNummer = 0;
        score = 0;
        gekozenAntwoord = -1;
        scherm = "quiz";
      }
    }
  }

  else if (scherm == "quiz") {
    if (gekozenAntwoord == -1) {
      for (let i = 0; i < 4; i++) {
        let y = 220 + i * 80;

        if (mouseX > 50 && mouseX < 850 &&
            mouseY > y && mouseY < y + 65) {
          gekozenAntwoord = i;

          if (i == vragen[vraagNummer].goed) {
            score++;
          }
        }
      }
    } else {
      vraagNummer++;
      gekozenAntwoord = -1;

      if (vraagNummer == 5) {
        scherm = "einde";
      }
    }
  }

  else if (scherm == "einde") {
    scherm = "menu";
  }
}
