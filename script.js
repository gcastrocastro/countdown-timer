// Thought process planning:
// We need the END DATE, CURRENT DATE
// We need to subtract them and return the answer in d,h,m,s

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secEl = document.getElementById('sec');

const endDate = "13 Jan 2023";

function countdown() {
    const currentDate = new Date();
    const endDateSpain = new Date(endDate);

    // seconds
    const totalSeconds = (endDateSpain - currentDate) / 1000;
    // days
    // math.floor always rounds down to the nearest integer
    const days = Math.floor(totalSeconds / 86400);
    // % 24 is to get remainder after dividing by the hours in a day
    const hours = Math.floor(totalSeconds / 3600) % 24;
    // you first get the total minutes and then divide by the minutes in an hour
    // const minutes = (((Math.floor(seconds/60)) - (hours*60)) - ((days* 1440))); 
    const minutes = Math.floor(totalSeconds/60) % 60;
    // seconds -- you divide by 60 to convert to minutes 
    const seconds = Math.floor(totalSeconds % 60);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = minutes;
    secEl.innerHTML = seconds;

    // console.log(days, hours, minutes, seconds);
}

// Initial Call that is calling the function every 1000 milliseconds/1sec
// the console log answer comes back in milliseconds, which need to be converted
countdown();
setInterval(countdown, 1000);