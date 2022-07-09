const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');



const newyears = '8 July 2022';
function countdown(){
    const newyearsDate = new Date(newyears);
    const currentDate = new Date();
    const toatalsecond = (newyearsDate - currentDate) / 1000;
    const days = Math.floor(toatalsecond / 3600 / 24);
    const hours = Math.floor(toatalsecond / 3600 ) % 24;
    const minutes = Math.floor(toatalsecond / 60  ) % 60;
    const seconds = Math.floor(toatalsecond) % 60;
     
     daysEl.innerHTML = days;
     hoursEl.innerHTML= hours;
     minsEl.innerHTML = minutes;
     secondsEl.innerHTML = seconds;

    
}

//initial call
countdown();

setInterval(countdown, 1000);