function setup(){
    video = createCapture(VIDEO)
    video.size(550,500);
    canvas = createCanvas(550,500);
    canvas.position(570,150)
    poseNet = ml5.poseNet(video,modelLoaded)
    poseNet.on('pose',gotposes)
 }
 function modelLoaded(){
 console.log("PoseNet is initilized")
 }
 function gotposes(){
 if(results.length > 0){
 console.log(results)}
 }