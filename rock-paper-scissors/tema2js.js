
const display = document.querySelector('[data-counter-display]');

function play() {
    let arr = ['rock', 'paper', 'scissors'];
    let computer = arr[Math.floor(Math.random() * Math.floor(3))];
    let user = arr[Math.floor(Math.random() * Math.floor(3))];

    if (computer == user) {
        display.innerHTML = "<br/ > Computer choice: " + computer + "<br/ > User choice: " + user + '<br/ > Equal - play again!';
    }

    if (computer == 'scissors' && user == 'paper') {
        display.innerHTML = "<br/ > Computer choice: " + computer + "<br/ > User choice: " + user + "<br/ > Computer wins!";
    }

    if (computer == 'rock' && user == 'scissors') {
        display.innerHTML = "<br/ > Computer choice: " + computer + "<br/ > User choice: " + user + "<br/ > Computer wins!";
    }

    if (computer == 'paper' && user == 'rock') {
        display.innerHTML = "<br/ > Computer choice: " + computer + "<br/ > User choice: " + user + "<br/ > Computer wins!";
    }

    if (user == 'scissors' && computer == 'paper') {
        display.innerHTML = "<br/ > Computer choice: " + computer + "<br/ > User choice: " + user + "<br/ > User wins!";
    }

    if (user == 'rock' && computer == 'scissors') {
        display.innerHTML = "<br/ > Computer choice: " + computer + "<br/ > User choice: " + user + "<br/ > User wins!";
    }

    if (user == 'paper' && computer == 'rock') {
        display.innerHTML = "<br/ > Computer choice: " + computer + "<br/ > User choice: " + user + "<br/ > User wins!";
    }
}

const buttonnew = document.querySelector('.butonplay');
buttonnew.addEventListener('click', play);
