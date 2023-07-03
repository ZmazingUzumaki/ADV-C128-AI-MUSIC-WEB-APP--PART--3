song = "";
song2 = "";
leftWristX = "";
leftWristY = "";
rightWristX = "";
rightWristY = "";

function preload(){
    song = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}

function setup(){
    canvas = createCavas(650, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("PoseNet model Loaded")
}

function draw(){
    image(video, 0, 0, 650, 500);
} 

function gotPoses(results){
    if(results.lenght > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + "leftWristY =" + leftWristY)
        
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + "rightWristY =" + rightWristY)
    }
}