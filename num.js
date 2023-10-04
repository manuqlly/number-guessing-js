const answer = Math.floor(Math.random() * 100 + 1);

let guesses = 0;

document.getElementById("submitButton").onclick = function() {

    let guess = document.getElementById("numGuess").value;
    guesses += 1;

    if(guess == answer){
        alert (`${answer} is the Correct guess !! It took u ${guesses} guess`);
    }
    else if(guess > answer){
        alert(`Too Large`)
    }
    else{
        alert(`Too Short`)
    }
}

