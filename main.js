alive = "";
candyland= "";
function preload() {
    song = loadSound("Alive.mp3");
    song = loadSound("Candyland.mp3");
}
function setup() {
    canvas = createCanvas(300,300,80,180);
    canvas.center();
    video = createCaptrue(VIDEO);
    video.hide;
}
function draw() {
    image(video,0,0,300,300);
}