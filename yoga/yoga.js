const button = document.querySelector ('#myButton');

button.addEventListener ('click', function(){
    
    document.querySelector ('#myVideo').play();
    const audio = document.querySelector ('#player');

    if (audio.paused){
        audio.play ();
    }
    else {audio.pause();
    }
})
const timer = 60;
let amountTime = 60 * 60;

function calculateTime(){
    const countdown = document.querySelector ('#countdown');

    let minutes = Math.floor(amountTime/60);
    let seconds = amountTime%60;

    if (seconds < 10){
        seconds = '0' + seconds;
    }
    countdown.textContent = `${minutes} : ${seconds}`;
    amountTime--;
    

    if (amountTime < 0){
        stopTimer();
        amountTime = 0;
    }

    function stopTimer(){
        clearInterval(timerId);
    }
    
}
let timerId = setInterval(calculateTime, 1000);