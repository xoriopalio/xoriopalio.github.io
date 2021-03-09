let box, drum, myPart;
let dumPat = [1,0,0,0,1,0,0,0];
let tekPat = [0,0,1,1,0,0,1,0];

let button1, button2;
let slider;

function preload() {
    soundFormats('mp3', 'ogg');
    dum = loadSound('frameDrum');
    tek = loadSound('gonga');
}

function setup() {
    background(255);
    textSize(6);
    fill(0);
    
    let dumPhrase = new p5.Phrase('dum', playDum, dumPat);
    let tekPhrase = new p5.Phrase('tek', playTek, tekPat);
    myPart = new p5.Part();
    myPart.addPhrase(dumPhrase);
    myPart.addPhrase(tekPhrase);
    myPart.setBPM(40);

    button1 = createButton('loop'); button1.position(0, 20); button1.mousePressed(loopKey);
    button2 = createButton('stop'); button2.position(0, 50); button2.mousePressed(noLoopKey);
    
    slider = createSlider(30, 180, 40,1);
    slider.position(0, 80);
    slider.style('width', '80px');
}

function draw() {
    background(255);
    myPart.setBPM(slider.value());
    text('bpm:'+ slider.value(),30,33);
}
function playDum( time, playbackRate) { dum.rate(playbackRate); dum.play(time); }
function playTek( time, playbackRate) { tek.rate(playbackRate); tek.play(time); }
function loopKey() { userStartAudio(); myPart.start(); myPart.loop(); }
function noLoopKey() { myPart.noLoop(); }
