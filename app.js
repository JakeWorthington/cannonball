var interval = 100;

function loop() {
    cannonBall.move(interval / 1000);
    draw();
    console.log (cannonBall.x,cannonBall.y);
    setTimeout(loop, interval)

}
var cannonBall = {
    speed : 10, 
   direction : 0.1 * Math.PI,
   x:0,
    y:100,
    move: function (time){
        var distanceTravelled = this.speed * time; 
        var deltaX = Math.cos(this.direction) * distanceTravelled;
        var deltaY = Math.sin(this.direction) * distanceTravelled;
        this.x = this.x + deltaX; 
        this.y = this.y + deltaY;
    }
} ;


//drawing below

var drawingSizeX = 400;
var drawingSizeY = 400;
var realWidth = 1000;
var ratio = drawingSizeX / realWidth;
var drawing = SVG('drawing').size(drawingSizeX, drawingSizeY);
var rect = drawing.rect(drawingSizeX, drawingSizeY).attr({ fill: '#f06' });
var circle = drawing.circle(10);

function draw (){
    var newX = cannonBall.x * ratio;
    var newY = drawingSizeY - cannonBall.y * ratio;
     circle.x(newX);
  circle.y(newY);
}

//start running
loop();