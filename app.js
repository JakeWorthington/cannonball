function loop() {
    cannonBall.move();
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
loop ();