let energy = 100;
let horny = 50;
let bladder = 0;
let hunger = 0;
let thirst = 0;
let health = 100;

function setup() {
  createCanvas(800, 600);

  let buttonEat = createButton("eat")
  buttonEat.position(100, 100);
  buttonEat.mousePressed(eatFunction);

  let buttonFun = createButton("Have sex")
  buttonFun.position(100, 130);
  buttonFun.mousePressed(funFunction);

  let buttonPee = createButton("peepee")
  buttonPee.position(100, 160);
  buttonPee.mousePressed(peeFunction);

  let buttonDrink = createButton("drink")
  buttonDrink.position(100, 190);
  buttonDrink.mousePressed(drinkFunction);

  let buttonMedicine = createButton("medicine")
  buttonMedicine.position(100, 220);
  buttonMedicine.mousePressed(medicineFunction);
}

function draw() {
  background('grey');

  energy = energy - 0.005
  if (energy <= 0) {
    energy = 0
  }
  fill("black")
  text("energy:" + round(energy), 50, 50)

  fill("white")
  rect(50, 60, 100, 20)
  fill("blue")
  rect(50,60, energy, 20)
  horny = horny + 0.05
  if (horny <= 0) {
    horny = 0
  }
  if (horny >= 100) {
    horny = 100
  }
  fill("black")
  text("horny:" + round(horny), 200, 50)

  fill("white")
  rect(200, 60, 100, 20)
  fill("pink")
  rect(200, 60, horny, 20)

  bladder = bladder + 0.05
  if (bladder >= 100) {
    bladder = 100
  }
  fill("black")
  text("bladder:" + round(bladder),350, 50 )

  fill("white")
  rect(350, 60, 100, 20)
  fill("yellow")
  rect(350, 60, bladder, 20)

  hunger = hunger + 0.04
  if (hunger >= 100) {
    hunger = 100
  }
  fill("black")
  text("hunger:" + round(hunger),500, 50)

  fill("white")
  rect(500, 60, 100, 20)
  fill("green")
  rect(500, 60, hunger, 20)

  thirst = thirst + 0.03
  if (thirst >100) {
    thirst = 100
  }
  fill("black")
  text("thirst:" + round(thirst),650, 50)

  fill("white")
  rect(650, 60, 100, 20)
  fill("cyan")
  rect(650, 60, thirst, 20)

  health = health - 0.005
  if (health <= 0) {
    health = 0
  }
  fill("black")
  text("health:" + round(health),650, 100)

  fill("white")
  rect(650, 110, 100, 20)
  fill("red")
  rect(650, 110, health, 20)
fill("white")
circle(400, 600, 300, 30)
circle(400, 400, 300, 40)
fill("black")
circle(350, 350, 50, 30)
circle(450, 350, 50, 30)
}
function eatFunction() {
  energy +=5
  hunger -=20
  if (energy >= 100) {
    energy = 100
  }
  if (hunger <= 0) {
    hunger = 0
  }
}

function funFunction() {
  if (energy >= 31) {
    horny -= 20
    energy -= 10
  }
  if (horny >= 100) {
    horny = 100
  }
}


function peeFunction() {
  bladder -=100
  if (bladder <= 0) {
    bladder = 0
  }
}
function drinkFunction() {
  thirst -= 20
  if (thirst <= 0) {
    thirst = 0
  }
}
function medicineFunction() {
  health += 10
  if (health >= 100) {
    health = 100
  }
}