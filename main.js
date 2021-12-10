alive = "";
candyland= "";
song = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
function preload() {
    song = loadSound("Alive.mp3");
    song = loadSound("Candyland.mp3");
}
function setup() {
    canvas = createCanvas(300,300,80,180);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
}
function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = "+ leftWristX +" leftWristY = "+ leftWristY);
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = "+ rightWristX +" rightWristY = "+ rightWristY);
    }
}
function modelLoaded() {
    console.log('PoseNet is Initialized');
    poseNet.on('pose', gotPoses);
}
function draw() {
    image(video,0,0,300,300);
}