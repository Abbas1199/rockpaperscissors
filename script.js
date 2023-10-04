const selectionButtons = document.querySelectorAll('[data-selection]')
const finalColumn = document.querySelector('[data-final-column]')
const computerScorespan = document.querySelector('[data-computer-score]')
const yourScorespan = document.querySelector('[data-your-score]')
let userScore = 0;
let computerScore = 0;

const   SELECTIONS = [
    {
        name: 'rock',
        emoji: '✊',
        beats: 'scissors'
    },
    {
        name: 'paper',
        emoji: '📄',
        beats: 'rock'
    },
     {
        name: 'scissors',
        emoji: '✂️',
        beats: 'paper'
    },
]

selectionButtons.forEach(selectionButton=> {
    selectionButton.addEventListener('click', e => {
    const selectionName = selectionButton.dataset.selection
    const selection = SELECTIONS.find(selection => selection.name === selectionName)
        makeSelection(selection)
    })
} )

function makeSelection(userSelection) {
    const computerSelection = randomSelection()
    const winner = isUserWinner(userSelection, computerSelection)
    addSelectionResult(userSelection, computerSelection, winner);
    checkGameOver();
}

function incrementScore(scoreSpan){
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
}

function isUserWinner(user, computer){
    if (user.name === computer.name) {
        return 'tie';
    }
    return user.beats === computer.name ? 'user' : 'computer';
}

function addSelectionResult(userSelection, computerSelection, winner) {
    const userDiv = document.createElement('div');
    const computerDiv = document.createElement('div');
    userDiv.innerText = userSelection.emoji;
    computerDiv.innerText = computerSelection.emoji;
    userDiv.classList.add('result-selection')
    computerDiv.classList.add('result-selection')
    if (winner === 'user') {
        userDiv.classList.add('winner');
        incrementScore(yourScorespan);
    } else if (winner === 'computer') {
        computerDiv.classList.add('winner');
        incrementScore(computerScorespan);
    }
    finalColumn.after(userDiv);
    finalColumn.after(computerDiv);
}

function randomSelection() {
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
    return SELECTIONS[randomIndex]
}

function checkGameOver() {
    const userScore = yourScorespan.innerText;
    const computerScore = computerScorespan.innerText;
    let isWinner = '';
    if (userScore >= 5) {
        isWinner = 'user';
    } else if (computerScore >= 5) {
        isWinner = 'computer'
    }

    if (isWinner) {
        window.alert(`${isWinner} has won!`);
        location.reload();
    }
}




// i am being held hostage by FBI in guantemala please send he
// NO

































































