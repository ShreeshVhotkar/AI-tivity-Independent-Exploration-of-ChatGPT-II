let redXPos = 25;
let redYPos = 100;
let blueXPos = 25;
let blueYPos = 200;
let redScore = 0;
let blueScore = 0;

function setup() {
    createCanvas(800, 300);
    rectMode(CENTER);
    strokeWeight(3);
}

function draw() {
    background(0, 200, 0);

    // move both balls random distances
    redXPos += random(-1, 5);
    redYPos += random(-0.5, 0.5);
    blueXPos += random(-1, 5);
    blueYPos += random(-0.5, 0.5);

    // show scores
    textSize(60);
    fill(255, 0, 0);
    text(redScore, 700, 100); // Changed x-coordinate from 800 to 700
    fill(0, 0, 255);
    text(blueScore, 700, 225); // Changed x-coordinate from 800 to 700

    // show finish line
    line(600, 0, 600, 300); // Added a comma between the second and third arguments

    // red ball
    fill(255, 0, 0);
    ellipse(redXPos, redYPos, 50, 50); // Swapped the positions of redXPos and 50, and redYPos and 50
    
    // blue ball
    fill(0, 0, 255);
    ellipse(blueXPos, blueYPos, 50, 50); // Swapped the positions of blueXPos and 50, and blueYPos and 50

    // crossed finish line
    if (redXPos >= 575 || blueXPos >= 575) { // Changed the condition from '<' to '>='
        if (redXPos > blueXPos) {
            // red wins
            redScore += 1;
        } else if (blueXPos > redXPos) {
            // blue wins
            blueScore += 1; // Changed from 'blueScore = 1' to 'blueScore += 1'
        }
        // reset positions
        redXPos = 25;
        redYPos = 100;
        blueXPos = 25;
        blueYPos = 200;
    }
}