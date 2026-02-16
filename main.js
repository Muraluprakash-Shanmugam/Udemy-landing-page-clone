var number = document.getElementById("inputBox")
var answer = document.getElementById("validNbr")
var randomNumber = Math.floor(Math.random() * 10)+1;

if (randomNumber > 5) {
    randomNumber = randomNumber - 5
}

function check() {
    if (number.value == randomNumber) {
        answer.innerHTML = "Well done! you have guessed the correct number"
    }
    else if (number.value == "") {
       alert("Don't afried to enter a number")
    }
    else {
        answer.innerHTML = "Better luck next time, the correct number is " + randomNumber;
    }

}