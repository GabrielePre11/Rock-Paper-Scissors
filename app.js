// Buttons
const btns = document.querySelectorAll('.btn');
const playerScoreNum = document.querySelector('[data-user-point]');
const CPUScoreNum = document.querySelector('[data-cpu-point]');
const CPUImageBtn = document.querySelector('.cpu-img');

// Result
const resultContainer = document.querySelector('[data-result]');
const resultSpan = document.querySelector('[data-result-span]');

// Variables
let playerScore = 0;
let CPUScore = 0;
let timeout;

// Function that generates the choice of the CPU and changes the image of the buttons
function CPURandomChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomCPUChoice = Math.floor(Math.random() * choices.length);

    // I access to the array of choices and I get the random choice
    const CPUChoice = choices[randomCPUChoice];

    // The image of the CPU button changes
    if (CPUChoice == 'rock') {
        CPUImageBtn.src = 'https://sihoonathan.github.io/rock-paper-scissors/assets/img/rock2.png';
    } else if (CPUChoice == 'paper') {
        CPUImageBtn.src = 'https://sihoonathan.github.io/rock-paper-scissors/assets/img/paper.png';
    } else if (CPUChoice == 'scissors') {
        CPUImageBtn.src = 'https://nehalhazem.github.io/rockPaperScissors.io/img/scissors.png';
    }

    return choices[randomCPUChoice];
}

// Game
function RockPaperScissors() {

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            const playerChoiceBtn = btn.dataset.choice;
            const CPUChoice = CPURandomChoice();

            // The switch statement is true because I need to check the player choice and the CPU choice (multiple cases)
            switch (true) {
                case playerChoiceBtn == 'rock' && CPUChoice == 'paper':
                    ++CPUScore;
                    CPUScoreNum.textContent = CPUScore;
                    break;

                case playerChoiceBtn == 'paper' && CPUChoice == 'scissors':
                    ++CPUScore;
                    CPUScoreNum.textContent = CPUScore;
                    break;

                case playerChoiceBtn == 'scissors' && CPUChoice == 'rock':
                    ++CPUScore;
                    CPUScoreNum.textContent = CPUScore;
                    break;

                case playerChoiceBtn == 'rock' && CPUChoice == 'scissors':
                    ++playerScore;
                    playerScoreNum.textContent = playerScore;
                    break;

                case playerChoiceBtn == 'paper' && CPUChoice == 'rock':
                    ++playerScore;
                    playerScoreNum.textContent = playerScore;
                    break;

                case playerChoiceBtn == 'scissors' && CPUChoice == 'paper':
                    ++playerScore;
                    playerScoreNum.textContent = playerScore;
                    break;
            }

            if (playerScore == 5) {
                resultContainer.classList.add('active');
                resultSpan.textContent = `YOU WIN! YOU: ${playerScore} - ${CPUScore} CPU`;

                btns.forEach(btn => {
                    btn.setAttribute('disabled', '');
                });
            } else if (CPUScore == 5) {
                resultContainer.classList.add('active');
                resultSpan.textContent = `CPU WIN! ${CPUScore} - ${playerScore} YOU`;

                btns.forEach(btn => {
                    btn.setAttribute('disabled', '');
                });
            }
        });
    });
}

RockPaperScissors()