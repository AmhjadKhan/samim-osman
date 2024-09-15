// Show live time with real clock styling
function updateTime() {
    const timeElement = document.getElementById('time');
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12; // 12-hour format
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
    timeElement.textContent = timeString;
}

setInterval(updateTime, 1000);
updateTime();

// Type effect for the home section
const typedText = ['Financial Management', 'Credit Card Solutions', 'Secure Banking'];
let typeIndex = 0;
let charIndex = 0;
const typeElement = document.querySelector('.typed');

function typeEffect() {
    if (charIndex < typedText[typeIndex].length) {
        typeElement.textContent += typedText[typeIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(eraseEffect, 2000);
    }
}

function eraseEffect() {
    if (charIndex > 0) {
        typeElement.textContent = typedText[typeIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 100);
    } else {
        typeIndex = (typeIndex + 1) % typedText.length;
        setTimeout(typeEffect, 500);
    }
}

document.addEventListener('DOMContentLoaded', typeEffect);
