function play(userChoice) {
    let computerResult = document.querySelector('#computerResult')

    let userResult = document.querySelector('#userResult')

    let result = document.querySelector('#result')

    let choices = ['Rock', 'Paper', 'Scissors'];

    let computerChoice = choices[Math.floor(Math.random() * 3)]

    userResult.innerHTML = `User choice is: ${userChoice}`;

    computerResult.innerHTML = `Computer choice is: ${computerChoice}`;

    if (userChoice == computerChoice) {

        result.innerHTML = `Its a Tie!`
    }
    else if (
        userChoice == 'Rock' && computerChoice == 'Scissors' ||

        userChoice == 'Paper' && computerChoice == 'Rock' ||
        
        userChoice == 'Scissors' && computerChoice == 'Paper'
    ) {
        result.innerHTML = `You Win!`
    }
    else {
        result.innerHTML = `You Lose! Computer Wins!`
    }
}