let userInt;
let minRange = 0;
let maxRange = 8;
let prize = 0;
let totalPrize = 0;
let possiblePrize = 100;
let PossiblePrizeInc = 2;
let firstTry = 3;
let secondTry = 2;
let thirdTry = 1;
let PrizeInc = 2;
let RangeInc = 4;
let firstGuess = 100;
let secondGuess = 50;
let thirdGuess = 25;

let userChoice = confirm('Would you like to play a game?');
if (userChoice === false) {
    alert('You did not become a billionaire, but can.');
}

while (userChoice === true) {
    let randomInt = Math.floor(minRange + Math.random() * (maxRange + 1 - minRange));
    let loops = 4;
    let iterations = 3;
    for (let i = 0; i < iterations; i++) {
        loops--;
        if (loops === firstTry) {
            prize = firstGuess;
        }
        if (loops === secondTry) {
            prize = secondGuess;
        }
        if (loops === thirdTry) {
            prize = thirdGuess;
        }        
        userInt = +prompt('Choose a roulette pocket number from ' + minRange + ' to ' + maxRange
            + '\n' + 'Attempts left: ' + loops
            + '\n' + 'Total prize: ' + totalPrize + '$'
            + '\n' + 'Possible prize on current attempt: ' + possiblePrize + '$');        
        if (userInt === null || userInt === randomInt) {
            break;
        }
    }
    if (userInt === randomInt) {
        alert('Congratulation, you won! Your prize is: ' + prize + '$')
        userChoice = confirm('Would you like to play again?');
        if (userChoice === true) {            
            totalPrize += prize;
            possiblePrize *= PossiblePrizeInc;
            firstGuess *= PrizeInc;
            secondGuess *= PrizeInc;
            thirdGuess *= PrizeInc;
            maxRange += RangeInc;
        } else {
            alert('Thank you for your participation. Your prize is: ' + prize + '$')
        }
    } else {
        alert('Thank you for your participation. Your prize is: ' + totalPrize + '$')
        userChoice = confirm('Would you like to play again?');
    }
}