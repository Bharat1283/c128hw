console.log('Made by Bharat -- copyright 2022');

starwarsbgm="";
interstellarbgm="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;

function preload(){
starwarsbgm= loadSound("sw.mp3");
interstellarbgm= loadSound("inter.mp3");
}

function setup(){
    canvas = createCanvas(500,430);
    canvas.center();
    video= createCapture(VIDEO);
    video.hide()
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('Posenet is initialized');
}

function draw(){
 image(video, 0, 0, 500, 430);
}

function gotPoses(results){
   if(results.length>0){
    console.log(results);
    leftWristX=results[0].pose.leftWrist.x;
    leftWristY=results[0].pose.leftWrist.y;
    console.log("leftWristX="+leftWristX+"leftWrsitY="+leftWristY);
    rightWristX=results[0].pose.rightWrist.x;
    rightWristY=results[0].pose.rightWrist.y;
    console.log("rightWristX="+rightWristX+"rightWrsitY="+rightWristY);
   }
    }


