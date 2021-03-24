// un troco de codigo para Loreto 😉
let x,y,r=0,f=0,ratio = 200;
let slider;

function setup() {
    createCanvas(600,300);
    background(255);
    //stroke(0,253);
    //text("sketching is relaxing",0,20);
}

function draw() {
    //text("sketching is relaxing",0,20);
    //fill(255,50);
    //rect(-10,-10, width+20, height+20);
    f=f+TWO_PI/ratio;
    r=r+0.5;
    noFill();
    x = width/2+(r*cos(f));
    y = height/2+(r*sin(f));
    stroke(0,75);
    ellipse(x, y, r/10, r/10);
    stroke(0,5);
    line(width/2, 3*height/4, x, y);
    line(width, 3*height/4, x, y);
    if(f>TWO_PI) {
        f=0;
        r = 0;
        ratio = ratio+50;
        //background(255);
    }
    //stroke(0,255);
    //text("sketching is relaxing",0,20);
}
function mousePressed() {
    background(255);
    f = 0;
    r = 10;
}
