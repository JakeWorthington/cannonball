var interval = 10;
var g = 9.81;

function loop() {
    cannonBall.move(interval / 1000);
    draw();
    console.log(cannonBall.x, cannonBall.y, cannonBall.speed, cannonBall.direction);
    if (cannonBall.y > 0) {
        setTimeout(loop, interval)
    }
}
var cannonBall = {
    speed: 100,
    direction: 0.25 * Math.PI,
    x: 0,
    y: 0,
    move: function (time) {
        // Caclulate new position due to existing velocity
        var distanceTravelled = this.speed * time;
        var deltaX = Math.cos(this.direction) * distanceTravelled;
        var deltaY = Math.sin(this.direction) * distanceTravelled;

        // Calculate gravity's impact on position
        var gDeltaY = 0.5 * g * time * time;
        deltaY = deltaY - gDeltaY;

        // Calculate new velocity
        var gravityVelocity = {
            x: 0,
            y: -g * time
        };
        var currentVelocity = {
            x: Math.cos(this.direction) * this.speed,
            y: Math.sin(this.direction) * this.speed
        }
        var newVelocity = addVectors(gravityVelocity, currentVelocity);
        var newSpeed = Math.sqrt(Math.pow(newVelocity.x, 2) + Math.pow(newVelocity.y, 2));
        var newDirection = Math.atan2(newVelocity.y, newVelocity.x);

        // Update cannonbal with new data
        this.x = this.x + deltaX;
        this.y = this.y + deltaY;
        this.speed = newSpeed;
        this.direction = newDirection;
    }
};


//drawing below

var drawingSizeX = 400;
var drawingSizeY = 400;
var realWidth = 1500;
var ratio = drawingSizeX / realWidth;
var drawing = SVG('drawing').size(drawingSizeX, drawingSizeY);
var rect = drawing.rect(drawingSizeX, drawingSizeY).attr({ fill: '#f06' });
var circle = drawing.circle(10);
circle.cx(cannonBall.x * ratio);
circle.cy(drawingSizeY - cannonBall.y * ratio);

function draw() {
    var newX = cannonBall.x * ratio;
    var newY = drawingSizeY - cannonBall.y * ratio;
    var line = drawing.line(circle.cx(), circle.cy(), newX, newY).stroke({ width: 1 });
    circle.cx(newX);
    circle.cy(newY);
}

//start running
loop();


// Utility functions
function addVectors(vectorA, vectorB) {
    return {
        x: vectorA.x + vectorB.x,
        y: vectorA.y + vectorB.y
    };
}