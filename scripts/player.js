const video = document.getElementById("v")
const pause = document.getElementById("pause")
const mute = document.getElementById("mute")
const next = document.getElementById("next")
const playlist = ["космос футаж", "Футаж Звёды, космос - Footage Space", "футаж космос FULL HD"]
let number_video = 0
function stop() {
    if(video.paused){
        video.play()
    }else{
        video.pause()
    }
}

function mute1(){
    if(video.muted){
        video.muted = false
    }else{
        video.muted = true
    }
}

function next1() {
    if(number_video < playlist.length-1){
        number_video ++;
    } else {
        number_video = 0;
    }

    video.src = `video/${playlist[number_video]}.mp4`
}

function back1() {
    if(number_video !== 0){
        number_video --;
    } else {
        number_video = playlist.length - 1;
    }

    video.src = `video/${playlist[number_video]}.mp4`
}
