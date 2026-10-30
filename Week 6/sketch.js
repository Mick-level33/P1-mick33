let energy = 100;
let horny = 0;
let bladder = 50;
let hunger = 50;
let thirst = 50;
let health = 100;
let money = 100;
let high = 0;
let relationship = 0;

let moe, slapen, woonkamer, horny2, horny3, toilet, ziekenhuis, medicine, sex;
let cigarette, cigar, vape, ferenc, ferencspecial, dood, suicide;

let etenPlaatjes = [];
let drinkenPlaatjes = [];
let workPlaatjes = [];
let spicyPlaatjes = [];

let gekozenEten, gekozenDrinken, gekozenWork, gekozenSpicy;

let isEating = false;
let isDrinking = false;
let isPeeing = false;
let isSleeping = false;
let isHospital = false;
let isMedicine = false;
let isSex = false;
let isWorking = false;
let isWatchingSpicy = false;
let isSmokingCigarette = false;
let isSmokingCigar = false;
let isVaping = false;
let isVisitingFerenc = false;
let isSpecialFerenc = false;

let isDead = false;
let isEndingLife = false;
let confirmEndLife = false;
let endLifeStart = 0;
let deathCause = "health";

let moreActionsOpen = false;

let actieStart = 0;
let actieTijd = 0;

let lastworktime = -20000;
let lastSexTime = -60000;
let lastSpicyTime = -30000;
let lastVisitFerencTime = -60000;
let lastSpecialFerencTime = -120000;

let lastSaveTime = 0;
let saveKey = "lifeSimulatorSave";

function preload() {
  moe = loadImage("/../Assets/moe.png");
  slapen = loadImage("/../Assets/slapen.png");
  woonkamer = loadImage("/../Assets/woonkamer.png");
  horny2 = loadImage("/../Assets/horny2.png");
  horny3 = loadImage("/../Assets/horny3.png");
  toilet = loadImage("/../Assets/toilet.png");
  ziekenhuis = loadImage("/../Assets/ziekenhuis.png");
  medicine = loadImage("/../Assets/medicine.png");
  sex = loadImage("/../Assets/sex.png");
  dood = loadImage("/../Assets/dood.png");
  suicide = loadImage("/../Assets/suicide.png");

  cigarette = loadImage("/../Assets/cigarette.png");
  cigar = loadImage("/../Assets/cigar.png");
  vape = loadImage("/../Assets/vape.png");
  ferenc = loadImage("/../Assets/ferenc.png");
  ferencspecial = loadImage("/../Assets/ferencspecial.png");

  etenPlaatjes = [
    loadImage("/../Assets/burger.png"),
    loadImage("/../Assets/pizza.png"),
    loadImage("/../Assets/noodles.png"),
    loadImage("/../Assets/salade.png"),
    loadImage("/../Assets/chips.png")
  ];

  drinkenPlaatjes = [
    loadImage("/../Assets/water.png"),
    loadImage("/../Assets/melk.png"),
    loadImage("/../Assets/liquid.png"),
    loadImage("/../Assets/vodka.png"),
    loadImage("/../Assets/bier.png"),
    loadImage("/../Assets/whiskey.png")
  ];

  workPlaatjes = [
    loadImage("/../Assets/work1.png"),
    loadImage("/../Assets/work2.png"),
    loadImage("/../Assets/work3.png"),
    loadImage("/../Assets/work4.png"),
    loadImage("/../Assets/work5.png"),
    loadImage("/../Assets/work6.png"),
    loadImage("/../Assets/work7.png"),
    loadImage("/../Assets/work8.png")
  ];

  spicyPlaatjes = [
    loadImage("/../Assets/spicy1.png"),
    loadImage("/../Assets/spicy2.png")
  ];
}

function setup() {
  createCanvas(800, 600);
  textFont("Arial");

  laadSpel();
}

function draw() {
  if (isEndingLife) {
    image(suicide, 0, 0, 800, 600);

    if (millis() - endLifeStart >= 5000) {
      isEndingLife = false;
      isDead = true;
      health = 0;
      deathCause = "endLife";
      slaSpelOp();
    }

    return;
  }

  if (!isDead && !confirmEndLife) {
    updateStats();

    if (health <= 0) {
      health = 0;
      isDead = true;
      deathCause = "health";
      slaSpelOp();
    } else {
      checkTimer();
    }
  }

  if (isDead) {
    tekenGameOver();
  } else {
    tekenAchtergrond();

    if (!isBezig()) {
      tekenInterface();
    }

    if (confirmEndLife) {
      tekenEndLifeBevestiging();
    }
  }

  if (millis() - lastSaveTime >= 1000) {
    slaSpelOp();
    lastSaveTime = millis();
  }
}

function updateStats() {
  let tijd = deltaTime / 1000;

  if (tijd > 0.1) {
    tijd = 0.1;
  }

  energy -= (100 / 900) * tijd;
  hunger += (100 / 720) * tijd;
  thirst += (100 / 480) * tijd;
  bladder += (100 / 600) * tijd;
  horny += (100 / 1200) * tijd;
  high -= (100 / 300) * tijd;

  if (hunger >= 90) health -= 0.15 * tijd;
  if (thirst >= 85) health -= 0.25 * tijd;
  if (energy <= 0) health -= 0.1 * tijd;

  if (hunger < 50 && thirst < 50 && energy > 50) {
    health += 0.05 * tijd;
  }

  if (hunger >= 80) energy -= 0.05 * tijd;
  if (thirst >= 80) energy -= 0.08 * tijd;
  if (health <= 30) energy -= 0.1 * tijd;
  if (energy <= 20) horny -= 0.04 * tijd;

  energy = constrain(energy, 0, 100);
  horny = constrain(horny, 0, 100);
  bladder = constrain(bladder, 0, 100);
  hunger = constrain(hunger, 0, 100);
  thirst = constrain(thirst, 0, 100);
  health = constrain(health, 0, 100);
  high = constrain(high, 0, 100);
  relationship = constrain(relationship, 0, 100);
}

function slaSpelOp() {
  let saveData = {
    energy: energy,
    horny: horny,
    bladder: bladder,
    hunger: hunger,
    thirst: thirst,
    health: health,
    money: money,
    high: high,
    relationship: relationship,

    isDead: isDead,
    deathCause: deathCause,

    workCooldown: max(0, 20000 - (millis() - lastworktime)),
    sexCooldown: max(0, 60000 - (millis() - lastSexTime)),
    spicyCooldown: max(0, 30000 - (millis() - lastSpicyTime)),
    visitCooldown: max(0, 60000 - (millis() - lastVisitFerencTime)),
    specialCooldown: max(0, 120000 - (millis() - lastSpecialFerencTime))
  };

  try {
    localStorage.setItem(saveKey, JSON.stringify(saveData));
  } catch (error) {
    console.log("Opslaan mislukt:", error);
  }
}

function laadSpel() {
  let opgeslagenData;

  try {
    opgeslagenData = localStorage.getItem(saveKey);
  } catch (error) {
    console.log("Laden mislukt:", error);
    return;
  }

  if (!opgeslagenData) return;

  try {
    let data = JSON.parse(opgeslagenData);

    if (typeof data.energy === "number") energy = constrain(data.energy, 0, 100);
    if (typeof data.horny === "number") horny = constrain(data.horny, 0, 100);
    if (typeof data.bladder === "number") bladder = constrain(data.bladder, 0, 100);
    if (typeof data.hunger === "number") hunger = constrain(data.hunger, 0, 100);
    if (typeof data.thirst === "number") thirst = constrain(data.thirst, 0, 100);
    if (typeof data.health === "number") health = constrain(data.health, 0, 100);
    if (typeof data.money === "number") money = max(0, data.money);
    if (typeof data.high === "number") high = constrain(data.high, 0, 100);
    if (typeof data.relationship === "number") relationship = constrain(data.relationship, 0, 100);

    isDead = data.isDead === true || health <= 0;

    if (data.deathCause === "endLife") {
      deathCause = "endLife";
    } else {
      deathCause = "health";
    }

    lastworktime = millis() - (20000 - constrain(data.workCooldown || 0, 0, 20000));
    lastSexTime = millis() - (60000 - constrain(data.sexCooldown || 0, 0, 60000));
    lastSpicyTime = millis() - (30000 - constrain(data.spicyCooldown || 0, 0, 30000));
    lastVisitFerencTime = millis() - (60000 - constrain(data.visitCooldown || 0, 0, 60000));
    lastSpecialFerencTime = millis() - (120000 - constrain(data.specialCooldown || 0, 0, 120000));

    isEndingLife = false;
    confirmEndLife = false;
    moreActionsOpen = false;

  } catch (error) {
    console.log("Opgeslagen gegevens konden niet worden geladen:", error);
  }
}

function tekenAchtergrond() {
  background(20);

  if (isEating) image(gekozenEten, 0, 0, 800, 600);
  else if (isDrinking) image(gekozenDrinken, 0, 0, 800, 600);
  else if (isPeeing) image(toilet, 0, 0, 800, 600);
  else if (isSleeping) image(slapen, 0, 0, 800, 600);
  else if (isHospital) image(ziekenhuis, 0, 0, 800, 600);
  else if (isMedicine) image(medicine, 0, 0, 800, 600);
  else if (isSex) image(sex, 0, 0, 800, 600);
  else if (isWorking) image(gekozenWork, 0, 0, 800, 600);
  else if (isWatchingSpicy) image(gekozenSpicy, 0, 0, 800, 600);
  else if (isSmokingCigarette) image(cigarette, 0, 0, 800, 600);
  else if (isSmokingCigar) image(cigar, 0, 0, 800, 600);
  else if (isVaping) image(vape, 0, 0, 800, 600);
  else if (isVisitingFerenc) image(ferenc, 0, 0, 800, 600);
  else if (isSpecialFerenc) image(ferencspecial, 0, 0, 800, 600);
  else if (energy <= 20) image(moe, 0, 0, 800, 600);
  else if (horny >= 67) image(horny3, 0, 0, 800, 600);
  else if (horny >= 34) image(horny2, 0, 0, 800, 600);
  else image(woonkamer, 0, 0, 800, 600);
}

function tekenGameOver() {
  background(0);

  if (deathCause == "endLife") {
    image(suicide, 0, 0, 800, 600);
  } else {
    image(dood, 0, 0, 800, 600);
  }

  fill(0, 0, 0, 160);
  noStroke();
  rect(0, 0, 800, 600);

  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  textSize(65);

  fill(0);
  text("GAME OVER", 403, 204);

  fill(255, 40, 40);
  text("GAME OVER", 400, 200);

  textStyle(NORMAL);
  textSize(18);
  fill(255);
  text("YOUR SMILEY HAS DIED", 400, 270);

  tekenKnop("RESTART", 310, 330, 180, 50);

  textAlign(LEFT, BASELINE);
}

function tekenEndLifeBevestiging() {
  fill(0, 0, 0, 200);
  noStroke();
  rect(0, 0, 800, 600);

  tekenPaneel(225, 200, 350, 200);

  fill(255);
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  textSize(22);
  text("END LIFE?", 400, 245);

  textStyle(NORMAL);
  textSize(14);
  text("Are you sure you want to end this run?", 400, 290);

  tekenKnop("YES", 255, 330, 130, 40);
  tekenKnop("CANCEL", 415, 330, 130, 40);

  textAlign(LEFT, BASELINE);
}

function restartGame() {
  energy = 100;
  horny = 0;
  bladder = 50;
  hunger = 50;
  thirst = 50;
  health = 100;
  money = 100;
  high = 0;
  relationship = 0;

  isEating = false;
  isDrinking = false;
  isPeeing = false;
  isSleeping = false;
  isHospital = false;
  isMedicine = false;
  isSex = false;
  isWorking = false;
  isWatchingSpicy = false;
  isSmokingCigarette = false;
  isSmokingCigar = false;
  isVaping = false;
  isVisitingFerenc = false;
  isSpecialFerenc = false;

  isDead = false;
  isEndingLife = false;
  confirmEndLife = false;
  deathCause = "health";

  moreActionsOpen = false;

  actieStart = 0;
  actieTijd = 0;
  endLifeStart = 0;

  lastworktime = millis() - 20000;
  lastSexTime = millis() - 60000;
  lastSpicyTime = millis() - 30000;
  lastVisitFerencTime = millis() - 60000;
  lastSpecialFerencTime = millis() - 120000;

  slaSpelOp();
  lastSaveTime = millis();
}

function tekenInterface() {
  tekenPaneel(535, 10, 250, 145);

  fill(255);
  textSize(12);
  textStyle(BOLD);
  text("PLAYER STATUS", 548, 29);
  textStyle(NORMAL);

  stroke(40, 130, 210);
  line(548, 35, 772, 35);
  noStroke();

  tekenStat("ENERGY", energy, 548, 52, 255, 215, 50, false);
  tekenStat("HUNGER", hunger, 665, 52, 255, 150, 40, true);
  tekenStat("HEALTH", health, 548, 92, 255, 65, 95, false);
  tekenStat("THIRST", thirst, 665, 92, 40, 200, 255, true);
  tekenStat("HORNY", horny, 548, 132, 255, 75, 180, true);
  tekenStat("BLADDER", bladder, 665, 132, 175, 100, 255, true);

  if (high > 0) {
    tekenPaneel(535, 165, 250, 52);
    tekenStat("HIGH", high, 548, 185, 140, 255, 120, true);
  }

  tekenPaneel(10, 10, 145, 55);

  fill(130, 255, 170);
  textSize(10);
  text("MONEY", 22, 28);

  fill(255);
  textSize(20);
  textStyle(BOLD);
  text("€ " + round(money), 22, 53);
  textStyle(NORMAL);

  tekenPaneel(10, 390, 190, 200);

  fill(255);
  textSize(12);
  textStyle(BOLD);
  text("ACTIONS", 20, 408);
  textStyle(NORMAL);

  tekenActieKnop("EAT", 20, 416, 80, 27, money >= 10 && hunger >= 20);
  tekenActieKnop("DRINK", 110, 416, 80, 27, money >= 5 && thirst >= 15);
  tekenActieKnop("PEE", 20, 451, 80, 27, bladder > 0);
  tekenActieKnop("SLEEP", 110, 451, 80, 27, energy <= 10);
  tekenActieKnop("MEDICINE", 20, 486, 80, 27, health < 100);
  tekenActieKnop("HOSPITAL", 110, 486, 80, 27, health <= 10);

  tekenActieKnop("WORK", 20, 521, 80, 27, energy >= 20, lastworktime, 20000);
  tekenActieKnop("HAVE SEX", 110, 521, 80, 27, energy >= 31 && horny > 0, lastSexTime, 60000);

  tekenKnop("MORE ACTIONS", 20, 556, 170, 27);

  if (moreActionsOpen) {
    tekenPaneel(210, 270, 190, 320);

    fill(255);
    textSize(12);
    textStyle(BOLD);
    text("MORE ACTIONS", 220, 288);
    textStyle(NORMAL);

    tekenActieKnop("WATCH SPICY", 220, 296, 170, 27, horny < 100, lastSpicyTime, 30000);

    tekenActieKnop("CIGARETTE", 220, 331, 80, 27, money >= 5 && high < 100 && health > 0);
    tekenActieKnop("CIGAR", 310, 331, 80, 27, money >= 15 && high < 100 && health > 0);
    tekenActieKnop("VAPE", 220, 366, 170, 27, money >= 10 && high < 100 && health > 0);

    tekenActieKnop(
      "VISIT FERENC",
      220, 401, 170, 27,
      relationship < 100 || high < 100,
      lastVisitFerencTime, 60000
    );

    tekenActieKnop(
      "SPECIAL FERENC",
      220, 436, 170, 27,
      relationship >= 100 && horny > 0,
      lastSpecialFerencTime, 120000
    );

    tekenKnop("END LIFE", 220, 471, 170, 27);

    fill(255);
    textSize(10);
    text("RELATIONSHIP: " + relationship + "/100", 220, 525);

    fill(35, 45, 65);
    rect(220, 532, 170, 8, 4);

    fill(255, 80, 130);
    rect(220, 532, relationship * 1.7, 8, 4);

    tekenKnop("CLOSE", 310, 556, 80, 27);
  }
}

function tekenPaneel(x, y, breedte, hoogte) {
  noStroke();

  fill(20, 110, 200, 35);
  rect(x - 3, y - 3, breedte + 6, hoogte + 6, 17);

  fill(10, 17, 30, 225);
  stroke(55, 125, 190);
  strokeWeight(1);
  rect(x, y, breedte, hoogte, 14);

  noStroke();
}

function tekenStat(naam, waarde, x, y, rood, groen, blauw, omgekeerd) {
  fill(255);
  textSize(9);
  textStyle(BOLD);
  text(naam, x, y);
  textStyle(NORMAL);

  textAlign(RIGHT);
  text(round(waarde) + "%", x + 100, y);
  textAlign(LEFT);

  fill(35, 45, 65);
  noStroke();
  rect(x, y + 5, 100, 9, 5);

  if (!omgekeerd && waarde <= 20) {
    rood = 255;
    groen = 50;
    blauw = 50;
  }

  if (omgekeerd && waarde >= 85) {
    rood = 255;
    groen = 50;
    blauw = 50;
  }

  fill(rood, groen, blauw);
  rect(x, y + 5, waarde, 9, 5);
}

function tekenKnop(naam, x, y, breedte, hoogte) {
  let hover = mouseX >= x && mouseX <= x + breedte &&
              mouseY >= y && mouseY <= y + hoogte;

  if (hover) fill(30, 105, 175);
  else fill(25, 38, 58);

  stroke(55, 155, 255);
  strokeWeight(1);
  rect(x, y, breedte, hoogte, 8);

  noStroke();
  fill(255);
  textSize(11);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  text(naam, x + breedte / 2, y + hoogte / 2);

  textAlign(LEFT, BASELINE);
  textStyle(NORMAL);
}

function tekenActieKnop(naam, x, y, breedte, hoogte, beschikbaar, start, duur) {
  tekenKnop(naam, x, y, breedte, hoogte);

  if (duur && millis() - start < duur) {
    let over = ceil((duur - (millis() - start)) / 1000);
    tekenVergrendeld(x, y, breedte, hoogte, over + "s");
  }
  else if (!beschikbaar) {
    tekenVergrendeld(x, y, breedte, hoogte, naam);
  }
}

function tekenVergrendeld(x, y, breedte, hoogte, tekst) {
  fill(15, 20, 30, 235);
  noStroke();
  rect(x, y, breedte, hoogte, 8);

  fill(125);
  textSize(11);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  text(tekst, x + breedte / 2, y + hoogte / 2);

  textAlign(LEFT, BASELINE);
  textStyle(NORMAL);
}

function mousePressed() {
  if (isEndingLife) return;

  if (isDead) {
    if (knopGeklikt(310, 330, 180, 50)) {
      restartGame();
    }
    return;
  }

  if (confirmEndLife) {
    if (knopGeklikt(255, 330, 130, 40)) {
      confirmEndLife = false;
      isEndingLife = true;
      endLifeStart = millis();
    }
    else if (knopGeklikt(415, 330, 130, 40)) {
      confirmEndLife = false;
    }
    return;
  }

  if (isBezig()) return;

  if (knopGeklikt(20, 556, 170, 27)) {
    moreActionsOpen = !moreActionsOpen;
  }
  else if (moreActionsOpen && knopGeklikt(310, 556, 80, 27)) {
    moreActionsOpen = false;
  }
  else if (moreActionsOpen && knopGeklikt(220, 296, 170, 27)) {
    watchSpicyFunction();
  }
  else if (moreActionsOpen && knopGeklikt(220, 331, 80, 27)) {
    cigaretteFunction();
  }
  else if (moreActionsOpen && knopGeklikt(310, 331, 80, 27)) {
    cigarFunction();
  }
  else if (moreActionsOpen && knopGeklikt(220, 366, 170, 27)) {
    vapeFunction();
  }
  else if (moreActionsOpen && knopGeklikt(220, 401, 170, 27)) {
    visitFerencFunction();
  }
  else if (moreActionsOpen && knopGeklikt(220, 436, 170, 27)) {
    specialFerencFunction();
  }
  else if (moreActionsOpen && knopGeklikt(220, 471, 170, 27)) {
    confirmEndLife = true;
  }
  else if (knopGeklikt(20, 416, 80, 27)) {
    eatFunction();
  }
  else if (knopGeklikt(110, 416, 80, 27)) {
    drinkFunction();
  }
  else if (knopGeklikt(20, 451, 80, 27)) {
    peeFunction();
  }
  else if (knopGeklikt(110, 451, 80, 27)) {
    sleepFunction();
  }
  else if (knopGeklikt(20, 486, 80, 27)) {
    medicineFunction();
  }
  else if (knopGeklikt(110, 486, 80, 27)) {
    hospitalFunction();
  }
  else if (knopGeklikt(20, 521, 80, 27)) {
    workFunction();
  }
  else if (knopGeklikt(110, 521, 80, 27)) {
    funFunction();
  }
}

function knopGeklikt(x, y, breedte, hoogte) {
  return mouseX >= x && mouseX <= x + breedte &&
         mouseY >= y && mouseY <= y + hoogte;
}

function isBezig() {
  return isEating || isDrinking || isPeeing || isSleeping ||
         isHospital || isMedicine || isSex || isWorking ||
         isWatchingSpicy || isSmokingCigarette || isSmokingCigar ||
         isVaping || isVisitingFerenc || isSpecialFerenc;
}

function startActie(tijd) {
  actieStart = millis();
  actieTijd = tijd;
}

function checkTimer() {
  if (isBezig() && millis() - actieStart >= actieTijd) {
    isEating = false;
    isDrinking = false;
    isPeeing = false;
    isSleeping = false;
    isMedicine = false;
    isSex = false;
    isWorking = false;
    isWatchingSpicy = false;
    isSmokingCigarette = false;
    isSmokingCigar = false;
    isVaping = false;
    isVisitingFerenc = false;
    isSpecialFerenc = false;

    if (isHospital) {
      health = 100;
      isHospital = false;
    }
  }
}

function eatFunction() {
  if (money >= 10 && hunger >= 20 && !isBezig()) {
    money -= 10;
    hunger -= 20;
    energy = constrain(energy + 5, 0, 100);

    gekozenEten = random(etenPlaatjes);
    isEating = true;
    startActie(3000);
  }
}

function drinkFunction() {
  if (money >= 5 && thirst >= 15 && !isBezig()) {
    money -= 5;
    thirst -= 15;
    bladder = constrain(bladder + 20, 0, 100);

    gekozenDrinken = random(drinkenPlaatjes);
    isDrinking = true;
    startActie(3000);
  }
}

function peeFunction() {
  if (bladder > 0 && !isBezig()) {
    bladder = 0;
    isPeeing = true;
    startActie(5000);
  }
}

function sleepFunction() {
  if (energy <= 10 && !isBezig()) {
    energy = 100;
    high = 0;
    isSleeping = true;
    startActie(5000);
  }
}

function medicineFunction() {
  if (health < 100 && !isBezig()) {
    health = constrain(health + 10, 0, 100);
    isMedicine = true;
    startActie(3000);
  }
}

function hospitalFunction() {
  if (health <= 10 && !isBezig()) {
    isHospital = true;
    startActie(5000);
  }
}

function workFunction() {
  if (energy >= 20 && millis() - lastworktime >= 20000 && !isBezig()) {
    energy -= 15;
    money += 25;
    hunger = constrain(hunger + 10, 0, 100);
    thirst = constrain(thirst + 15, 0, 100);

    gekozenWork = random(workPlaatjes);
    isWorking = true;
    lastworktime = millis();
    startActie(5000);
  }
}

function funFunction() {
  if (energy >= 31 && horny > 0 &&
      millis() - lastSexTime >= 60000 && !isBezig()) {

    horny = constrain(horny - 20, 0, 100);
    energy -= 10;

    isSex = true;
    lastSexTime = millis();
    startActie(5000);
  }
}

function watchSpicyFunction() {
  if (horny < 100 && millis() - lastSpicyTime >= 30000 && !isBezig()) {
    let nummer = floor(random(2));

    gekozenSpicy = spicyPlaatjes[nummer];

    if (nummer == 0) horny += 10;
    else horny += 30;

    horny = constrain(horny, 0, 100);

    isWatchingSpicy = true;
    lastSpicyTime = millis();
    startActie(5000);
  }
}

function cigaretteFunction() {
  if (money >= 5 && high < 100 && health > 0 && !isBezig()) {
    money -= 5;
    high = constrain(high + 10, 0, 100);
    health = constrain(health - 3, 0, 100);
    energy = constrain(energy + 2, 0, 100);

    isSmokingCigarette = true;
    startActie(5000);
  }
}

function cigarFunction() {
  if (money >= 15 && high < 100 && health > 0 && !isBezig()) {
    money -= 15;
    high = constrain(high + 15, 0, 100);
    health = constrain(health - 5, 0, 100);
    energy = constrain(energy + 3, 0, 100);

    isSmokingCigar = true;
    startActie(5000);
  }
}

function vapeFunction() {
  if (money >= 10 && high < 100 && health > 0 && !isBezig()) {
    money -= 10;
    high = constrain(high + 8, 0, 100);
    health = constrain(health - 2, 0, 100);
    energy = constrain(energy + 1, 0, 100);

    isVaping = true;
    startActie(5000);
  }
}

function visitFerencFunction() {
  if ((relationship < 100 || high < 100) &&
      millis() - lastVisitFerencTime >= 60000 && !isBezig()) {

    high = constrain(high + 30, 0, 100);
    health = constrain(health - 5, 0, 100);
    energy = constrain(energy - 5, 0, 100);
    relationship = constrain(relationship + 10, 0, 100);

    isVisitingFerenc = true;
    lastVisitFerencTime = millis();
    startActie(5000);
  }
}

function specialFerencFunction() {
  if (relationship >= 100 && horny > 0 &&
      millis() - lastSpecialFerencTime >= 120000 && !isBezig()) {

    horny = constrain(horny - 30, 0, 100);
    health = constrain(health + 5, 0, 100);
    energy = constrain(energy - 10, 0, 100);

    isSpecialFerenc = true;
    lastSpecialFerencTime = millis();
    startActie(5000);
  }
}

window.addEventListener("pagehide", function() {
  slaSpelOp();
});