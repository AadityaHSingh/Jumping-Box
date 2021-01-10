var canvas;
var ball
var box1,box2,box3,box4

function setup(){
    canvas = createCanvas(830,600);

    //create 4 different surfaces
    box1 = createSprite(110,590,200,20);
    box1.shapeColor = "blue"
    box2 = createSprite(315,590,200,20);
    box2.shapeColor = "red"
    box3 = createSprite(520,590,200,20);
    box3.shapeColor = "yellow"
    box4 = createSprite(725,590,200,20);
    box4.shapeColor = "green"

    //create ball sprite and give velocity
    ball = createSprite(random(20,780),20,20,20);
    ball.velocityX = 10;
    ball.velocityY = 5;
    ball.shapeColor = "white"

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

    var edges = createEdgeSprites();
    ball.bounceOff(edges);

    //add condition to check if box touching surface and make it box

    if (ball.isTouching(box1)){
        ball.shapeColor = "blue";
    }
    if (ball.isTouching(box2)){
        ball.shapeColor = "red";
    }
    if (ball.isTouching(box3)){
        ball.shapeColor = "yellow";
    }
    if (ball.isTouching(box4)){
        ball.shapeColor = "green";
    }

    drawSprites()
}
