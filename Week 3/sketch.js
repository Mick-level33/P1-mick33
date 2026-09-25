let vakje1 = "white";
let vakje2 = "white";
let vakje3 = "white";
let vakje4 = "white";
let vakje5 = "white";
let vakje6 = "white";
let vakje7 = "white";
let vakje8 = "white";
let vakje9 = "white";
let beurt = 1;
let winnaar = "";
let gelijkspel = false;
let geluid;
let huidigGeluid = 1;
let achtergrondgeluid;
let achtergrondgeluid2;
let achtergrondgeluid3;
let achtergrondgeluid4;
let achtergrondgeluid5;
let achtergrondgeluid6;
let achtergrondgeluid7;
let achtergrondgeluid8;
let speler1Kleur="";
let speler2Kleur="";
let gekozenKleur = "";
let spelgestart = false;
let achtergrond1Kleur;
let achtergrond2Kleur;

function preload() {
  geluid = loadSound('/../Assets/leappad3-click-sound.mp3');
  achtergrondgeluid = loadSound('/../Assets/backrooms.mp3');
  achtergrondgeluid2 = loadSound('/../Assets/the-saxophones-getting-louder.mp3');
  achtergrondgeluid3 = loadSound('/../Assets/podlaia-muzyka.mp3');
  achtergrondgeluid4 = loadSound('/../Assets/mexican_hat_dance.mp3');
  achtergrondgeluid5 = loadSound('/../Assets/cartel-song.mp3');
  achtergrondgeluid6 = loadSound('/../Assets/m83-midnight-city.mp3');
  achtergrondgeluid7 = loadSound('/../Assets/shooting-stars-mp3.mp3');
  achtergrondgeluid8 = loadSound('/../Assets/beethoven-virus.mp3');
}
function setup() {
  // speler1Kleur = color(0, 128, 0);
  // speler2Kleur = color(128, 0, 128);

  achtergrond1Kleur = color(speler1Kleur);
  achtergrond2Kleur = color(speler2Kleur);

 //achtergrondgeluid.play();


  createCanvas(400, 400);
}
function draw() {
  background(220);
  if (spelgestart == true) {
    
    achtergrond1Kleur = color(speler1Kleur);
achtergrond2Kleur = color(speler2Kleur);
    // Achtergrond laat zien wie aan de beurt is
    if (beurt == 1) {
      fill(speler1Kleur);
      rect(0, 0, 200, 400);
      achtergrond2Kleur = lerpColor(achtergrond2Kleur, color("black"), 0.4);
      fill(achtergrond2Kleur);
      rect(200, 0, 200, 400);
    } else {
      achtergrond1Kleur = lerpColor(achtergrond1Kleur, color("black"), 0.4);
      fill(achtergrond1Kleur);
      rect(0, 0, 200, 400);
      fill(speler2Kleur);
      rect(200, 0, 200, 400);
    }
    // Zwarte achterkant bord
    fill("black");
    square(45, 45, 310, 20);
    // Vakjes
    if (vakje1 == "white" &&
      mouseX > 55 && mouseX < 145 &&
      mouseY > 55 && mouseY < 145 &&
      winnaar == "" && gelijkspel == false) {
      if (beurt == 1) {
        let hoverKleur = speler1Kleur;
        // hoverKleur.alpha = 150;
        fill(hoverKleur);
        
      } else {
        let hoverKleur = speler2Kleur;
        hoverKleur.alpha = 150;
        fill(hoverKleur);
      }
    } else {
      fill(vakje1);
    }
    square(55, 55, 90, 20);

    // Vakje 2
    if (vakje2 == "white" &&
      mouseX > 155 && mouseX < 245 &&
      mouseY > 55 && mouseY < 145 &&
      winnaar == "" && gelijkspel == false) {

      if (beurt == 1) {
        let hoverKleur = speler1Kleur;
        hoverKleur.alpha = 150;
        fill(hoverKleur);
      } else {
        let hoverKleur = speler2Kleur;
        hoverKleur.alpha = 150;
        fill(hoverKleur);
      }

    } else {
      fill(vakje2);
    }

    square(155, 55, 90, 20);


    // Vakje 3
    if (vakje3 == "white" &&
      mouseX > 255 && mouseX < 345 &&
      mouseY > 55 && mouseY < 145 &&
      winnaar == "" && gelijkspel == false) {

      if (beurt == 1) {
        let hoverKleur = speler1Kleur;
        hoverKleur.alpha = 150;
        fill(hoverKleur);
      } else {
        let hoverKleur = speler2Kleur;
        hoverKleur.alpha = 150;
        fill(hoverKleur);
      }

    } else {
      fill(vakje3);
    }

    square(255, 55, 90, 20);


    // Vakje 4
    if (vakje4 == "white" &&
      mouseX > 55 && mouseX < 145 &&
      mouseY > 155 && mouseY < 245 &&
      winnaar == "" && gelijkspel == false) {

      if (beurt == 1) {
        let hoverKleur = speler1Kleur;
        hoverKleur.alpha = 150;
        fill(hoverKleur);
      } else {
        let hoverKleur = speler2Kleur;
        hoverKleur.alpha = 150;
        fill(hoverKleur);
      }

    } else {
      fill(vakje4);
    }

    square(55, 155, 90, 20);


    // Vakje 5
    if (vakje5 == "white" &&
      mouseX > 155 && mouseX < 245 &&
      mouseY > 155 && mouseY < 245 &&
      winnaar == "" && gelijkspel == false) {

      if (beurt == 1) {
        let hoverKleur = speler1Kleur;
        hoverKleur.alpha = 150;
        fill(hoverKleur);
      } else {
        let hoverKleur = speler2Kleur;
        hoverKleur.alpha = 150;
        fill(hoverKleur);
      }

    } else {
      fill(vakje5);
    }

    square(155, 155, 90, 20);


    // Vakje 6
    if (vakje6 == "white" &&
      mouseX > 255 && mouseX < 345 &&
      mouseY > 155 && mouseY < 245 &&
      winnaar == "" && gelijkspel == false) {

      if (beurt == 1) {
        let hoverKleur = speler1Kleur;
        hoverKleur.alpha = 150;
        fill(hoverKleur);
      } else {
        let hoverKleur = speler2Kleur;
        hoverKleur.alpha = 150;
        fill(hoverKleur);
      }

    } else {
      fill(vakje6);
    }

    square(255, 155, 90, 20);


    // Vakje 7
    if (vakje7 == "white" &&
      mouseX > 55 && mouseX < 145 &&
      mouseY > 255 && mouseY < 345 &&
      winnaar == "" && gelijkspel == false) {

      if (beurt == 1) {
        let hoverKleur = speler1Kleur;
        hoverKleur.alpha = 150;
        fill(hoverKleur);
      } else {
        let hoverKleur = speler2Kleur;
        hoverKleur.alpha = 150;
        fill(hoverKleur);
      }

    } else {
      fill(vakje7);
    }

    square(55, 255, 90, 20);


    // Vakje 8
    if (vakje8 == "white" &&
      mouseX > 155 && mouseX < 245 &&
      mouseY > 255 && mouseY < 345 &&
      winnaar == "" && gelijkspel == false) {

      if (beurt == 1) {
        let hoverKleur = speler1Kleur;
        hoverKleur.alpha = 150;
        fill(hoverKleur);
      } else {
        let hoverKleur = speler2Kleur;
        hoverKleur.alpha = 150;
        fill(hoverKleur);
      }

    } else {
      fill(vakje8);
    }

    square(155, 255, 90, 20);


    // Vakje 9
    if (vakje9 == "white" &&
      mouseX > 255 && mouseX < 345 &&
      mouseY > 255 && mouseY < 345 &&
      winnaar == "" && gelijkspel == false) {

      if (beurt == 1) {
        let hoverKleur = speler1Kleur;
        hoverKleur.alpha = 150;
        fill(hoverKleur);
      } else {
        let hoverKleur = speler2Kleur;
        hoverKleur.alpha = 150;
        fill(hoverKleur);
      }

    } else {
      fill(vakje9);
    }

    square(255, 255, 90, 20);


    if (winnaar == "" && gelijkspel == false) {

      // Balk bovenaan
      fill("black");
      rect(105, 8, 190, 30, 15);

      textAlign(CENTER, CENTER);
      textSize(14);

      if (beurt == 1) {
        fill(speler1Kleur);
        text("SPELER 1 • JOUW BEURT", 200, 23);
      } else {
        fill(speler2Kleur);
        text("SPELER 2 • JOUW BEURT", 200, 23);
      }
    }

    if (winnaar != "") {

      // Donkere box
      fill("black");
      rect(80, 130, 240, 140, 20);

      // Tekst
      fill(winnaar);
      textAlign(CENTER);
      textSize(30);

      if (winnaar == speler1Kleur) {
        text("SPELER 1 WINT!", 200, 175);
      } else {
        text("SPELER 2 WINT!", 200, 175);
      }

      // Opnieuw knop
      fill("white");
      rect(130, 205, 140, 40, 10);

      fill("black");
      textSize(16);
      text("OPNIEUW", 200, 225);
    }

    if (gelijkspel == true) {

      fill("black");
      rect(80, 130, 240, 140, 20);

      fill("white");
      textAlign(CENTER);
      textSize(30);
      text("GELIJKSPEL!", 200, 175);

      fill("white");
      rect(130, 205, 140, 40, 10);

      fill("black");
      textSize(16);
      text("OPNIEUW", 200, 225);
    }

    fill("white")
    rect(175, 365, 50, 25, 10);
    
    fill("black");
    textAlign(CENTER, CENTER);
    textSize(18);
    text("⏸", 200, 377.5);

    fill("white")
    rect(230, 365, 50, 25, 10);

    fill("black");
    textAlign(CENTER, CENTER);
    textSize(18);
    text("⏭", 255, 377.5);

    fill("white")
    rect(120, 365, 50, 25, 10);

    fill("black");
    textAlign(CENTER, CENTER);
    textSize(18);
    text("⏮", 145, 377.5);

    fill("white")
    rect(330, 365, 50, 25, 10);
    text("🎨", 355, 377.5);


  } else if (spelgestart === false) {
    background(100);
    noStroke()
    fill(10, 84, 173)
    square(30, 80, 80, 20)



    fill(209, 13, 13)
    square(130, 80, 80, 20)
    fill(255, 166, 0)
    square(230, 80, 80, 20)
    fill(255, 255, 0)
    square(30, 180, 80, 20)
    fill(96, 255, 0)
    square(130, 180, 80, 20)
    fill(182, 84, 225)
    square(230, 180, 80, 20)
    fill(251, 84, 225)
    square(30, 280, 80, 20)
    fill(100, 251, 225)
    square(130, 280, 80, 20)
    fill(100, 69, 0)
    square(230, 280, 80, 20)
  }
}


function mousePressed() {

  if (spelgestart == true) {
  if (winnaar != "" || gelijkspel == true) {

    if (mouseX > 130 && mouseX < 270 &&
      mouseY > 205 && mouseY < 245) {
      resetSpel();
    }

    return;
  }
  // Vakje 1
  if (mouseX > 55 && mouseX < 145 &&
    mouseY > 55 && mouseY < 145 &&
    vakje1 == "white") {

    if (beurt == 1) {
      vakje1 = speler1Kleur;
      beurt = 2;
    } else {
      vakje1 = speler2Kleur;
      beurt = 1;
    }
    geluid.play();
  }

  // Vakje 2
  if (mouseX > 155 && mouseX < 245 &&
    mouseY > 55 && mouseY < 145 &&
    vakje2 == "white") {

    if (beurt == 1) {
      vakje2 = speler1Kleur;
      beurt = 2;
    } else {
      vakje2 = speler2Kleur;
      beurt = 1;
    }
    geluid.play();
  }

  // vakje 3
  if (mouseX > 255 && mouseX < 345 &&
    mouseY > 55 && mouseY < 145 &&
    vakje3 == "white") {

    if (beurt == 1) {
      vakje3 = speler1Kleur;
      beurt = 2;
    } else {
      vakje3 = speler2Kleur;
      beurt = 1;
    }
    geluid.play();
  }

  // vakje 4
  if (mouseX > 55 && mouseX < 145 &&
    mouseY > 155 && mouseY < 245 &&
    vakje4 == "white") {

    if (beurt == 1) {
      vakje4 = speler1Kleur;
      beurt = 2;
    } else {
      vakje4 = speler2Kleur;
      beurt = 1;
    }
    geluid.play();
  }

  // vakje 5
  if (mouseX > 155 && mouseX < 245 &&
    mouseY > 155 && mouseY < 245 &&
    vakje5 == "white") {

    if (beurt == 1) {
      vakje5 = speler1Kleur;
      beurt = 2;
    } else {
      vakje5 = speler2Kleur;
      beurt = 1;
    }
    geluid.play();
  }

  // vakje 6
  if (mouseX > 255 && mouseX < 345 &&
    mouseY > 155 && mouseY < 245 &&
    vakje6 == "white") {

    if (beurt == 1) {
      vakje6 = speler1Kleur;
      beurt = 2;
    } else {
      vakje6 = speler2Kleur;
      beurt = 1;
    }
    geluid.play();
  }

  // vakje 7
  if (mouseX > 55 && mouseX < 145 &&
    mouseY > 255 && mouseY < 345 &&
    vakje7 == "white") {

    if (beurt == 1) {
      vakje7 = speler1Kleur;
      beurt = 2;
    } else {
      vakje7 = speler2Kleur;
      beurt = 1;
    }
    geluid.play();
  }

  // vakje 8
  if (mouseX > 155 && mouseX < 245 &&
    mouseY > 255 && mouseY < 345 &&
    vakje8 == "white") {

    if (beurt == 1) {
      vakje8 = speler1Kleur;
      beurt = 2;
    } else {
      vakje8 = speler2Kleur;
      beurt = 1;
    }
    geluid.play();
  }

  // vakje 9
  if (mouseX > 255 && mouseX < 345 &&
    mouseY > 255 && mouseY < 345 &&
    vakje9 == "white") {

    if (beurt == 1) {
      vakje9 = speler1Kleur;
      beurt = 2;
    } else {
      vakje9 = speler2Kleur;
      beurt = 1;
    }
    geluid.play();
  }
  if (mouseX > 175 && mouseX < 225 && mouseY > 365 && mouseY < 390) {

    if (huidigGeluid == 1) {

        if (achtergrondgeluid.isPlaying()) {
            achtergrondgeluid.pause();
        } else {
            achtergrondgeluid.loop();
        }

    } else if (huidigGeluid == 2) {

        if (achtergrondgeluid2.isPlaying()) {
            achtergrondgeluid2.pause();
        } else {
            achtergrondgeluid2.loop();
        }

    } else if (huidigGeluid == 3) {

        if (achtergrondgeluid3.isPlaying()) {
            achtergrondgeluid3.pause();
        } else {
            achtergrondgeluid3.loop();
        }

    } else if (huidigGeluid == 4) {
      if (achtergrondgeluid4.isPlaying()) {
            achtergrondgeluid4.pause();
        } else {
            achtergrondgeluid4.loop();
        }
    } else if (huidigGeluid == 5) {
      if (achtergrondgeluid5.isPlaying()) {
            achtergrondgeluid5.pause();
        } else {
            achtergrondgeluid5.loop();
        }
    } else if (huidigGeluid == 6) {
      if (achtergrondgeluid6.isPlaying()) {
            achtergrondgeluid6.pause();
        } else {
            achtergrondgeluid6.loop();
        }   
    } else if (huidigGeluid == 7) {
      if (achtergrondgeluid7.isPlaying()) {
            achtergrondgeluid7.pause();
        } else {
            achtergrondgeluid7.loop();
        }
    } else {
      if (achtergrondgeluid8.isPlaying()) {
            achtergrondgeluid8.pause();
        } else {
            achtergrondgeluid8.loop();
        }
    }
}
    
    if (mouseX > 230 && mouseX < 280 && mouseY > 365 && mouseY < 390) {
if (huidigGeluid == 1) {
    achtergrondgeluid.stop();
    huidigGeluid = 2;
    achtergrondgeluid2.loop();
 } else if (huidigGeluid == 2) {
        achtergrondgeluid2.stop();
        huidigGeluid = 3;
        achtergrondgeluid3.loop();
    } else if(huidigGeluid == 3) {
      achtergrondgeluid3.stop();
        huidigGeluid = 4;
        achtergrondgeluid4.loop();
    } else if (huidigGeluid == 4) {
      achtergrondgeluid4.stop();
        huidigGeluid = 5;
        achtergrondgeluid5.loop();
    } else if (huidigGeluid == 5) {
      achtergrondgeluid5.stop();
        huidigGeluid = 6;
        achtergrondgeluid6.loop();
    } else if (huidigGeluid == 6) {
      achtergrondgeluid6.stop();
        huidigGeluid = 7;
        achtergrondgeluid7.loop();
    } else if (huidigGeluid == 7) {
      achtergrondgeluid7.stop();
        huidigGeluid = 8;
        achtergrondgeluid8.loop();
    } else {
      achtergrondgeluid8.stop();
        huidigGeluid = 1;
        achtergrondgeluid.loop();
    }
  
} 

if (mouseX > 120 && mouseX < 170 && mouseY > 365 && mouseY < 390) {
if (huidigGeluid == 1) {
    achtergrondgeluid.stop();
    huidigGeluid = 8;
    achtergrondgeluid8.loop();
 } else if (huidigGeluid == 8) {
        achtergrondgeluid8.stop();
        huidigGeluid = 7;
        achtergrondgeluid7.loop();
    } else if(huidigGeluid == 7) {
      achtergrondgeluid7.stop();
        huidigGeluid = 6;
        achtergrondgeluid6.loop();
    } else if (huidigGeluid == 6) {
      achtergrondgeluid6.stop();
        huidigGeluid = 5;
        achtergrondgeluid5.loop();
    } else if (huidigGeluid == 5) {
      achtergrondgeluid5.stop();
        huidigGeluid = 4;
        achtergrondgeluid4.loop()
    } else if (huidigGeluid == 4) {
        achtergrondgeluid4.stop();
        huidigGeluid = 3;
        achtergrondgeluid3.loop();
    } else if (huidigGeluid == 3) {
      achtergrondgeluid3.stop();
        huidigGeluid = 2;
        achtergrondgeluid2.loop();
    } else {
      achtergrondgeluid2.stop();
        huidigGeluid = 1;
        achtergrondgeluid.loop();
    }
}
if (mouseX > 330 && mouseX < 380 &&
    mouseY > 365 && mouseY < 390) {

    resetSpel();
    spelgestart = false;
    speler1Kleur = "";
    speler2Kleur = "";
    gekozenKleur = "";
}


  checkWin(); 
}  {
  if (mouseX > 30 && mouseX < 110 &&
    mouseY > 80 && mouseY < 160) {

     if (speler1Kleur == "") {
       speler1Kleur = color(10, 84, 173);
       gekozenKleur = "blauw";

       } else if (speler2Kleur == "" && gekozenKleur != "blauw") {
        speler2Kleur = color(10, 84, 173);
        spelgestart = true;
    }
   }
}
if (mouseX > 130 && mouseX < 210 &&
    mouseY > 80 && mouseY < 160) {

    if (speler1Kleur == "") {
      speler1Kleur = color(209, 13, 13)
      gekozenKleur = "rood";

} else if (speler2Kleur == "" && gekozenKleur != "rood") {
speler2Kleur = color(209, 13, 13);
 spelgestart = true;
}
} 
if (mouseX > 230 && mouseX < 310 &&
    mouseY > 80 && mouseY < 160) {

    if (speler1Kleur == "") {
      speler1Kleur = color(255, 166, 0)
      gekozenKleur = "oranje";

} else if (speler2Kleur == "" && gekozenKleur != "oranje") {
speler2Kleur = color(255, 166, 0);
 spelgestart = true;
}
}
if (mouseX > 30 && mouseX < 110 &&
    mouseY > 180 && mouseY < 260) {

    if (speler1Kleur == "") {
      speler1Kleur = color(255, 255, 0)
      gekozenKleur = "geel";

} else if (speler2Kleur == "" && gekozenKleur != "geel") {
speler2Kleur = color(255, 255, 0);
 spelgestart = true;
}
}
if (mouseX > 130 && mouseX < 210 &&
    mouseY > 180 && mouseY < 260) {

    if (speler1Kleur == "") {
      speler1Kleur = color(96, 255, 0)
      gekozenKleur = "groen";

} else if (speler2Kleur == "" && gekozenKleur != "groen") {
speler2Kleur = color(96, 255, 0);
 spelgestart = true;
}
}
if (mouseX > 230 && mouseX < 310 &&
    mouseY > 180 && mouseY < 260) {

    if (speler1Kleur == "") {
      speler1Kleur = color(182, 84, 225)
      gekozenKleur = "paars";

} else if (speler2Kleur == "" && gekozenKleur != "paars") {
speler2Kleur = color(182, 84, 225);
 spelgestart = true;
}
}
if (mouseX > 30 && mouseX < 110 &&
    mouseY > 280 && mouseY < 360) {

    if (speler1Kleur == "") {
      speler1Kleur = color(251, 84, 225)
      gekozenKleur = "roze";

} else if (speler2Kleur == "" && gekozenKleur != "roze") {
speler2Kleur = color(251, 84, 225);
 spelgestart = true;
}
}
if (mouseX > 130 && mouseX < 210 &&
    mouseY > 280 && mouseY < 360) {

    if (speler1Kleur == "") {
      speler1Kleur = color(100, 251, 225)
      gekozenKleur = "cyaan";

} else if (speler2Kleur == "" && gekozenKleur != "cyaan") {
speler2Kleur = color(100, 251, 225);
 spelgestart = true;
}
}
if (mouseX > 230 && mouseX < 310 &&
    mouseY > 280 && mouseY < 360) {

    if (speler1Kleur == "") {
      speler1Kleur = color(100, 69, 0)
      gekozenKleur = "bruin";

} else if (speler2Kleur == "" && gekozenKleur != "bruin") {
speler2Kleur = color(100, 69, 0);
 spelgestart = true;
}
}
}


function checkWin() {
  // Horizontaal
  if (vakje1 == vakje2 && vakje2 == vakje3 && vakje1 != "white") {
    winnaar = vakje1;
  }
  if (vakje4 == vakje5 && vakje5 == vakje6 && vakje4 != "white") {
    winnaar = vakje4;
  }
  if (vakje7 == vakje8 && vakje8 == vakje9 && vakje7 != "white") {
    winnaar = vakje7;
  }
  // Verticaal
  if (vakje1 == vakje4 && vakje4 == vakje7 && vakje1 != "white") {
    winnaar = vakje1;
  }
  if (vakje2 == vakje5 && vakje5 == vakje8 && vakje2 != "white") {
    winnaar = vakje2;
  }
  if (vakje3 == vakje6 && vakje6 == vakje9 && vakje3 != "white") {
    winnaar = vakje3;
  }
  // Diagonaal
  if (vakje1 == vakje5 && vakje5 == vakje9 && vakje1 != "white") {
    winnaar = vakje1;
  }
  if (vakje3 == vakje5 && vakje5 == vakje7 && vakje3 != "white") {
    winnaar = vakje3;
  }
  // Gelijkspel
  if (winnaar == "" &&
    vakje1 != "white" &&
    vakje2 != "white" &&
    vakje3 != "white" &&
    vakje4 != "white" &&
    vakje5 != "white" &&
    vakje6 != "white" &&
    vakje7 != "white" &&
    vakje8 != "white" &&
    vakje9 != "white") {
    gelijkspel = true;
  }
}
function resetSpel() {
  vakje1 = "white";
  vakje2 = "white";
  vakje3 = "white";
  vakje4 = "white";
  vakje5 = "white";
  vakje6 = "white";
  vakje7 = "white";
  vakje8 = "white";
  vakje9 = "white";
  beurt = 1;
  winnaar = "";
  gelijkspel = false;
}