function daysToChristmas() {
    const today = new Date();
    const christmas = new Date(today.getFullYear(), 11, 25);
    if (today.getMonth() === 11 && today.getDate() > 25) {
        christmas.setFullYear(christmas.getFullYear() + 1);
    }
    const oneDay = 1000 * 60 * 60 * 24;
    const daysLeft = Math.ceil((christmas.getTime() - today.getTime()) / oneDay);
    return daysLeft;
}

console.log(daysToChristmas());

const currentDate = document.getElementById('currentDate');
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const today = new Date();
const currentMonth = months[today.getMonth()];
const currentDateNum = today.getDate();
currentDate.textContent = `Today is ${currentMonth} ${currentDateNum}`;


const daysLeft = document.getElementById('daysLeft');
daysLeft.textContent = `Only ${daysToChristmas()} days until Christmas!`;

