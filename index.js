const randomNum = String(Math.floor(Math.random() * 10 + 1));
console.log(randomNum);

let counter = 0;


const guess = prompt("Guess a number between 1 - 10:");

console.log(guess);



for (let i = 0; i < 2; i++) {
    if (randomNum === guess) {
        counter++;
        alert(`Success, the number was ${randomNum}. Attempts: ${counter}`)
        break;
    } else {
        counter++;
        //console.log("Counter is:", counter);
        const guess2 = prompt("Wrong, try again!");
        //console.log("input2 is:", input2);

        if (guess2 === randomNum && counter !== 3) {
            counter++;
            alert(`Success, the number was ${randomNum}! Attempts: ${counter}`);
            break;
        } else if (guess !== randomNum && counter === 2) {
            alert(`Sorry, you failed to guess the number in 3 attempts. The number was ${randomNum}!`)
        }
    }


}



