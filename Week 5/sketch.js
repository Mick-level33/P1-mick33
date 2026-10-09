let menuFotos = [];
let vraagAchtergronden = [];

let mortalFoto;
let spartanFoto;
let godofwarFoto;

let scherm = "menu";
let niveau = "";
let niveaus = ["MAKKELIJK", "GEMIDDELD", "MOEILIJK"];

let gekozenNiveau = 0;
let nummer = 0;
let score = 0;
let antwoord = -1;

let vonken = [];
let rood = [0, 0, 0];

// Variabelen voor wisselende menuafbeeldingen
let huidigeFoto = 0;
let volgendeFoto = 1;
let overgang = 0;
let laatsteWissel = 0;
let wisselen = false;

// ALLE QUIZVRAGEN
let vragen = [
  // MAKKELIJK
  [
    {
      vraag: "Wat is Kratos' belangrijkste wapen?",
      antwoorden: ["Mjölnir", "Blade of Olympus", "Leviathan Axe", "Claws of Hades"],
      goed: 2
    },
    {
      vraag: "Wie is het kind van Kratos?",
      antwoorden: ["Atreus", "Freya", "Sindri", "Sif"],
      goed: 0
    },
    {
      vraag: "Op welke mythologie richt God of War (2018) zich?",
      antwoorden: ["Noors", "Egyptisch", "Grieks", "Romeins"],
      goed: 0
    },
    {
      vraag: "Wie is de vader van Thor?",
      antwoorden: ["Kratos", "Odin", "Zeus", "Baldur"],
      goed: 1
    },
    {
      vraag: "Waar woont Kratos in God of War (2018)?",
      antwoorden: ["Helheim", "Muspelheim", "Alfheim", "Midgaard"],
      goed: 3
    }
  ],

  // GEMIDDELD
  [
    {
      vraag: "Hoe heet de moeder van Atreus?",
      antwoorden: ["Freya", "Faye", "Sif", "Angrboda"],
      goed: 1
    },
    {
      vraag: "Wie heeft Mimir gevangen gezet in een boom?",
      antwoorden: ["Thor", "Baldur", "Odin", "Freyr"],
      goed: 2
    },
    {
      vraag: "Hoe heet de wereldslang?",
      antwoorden: ["Níðhöggr", "Fenrir", "Jörmungandr", "Garm"],
      goed: 2
    },
    {
      vraag: "Welke dwergen maakten de Leviathan Axe?",
      antwoorden: ["Brok en Sindri", "Durlin en Brok", "Sindri en Odin", "Brok en Mimir"],
      goed: 0
    },
    {
      vraag: "Wat is de andere naam van Atreus?",
      antwoorden: ["Týr", "Loki", "Heimdall", "Magni"],
      goed: 1
    }
  ],

  // MOEILIJK
  [
    {
      vraag: "Wie is de moeder van Baldur?",
      antwoorden: ["Faye", "Sif", "Freya", "Angrboda"],
      goed: 2
    },
    {
      vraag: "Welke draak bevrijd je in God of War (2018)?",
      antwoorden: ["Níðhöggr", "Fáfnir", "Reginn", "Ótr"],
      goed: 1
    },
    {
      vraag: "Wat doet Kratos aan het begin van God of War (2018)?",
      antwoorden: ["Een gat graven", "Een hut maken", "Zijn bijl slijpen", "Een boom omhakken"],
      goed: 3
    },
    {
      vraag: "Wie is de eerste baas in God of War (2018)?",
      antwoorden: ["Thor", "Baldur", "Magni", "Modi"],
      goed: 1
    },
    {
      vraag: "Welke twee zonen van Thor bevechten Kratos en Atreus?",
      antwoorden: ["Baldur en Heimdall", "Magni en Modi", "Freyr en Týr", "Sköll en Hati"],
      goed: 1
    }
  ]
];

// ALLE AFBEELDINGEN LADEN
function preload() {
  

  // Vier menuafbeeldingen
  for (let i = 1; i <= 4; i++) {
    menuFotos.push(loadImage("/../Assets/menu" + i + ".png"));
  }

  // Vijftien vraagafbeeldingen
  for (let i = 1; i <= 15; i++) {
    vraagAchtergronden.push(
      loadImage("/../Assets/Vragen/vraag" + i + ".png")
    );
  }

  // Afbeeldingen voor de drie rangen
  mortalFoto = loadImage("/../Assets/mortal.png");
  spartanFoto = loadImage("/../Assets/spartan.png");
  godofwarFoto = loadImage("/../Assets/godofwar.png");
}

function setup() {
  createCanvas(900, 600);
  textFont("Georgia");

  // Vonken aanmaken
  for (let i = 0; i < 45; i++) {
    vonken.push({
      x: random(width),
      y: random(height),
      snelheid: random(0.5, 2)
    });
  }

  laatsteWissel = millis();
}

// Afbeelding schermvullend tekenen zonder uitrekken
function tekenAchtergrond(foto) {
  if (!foto || foto.width <= 0 || foto.height <= 0) {
    return;
  }

  let schaal = max(width / foto.width, height / foto.height);
  let fotoBreedte = foto.width * schaal;
  let fotoHoogte = foto.height * schaal;

  image(
    foto,
    (width - fotoBreedte) / 2,
    (height - fotoHoogte) / 2,
    fotoBreedte,
    fotoHoogte
  );
}

// MENUACHTERGROND MET VLOEIENDE OVERGANG
function menuAchtergrond() {
  background(0);

  // Huidige afbeelding
  tekenAchtergrond(menuFotos[huidigeFoto]);

  // Na vijf seconden beginnen met wisselen
  if (millis() - laatsteWissel >= 10000 && !wisselen) {
    wisselen = true;
    overgang = 0;
  }

  if (wisselen) {
    // Volgende afbeelding langzaam zichtbaar maken
    tint(255, overgang);
    tekenAchtergrond(menuFotos[volgendeFoto]);
    noTint();

    overgang += 4;

    // Overgang is klaar
    if (overgang >= 255) {
      huidigeFoto = volgendeFoto;
      volgendeFoto = (volgendeFoto + 1) % menuFotos.length;

      overgang = 0;
      wisselen = false;
      laatsteWissel = millis();
    }
  }
}

function draw() {
  // Juiste achtergrond tekenen
  if (scherm == "menu") {
    menuAchtergrond();
  } else {
  background(0);
}

  // Achtergrond voor de quiz
  if (scherm == "quiz") {
    let fotoNummer = gekozenNiveau * 5 + nummer;
    let foto = vraagAchtergronden[fotoNummer];

    tekenAchtergrond(foto);
  }

  // Achtergrond voor de eindrang
  if (scherm == "einde") {
    let foto;

    if (score <= 2) {
      foto = mortalFoto;
    } else if (score <= 4) {
      foto = spartanFoto;
    } else {
      foto = godofwarFoto;
    }

    tekenAchtergrond(foto);
  }

  // Rode gloed
  noStroke();
  fill(180, 0, 0, 15);
  ellipse(450, 300, 450, 550);

  // Vonken alleen in het hoofdmenu
  if (scherm == "menu") {
    for (let i = 0; i < vonken.length; i++) {
      let v = vonken[i];

      fill(255, 100, 20, 180);
      circle(v.x, v.y, 3);

      v.y -= v.snelheid;

      if (v.y < 0) {
        v.y = height;
        v.x = random(width);
      }
    }
  }

  // Juiste scherm tonen
  if (scherm == "menu") {
    menu();
  } else if (scherm == "quiz") {
    quiz();
  } else if (scherm == "einde") {
    einde();
  }
}

// HOOFDMENU
function menu() {
  textAlign(LEFT);

  fill(200, 35, 35);
  textSize(46);
  text("GOD OF WAR", 30, 130);

  fill("white");
  textSize(35);
  text("QUIZ", 30, 180);

  fill(190);
  textSize(16);
  text("God of War (2018)", 30, 260);
  text("God of War Ragnarök (2022)", 30, 290);

  fill("white");
  textSize(22);
  text("KIES JE NIVEAU", 650, 180);

  // Niveauknoppen
  for (let i = 0; i < 3; i++) {
    let y = 220 + i * 90;

    let hover = mouseX > 640 && mouseX < 890 &&
                mouseY > y && mouseY < y + 60;

    if (hover) {
      rood[i] = lerp(rood[i], 250, 0.15);
    } else {
      rood[i] = lerp(rood[i], 0, 0.15);
    }

    // Transparante knop
    noStroke();
    fill(35, 35, 35, 100);
    rect(640, y, 250, 60, 8);

    // Rode hover van rechts naar links
    fill(170, 25, 25, 150);
    rect(890 - rood[i], y, rood[i], 60, 8);

    fill("white");
    textSize(23);
    text(niveaus[i], 655, y + 40);
  }

  fill(180);
  textSize(15);
  text("5 VRAGEN PER NIVEAU", 650, 555);
}

// QUIZSCHERM
function quiz() {
  textAlign(LEFT);

  let vraag = vragen[gekozenNiveau][nummer];

  noStroke();

  // Lichte donkere laag
  fill(0, 0, 0, 35);
  rect(0, 0, width, height);

  // Bovenste informatiebalk
  fill(0, 0, 0, 170);
  rect(0, 0, 900, 75);

  fill(210, 40, 40);
  textSize(22);
  text(niveau, 30, 32);

  fill("white");
  textSize(17);
  text("VRAAG " + (nummer + 1) + " / 5", 30, 60);
  text("SCORE: " + score, 755, 45);

  // Voortgangsbalk
  fill(60, 60, 60);
  rect(0, 72, 900, 3);

  fill(200, 30, 30);
  rect(0, 72, (nummer + 1) * 180, 3);

  // Vraagkaart bovenaan
  fill(10, 10, 15, 185);
  rect(30, 95, 840, 85, 12);

  // Rode lijn bij de vraag
  fill(200, 35, 35);
  rect(30, 95, 5, 85);

  fill("white");
  textSize(24);
  text(vraag.vraag, 55, 115, 790, 60);

  // Vier antwoorden in twee kolommen
  for (let i = 0; i < 4; i++) {
    let x = 30 + (i % 2) * 430;
    let y = 415 + floor(i / 2) * 70;

    let hover = mouseX > x && mouseX < x + 410 &&
                mouseY > y && mouseY < y + 58;

    // Normale knop
    fill(15, 15, 20, 195);

    // Hoverkleur
    if (hover && antwoord == -1) {
      fill(110, 25, 25, 220);
    }

    // Goed en fout
    if (antwoord != -1) {
      if (i == vraag.goed) {
        fill(25, 120, 55, 230);
      } else if (i == antwoord) {
        fill(170, 30, 30, 230);
      }
    }

    rect(x, y, 410, 58, 9);

    // Antwoordletter
    fill(210, 45, 45);

    if (antwoord != -1 && i == vraag.goed) {
      fill(120, 255, 150);
    }

    textSize(21);
    text(["A", "B", "C", "D"][i], x + 17, y + 37);

    // Antwoordtekst
    fill("white");
    textSize(19);
    text(vraag.antwoorden[i], x + 53, y + 37);
  }

  // Onderste balk
  fill(0, 0, 0, 170);
  rect(0, 555, 900, 45);

  textSize(16);

  if (antwoord == -1) {
    fill("white");
    text("KIES HET JUISTE ANTWOORD", 30, 583);
  } else {
    if (antwoord == vraag.goed) {
      fill(100, 255, 140);
      text("GOED ANTWOORD!", 30, 583);
    } else {
      fill(255, 100, 100);
      text("FOUT ANTWOORD!", 30, 583);
    }

    fill("white");
    text("KLIK OM VERDER TE GAAN", 620, 583);
  }
}

// EINDSCHERM
function einde() {
  noStroke();

  // Donkere laag over de rangafbeelding
  fill(0, 0, 0, 100);
  rect(0, 0, width, height);

  textAlign(CENTER);

  fill(200, 35, 35);
  textSize(43);
  text("QUIZ VOLTOOID", width / 2, 125);

  fill(190);
  textSize(20);
  text(niveau, width / 2, 170);

  // Score
  fill("white");
  textSize(75);
  text(score + " / 5", width / 2, 285);

  // Rang bepalen
  let rang = "";

  if (score == 5) {
    rang = "GOD OF WAR";
  } else if (score >= 3) {
    rang = "SPARTAN WARRIOR";
  } else {
    rang = "MORTAL";
  }

  fill(210, 40, 40);
  textSize(34);
  text(rang, width / 2, 365);

  // Beschrijving
  fill(210);
  textSize(18);

  if (score == 5) {
    text("Je bent een echte legende van Sparta!", width / 2, 405);
  } else if (score >= 3) {
    text("Je bent op weg om een legende te worden!", width / 2, 405);
  } else {
    text("Zelfs Kratos moest ooit beginnen.", width / 2, 405);
  }

  // Terugknop
  let hover = mouseX > 300 && mouseX < 600 &&
              mouseY > 450 && mouseY < 515;

  if (hover) {
    fill(190, 35, 35, 230);
  } else {
    fill(100, 20, 20, 180);
  }

  rect(300, 450, 300, 65, 10);

  fill("white");
  textSize(22);
  text("TERUG NAAR MENU", width / 2, 491);

  textAlign(LEFT);
}

// MUISKLIKKEN
function mousePressed() {

  // Niveau kiezen
  if (scherm == "menu") {
    for (let i = 0; i < 3; i++) {
      let y = 220 + i * 90;

      if (mouseX > 640 && mouseX < 890 &&
          mouseY > y && mouseY < y + 60) {

        niveau = niveaus[i];
        gekozenNiveau = i;

        nummer = 0;
        score = 0;
        antwoord = -1;

        scherm = "quiz";
        break;
      }
    }
  }

  // Quiz beantwoorden
  else if (scherm == "quiz") {

    if (antwoord == -1) {
      for (let i = 0; i < 4; i++) {
        let x = 30 + (i % 2) * 430;
        let y = 415 + floor(i / 2) * 70;

        if (mouseX > x && mouseX < x + 410 &&
            mouseY > y && mouseY < y + 58) {

          antwoord = i;

          if (i == vragen[gekozenNiveau][nummer].goed) {
            score++;
          }

          break;
        }
      }
    } else {
      // Naar de volgende vraag
      antwoord = -1;
      nummer++;

      if (nummer >= 5) {
        scherm = "einde";
      }
    }
  }

  // Terug naar hoofdmenu
  else if (scherm == "einde") {
    if (mouseX > 300 && mouseX < 600 &&
        mouseY > 450 && mouseY < 515) {

      scherm = "menu";
      nummer = 0;
      antwoord = -1;

      // Menuovergang opnieuw beginnen
      laatsteWissel = millis();
    }
  }
}
