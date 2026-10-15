let energy = 100;
let horny = 50;
let bladder = 0;

function setup() {
  createCanvas(800, 600);

  let buttonEat = createButton("bananen")
  buttonEat.position(100, 100);
  buttonEat.mousePressed(eatFunction);

  let buttonFun = createButton("Have sex")
  buttonFun.position(100, 130);
  buttonFun.mousePressed(funFunction);

  let buttonPee = createButton("zeiken")
  buttonPee.position(100, 160);
  buttonPee.mousePressed(peeFunction);
}

function draw() {
  background('grey');

  energy = energy - 0.05
  if (energy <= 0) {
    energy = 0
  }
  fill("black")
  text("energy:" + round(energy), 50, 50)

  fill("white")
  rect(50, 60, 100, 20)
  fill("green")
  rect(50,60, energy, 20)
  horny = horny + 0.005
  if (horny <= 0) {
    horny = 0
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
}

function eatFunction() {
  energy +=20
  if (energy >= 100) {
    energy = 100
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