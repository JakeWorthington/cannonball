function loop() {
    cannonBall.move();
    draw();
    console.log (cannonBall.x,cannonBall.y);
    setTimeout(loop, 1000)

}
var cannonBall = {
    x:0,
    y:0,
    move: function (){
        this.x = this.x + 10;
        this.y = this.y + 10;
    }
} ;


//drawing below

var drawingSizeX = 400;
var drawingSizeY = 400;
var realWidth = 1000;
var ratio = realWidth / drawingSizeX;
var drawing = SVG('drawing').size(drawingSizeX, drawingSizeY);
var rect = drawing.rect(drawingSizeX, drawingSizeY).attr({ fill: '#f06' });
var circle = drawing.circle(10);

function draw (){
     circle.x(cannonBall.x * ratio);
  circle.y(drawingSizeY - cannonBall.y * ratio);
}

//start running
loop();