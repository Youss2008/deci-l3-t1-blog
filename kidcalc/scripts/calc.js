const calcNumbers = document.getElementById("calc-numbers");
const answer = document.getElementById("answer");
const result = document.getElementById("result");
const score = document.getElementById("score");

// Add Click Listeners To Number Buttons
for (let i = 0; i <= 9; i++) {
    document.getElementById(`b${i}`).addEventListener("click", () => {
        calcNumbers.textContent += i;
    });
}

// Add Click Listeners To Sign Buttons
function calcSignClickListener(id, char) {
    document.getElementById(id).addEventListener("click", () => {
        calcNumbers.textContent += ` ${char} `;
    });
}

calcSignClickListener("plus", "+")
calcSignClickListener("minus", "-")
calcSignClickListener("greater", ">")
calcSignClickListener("less", "<")
calcSignClickListener("equal", "=")


// Submit Button Functionality
document.getElementById("submit").addEventListener("click", () => {
    try {
        if (!answer.value.trim()) {
            if (calcNumbers.textContent.includes("=") || calcNumbers.textContent.includes(">") || calcNumbers.textContent.includes("<")) {
                const condition = calcNumbers.textContent.replace("=", "==");
                if (eval(condition)) {
                    correctAnswer();
                } else {
                    incorrectAnswer();
                }
            } else {
                invalidAnswer();
            }
        } else {
            if (eval(calcNumbers.textContent) === parseInt(answer.value)) {
                correctAnswer();
            } else {
                incorrectAnswer();
            }
        }
    } catch (error) {
        console.log(error);
        invalidAnswer();
    }
});


// Clear Button Functionality
document.getElementById("clear").addEventListener("click", () => {
    calcNumbers.textContent = "";
});


// Correct - Incorrect - Invalid Answer
function correctAnswer() {
    result.textContent = "Your answer is correct!";
    result.style.color = "limegreen";
    score.textContent = parseInt(score.textContent) + 1;
}

function incorrectAnswer() {
    result.textContent = "Your answer is incorrect. Please clear and try again.";
    result.style.color = "orange";
}

function invalidAnswer() {
    result.textContent = "Invalid input. Please clear and try again.";
    result.style.color = "red";
}