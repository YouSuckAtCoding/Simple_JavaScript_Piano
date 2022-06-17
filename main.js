// get all keys
const keys = document.querySelectorAll(".key")

//play notes
function playNote(event){
    
    //keycode
    let audioKeyCode = getKeyCode(event);
    
    //pressed key
    const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`)
    
    //if key exist
    const nullKey = !key

    if(nullKey){
        return;
    }

    //play audio
    addPlayingClass(key)
    playAudio(audioKeyCode)
     
}
function playAudio(audioKeyCode){
    const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`)
    audio.currentTime = 0;
    audio.play()
}



function getKeyCode(event){

    let keyCode;

    const isKeyboard = event.type === "keydown" //boolean
    if(isKeyboard){
        keyCode = event.keyCode
    }
    else{
        keyCode = event.target.dataset.key
    }
    
    return keyCode

}
function addPlayingClass(key) {
    key.classList.add('playing')
  }

function removePlayingClass(event){
    event.target.classList.remove("playing")
}

//click with mouse
keys.forEach( function(key){
    key.addEventListener("click", playNote)
    key.addEventListener("transitionend", removePlayingClass)
})

//keyboard type
window.addEventListener("keydown", playNote)
