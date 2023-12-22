const snippetArt = document.getElementById("snippet-img");
 const coverArt = document.getElementById("cover-img");
 const  mAudio = document.querySelector(".music");
 const song = document.getElementById("song");
 const writer = document.getElementById("writer");
 const previous = document.getElementById("play-previous");
 const Words = document.getElementById("words");
 const mainPlayCont = document.getElementById("main-playCnt");
 const next = document.getElementById("play-next");
 

 coverArt.addEventListener("click", function(){
    coverArt.style.width = "55vh";
});

coverArt.addEventListener("dblclick", function(){
    coverArt.style.width = " 100%";
});



snippetArt.addEventListener("click", function() {
    coverArt.classList.add("vibrate");
    Words.style.display="block";
    setTimeout(function() {
      coverArt.classList.remove("vibrate");
      Words.style.display="none";
    }, 1000);
    

  });

 

const urlParams = new URLSearchParams(window.location.search);
const songIndex = parseInt(urlParams.get('songIndex'));

let count = 0;
function currentDisplay (count){
const {image, musicName, src, artist} = playList[count]
song.innerHTML = musicName,
writer.innerHTML = artist,
coverArt.src = image,
snippetArt.src = image,
 mAudio.src = src
 const parse = parseInt(Math.floor(mAudio.mozFragmentEnd))
 console.log(parse);
 console.log(mAudio);
}

const playMusic = () => {
    const{src} = playList[count]
     mAudio.src = src
     mAudio.load()
     mAudio.play()
}

function pauseAndplay(){
    if (mainPlayCont.classList.contains("pause")) {
        mainPlayCont.classList.remove("pause")
        mainPlayCont.classList.add("play")
        mAudio.play()
        mainPlayCont.innerHTML = '<i class="fa-solid fa-play" id="main-playCnt"></i>';
    } else{
    mainPlayCont.classList.remove("play")
    mainPlayCont.classList.add("pause")
    mAudio.pause()
    mainPlayCont.innerHTML = '<i class="fa-solid fa-arrow-left" id="main-playCnt"></i>';
    }
}
mainPlayCont.addEventListener("click", ()=> {
playMusic();
pauseAndplay();
});

const increase = () => {
    count++
    if(count <= playList.length-1){
        currentDisplay(count)
        playMusic()
    }else{
        count = 0
        currentDisplay(count)
        playMusic()
    }
}
next.addEventListener("click", () => {
    increase()
});
const decrease = () => {
    count--
    if(count < 0){
        alert(count)
        count = playList.length-1
    }
    currentDisplay(count)
    playMusic()

}
previous.addEventListener("click", () => {
    decrease();
});
currentDisplay(songIndex);
playMusic();