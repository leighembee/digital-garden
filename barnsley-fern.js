let x = 0;
let y = 0;

const drawPoint = () => {
  stroke(255);
  strokeWeight(2);
  const pX = map(x, -2.2, 2.7, 0, width);
  const pY = map(y, 0, 9.99, height, 0);
  point(pX, pY);
}

const nextPoint = () => {
  let nextX;
  let nextY;
  let randomNum = random(1)
  /* Transformation Possibilities */
  if (randomNum < 0.01) {
    // 1% probability
    nextX = 0;
    nextY = 0.16 * y;
  } else if (randomNum < 0.86) {
    // 85% probability
    nextX = 0.85 * x + 0.04 * y;
    nextY = -0.04 * x + 0.85 * y + 1.6;
  } else if (randomNum < 0.93) {
    // 7% probability
    nextX = 0.2 * x - 0.26 * y;
    nextY = 0.23 * x + 0.22 * y + 1.6;
  } else {
    // 7% probability
    nextX = -0.15 * x + 0.28 * y;
    nextY = 0.26 * x + 0.24 * y + 0.44;
  }
  x = nextX;
  y = nextY;
}

function drawBarnsleyFern() {
  // drawPoint();
  // nextPoint();
  let num = 0;
  while (num < 75) {
    drawPoint();
    nextPoint();
    num++
  }
}