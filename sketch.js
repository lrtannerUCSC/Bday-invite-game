let balloons = [];
let partyRevealed = false;
let partyDetails = {
  date: "June 15, 2024",
  time: "3:00 PM",
  place: "123 Party Lane 🎉"
};

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Create 10 random balloons
  for (let i = 0; i < 10; i++) {
    balloons.push({
      x: random(width),
      y: random(height),
      size: random(30, 70),
      color: color(random(255), random(255), random(255)),
      popped: false
    });
  }
}

function draw() {
  background(220);
  
  // Draw balloons
  for (let balloon of balloons) {
    if (!balloon.popped) {
      fill(balloon.color);
      ellipse(balloon.x, balloon.y, balloon.size);
      line(balloon.x, balloon.y + balloon.size/2, balloon.x, balloon.y + balloon.size + 20);
    }
  }
  
  // If all balloons are popped, show party details
  if (balloons.every(b => b.popped)) {
    partyRevealed = true;
    fill(0);
    textSize(24);
    textAlign(CENTER);
    text("🎉 YOU'RE INVITED! 🎉", width/2, height/2 - 40);
    text(`Date: ${partyDetails.date}`, width/2, height/2);
    text(`Time: ${partyDetails.time}`, width/2, height/2 + 30);
    text(`Place: ${partyDetails.place}`, width/2, height/2 + 60);
  }
}

function mousePressed() {
  // Check if a balloon was clicked
  for (let balloon of balloons) {
    if (!balloon.popped && dist(mouseX, mouseY, balloon.x, balloon.y) < balloon.size/2) {
      balloon.popped = true;
      break;
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}