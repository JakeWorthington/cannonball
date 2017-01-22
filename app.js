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
        this.x++;
        this.y++;
    }
} ;


//drawing below

var drawingSizeX = 400;
var drawingSizeY = 400;
var drawing = SVG('drawing').size(drawingSizeX, drawingSizeY);
var rect = drawing.rect(drawingSizeX, drawingSizeY).attr({ fill: '#f06' });
var circle = drawing.circle(10);

function draw (){
     circle.x(cannonBall.x);
  circle.y(cannonBall.y);
}

//start running
loop();