const min = 1;
const max = 100;

const answer = Math.floor(Math.random() * (max - min + 1)) + min;

let guess;
let attempt = 0;
let isRunning = true;

while (isRunning) {
    guess = window.prompt(`Choose a number between ${min}-${max}.`);
    guess = Number(guess);

    if (isNaN(guess)) {
        window.alert("Please enter valid number");
    }

    else if (guess > max || guess < min) {
        window.alert("Please enter valid number");
    }

    else {
        attempt++;

        if (guess > answer) {
            window.alert("Too High! Try again.");
        }

        else if (guess < answer) {
            window.alert("Too Low! Try again.");
        }

        else {
            isRunning = false;
            window.alert(`Correct! The answer was ${answer}. It took ${attempt} attempts.`);
        }
    }
}