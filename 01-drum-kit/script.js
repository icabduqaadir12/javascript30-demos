
function removeTransition(e) {
    if(e.propertyName != 'transform') return;
    this.classList.remove('playing');
    
}
function playSoundByKeyCode(keyCode) {
const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
const key = document.querySelector(`.key[data-key="${keyCode}"]`);

if(!audio) return;
audio.currentTime = 0;
audio.play();
key.classList.add('playing');
}

function playSound(e) {
playSoundByKeyCode(e.keyCode);
}


const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => {
key.addEventListener('transitionend', removeTransition);

key.addEventListener('click', () => {
    const keyCode = key.getAttribute('data-key');
    playSoundByKeyCode(keyCode)
})
});

window.addEventListener('keydown', playSound);