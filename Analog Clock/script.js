const numberHours = document.querySelector('.number-hours');
const barSeconds = document.querySelector('.bar-seconds');

const numberElement = [];
const barElement = [];

// creat number hourse
for (let i = 1; i<=12; i++){
    numberElement.push(
        `<span style="--index:${i};"><p>${i}</p></span>`
    );
    // console.log(numberElement);
}

numberHours.insertAdjacentHTML('afterbegin', numberElement.join(""))
// console.log(numberElement);

// create bar seconds
for (let i = 1; i<=60; i++){
    barElement.push(
        `<span style="--index:${i};"><p></p></span>`
    );
    // console.log(i);
}

barSeconds.insertAdjacentHTML('afterbegin', barElement.join(""))



const handHours = document.querySelector('.hand.hours')
const handMinutes = document.querySelector('.hand.minutes')
const handSeconds = document.querySelector('.hand.seconds')

function getCurrentTime(){
    let date = new Date();
    let currentHours = date.getHours();
    let currentMinutes = date.getMinutes();
    let currentSeconds = date.getSeconds();

/*
------------------------------------------------------
60 seconds = 360deg to 1 sec = 360 / 60 = 6deg
60 minutes = 360deg to 1 min = 360 / 60 = 6deg
12 hours = 360deg to 1 hrs = 360 / 12 = 30deg

1 hrs = 30deg that means 60 min = 30deg to 1 min = 30 / 60 = 0.5 or 1/2 deg

so formula for hours is (hours * 30 + minutes / 2)
------------------------------------------------------
*/


    handHours.style.transform = `rotate(${currentHours * 30 + currentMinutes / 2}deg)`;   
    handMinutes.style.transform = `rotate(${currentMinutes * 6}deg)`;   
    handSeconds.style.transform = `rotate(${currentSeconds * 6}deg)`;   
}

// call getCurrentTime function on page load
getCurrentTime();

// call getCurrentTime to set clock hands every second
setInterval(getCurrentTime, 1000)   // 1000ms = 1s