const video = document.getElementById("video");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");
const controller = document.querySelector(".controller")

//Adding a global variable 
let shouldUpdateProgress = true;

//Play & Pause Video
function toggleVideoStatus(){
    if(video.paused){
        video.play()
    }else{
        video.pause()
    }
}

//Update the play/pause icon
function updatePlayIcon(){
if(video.paused){
    controller.src = "img/play.png";
}else{
    controller.src = "img/pause.png";
}
}





//Update the progress and timestamp
function updateProgress(){
    if(shouldUpdateProgress){
        progress.value = (+video.currentTime/video.duration)*100;

//Get minutes
let mins = Math.floor(video.currentTime/60)
if(mins<10){
    mins = "0"+String(mins);
}

//Get Seconds
let secs = Math.floor(video.currentTime%60)
if(secs<10){
    secs = "0"+String(secs);
}
timestamp.innerHTML = `${mins}:${secs}`
}else {
        return
    }

   
}

//Set video time to progress
function setVideoProgress(){
    shouldUpdateProgress = true;
 video.currentTime = (parseInt(progress.value) / 100) * parseInt(video.duration);
}
// Stop Video
function stopVideo(){
video.currentTime = 0;
video.pause(); 
    }

//Event listeners
video.addEventListener("click",toggleVideoStatus);
video.addEventListener("pause",updatePlayIcon);
video.addEventListener("play",updatePlayIcon);
video.addEventListener("timeupdate",updateProgress);

play.addEventListener("click",toggleVideoStatus);

stop.addEventListener("click",stopVideo);


progress.addEventListener("change",setVideoProgress)
progress.addEventListener('input', () => {
	shouldUpdateProgress = false;
});
