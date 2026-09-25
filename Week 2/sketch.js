let autoX = 0
autoX+=-150
let autoSpeed = 3

let auto2X = 0
auto2X+= 150
let auto2Speed = 5

let cloud = 0
cloud+= -150
let cloudspeed = 1

let cloud2 = 0
cloud2+= -150
let cloud2speed = 2

let sun = 0
sun+= -100
let sunspeed = 1

let light = 2

let personY;

function setup() {
  createCanvas(800, 600);
}



function draw() {
  background('skyblue');
  

// road
strokeWeight(1)
stroke('black')
fill('grey')
rect(0,400,800,200)

if (light === 0)
{
  autoSpeed = 0
  auto2Speed = 0
} else if (light === 1)
{
  autoSpeed = 1.5
  auto2Speed = 2.5
}
else
{
  autoSpeed = 3
  auto2Speed = 5
}
autoX = autoX + autoSpeed
if (autoX > 850)
{
  autoX = -150
}

auto2X = auto2X - auto2Speed
if (auto2X < -150)
{
  auto2X = 850
}

cloud = cloud - cloudspeed
if (cloud < -150)
{
  cloud = 900
}

cloud2 = cloud2 - cloud2speed
if (cloud2 < -390)
{
  cloud2 = 850
}

sun = sun + sunspeed
if (sun > 830)
{
  sun = -100
}
noStroke()
fill('white')
rect(50,490,100,20)
rect(200,490,100,20)
rect(350,490,100,20)
rect(500,490,100,20)
rect(650,490,100,20)

rect(500,530,100,20)
rect(500,570,100,20)
rect(500,450,100,20)
rect(500,410,100,20)

fill('black')
circle()

// auto
noStroke()
fill('yellow')
let autoY = 540;
rect(autoX,autoY,150,30)
rect(autoX,autoY-20,100,20)
fill('black')
circle(autoX+20, autoY+30, 30)
circle(autoX+130, autoY+30, 30)


// auto2
noStroke()
fill('pink')
let autoY2 = 440;
rect(auto2X, autoY2, 150, 30 )
rect(auto2X+50,autoY2-20,100,20)
fill('black')
circle(auto2X+20, autoY2+30, 30)
circle(auto2X+130, autoY2+30, 30)




// mountains
strokeWeight(1)
stroke('black')
fill('grey')
triangle(0, 400, 200, 100, 400, 400)
triangle(200, 400, 400, 150, 600, 400);
  fill("darkgray");
  triangle(400, 400, 600, 100, 800, 400);

  // tree
fill('brown')
rect(700,300,30,100)
fill('green')
ellipse(714,280,100)

  // tree
fill('brown')
rect(500,300,30,100)
fill('green')
ellipse(514,280,100)

  // tree
fill('brown')
rect(300,300,30,100)
fill('green')
ellipse(314,280,100)

  // tree
fill('brown')
rect(100,300,30,100)
fill('green')
ellipse(114,280,100)

  // tree
fill('brown')
rect(200,500,30,100)
fill('green')
ellipse(213,480,100)



// sun
noStroke()
fill('yellow')
circle(sun, 50,70)

// cloud
fill('white')
ellipse(cloud, 90, 150, 40)
ellipse(cloud, 100, 200, 30)

// cloud2
ellipse(cloud2+300, 110, 150, 40)
ellipse(cloud2+300, 120, 200, 30)

// stoplicht
fill(120);
rect(600,255,50,120);
rect(610,360,30,50);
if (light === 0) {
  stroke(255,0,0);
  strokeWeight(2);
  fill(220,0,0);
} else {
  noStroke();
  fill(140,0,0);
}
circle(625,280,30);
if (light === 1) {
  stroke(255,127,0);
  strokeWeight(2);
  fill(220,110,0);
} else {
  noStroke();
  fill(140,70,0);
}
circle(625,315,30);
if (light === 2) {
  stroke(0,255,0);
  strokeWeight(2);
  fill(0,220,0);
} else {
  noStroke();
  fill(0,140,0);
}
circle(625,350,30);
}

function keyPressed() {
  if (key === 'Enter') {
    if (light === 0) {
      light = 2;
    } else {
      light--
    }
  }
}