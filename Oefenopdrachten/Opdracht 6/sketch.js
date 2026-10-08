function setup() {
  createCanvas(400, 400);

  // Use RGB color with values in the range 0-100.
  colorMode(RGB, 100);

  for (let x = 0; x < 100; x += 1) {
    for (let y = 0; y < 100; y += 1) {
      stroke(x, y, 0);
      point(x, y);
    }
  }

  describe(
    'A diagonal green to red gradient from bottom-left to top-right with shading transitioning to black at top-left corner.'
  );
}



// function setup() {
//   createCanvas(100, 100);
//    colorMode(RGB, 100);

//   for (let x = 0; x < 100; x += 1) {
//     for (let y = 0; y < 100; y += 1) {
//       stroke(x, y, 0);
//       point(x, y);
//     }
//   }
// }



// function draw() {
//     background(220);
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
      ellipse(i * 50 + 25, j * 50 + 25, 40, 40)
  }
}






// }  
// // let kleuren = ['red', 'green', 'blue', 'purple', 'yellow']
// // let x = 10
// // let y = 20


// //   for (let i = 0; kleuren.length; i++){
// //     fill(kleuren[i])
// //     text(kleuren[i], x, y)
  
// //       y = y + 20
// //   }


// // }
