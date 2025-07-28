const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;

    // solution backwards jump
    if (seconds === 0) {
        secondHand.style.transition = 'none';
    }else {
        secondHand.style.transition = '';
    }

    const mins = now.getMinutes();
    const minutesDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    minsHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

    // Digital Clock
    document.getElementById('digital-time').textContent = now.toLocaleTimeString();

    // Day
    document.querySelector('.day').textContent = days[now.getDay()];
}

setInterval(setDate, 1000);
setDate();