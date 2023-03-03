function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    if(choice == 0) return 'Rock';
    else if(choice == 1) return 'Paper';
    else return 'Scissors';
}

function playRound(playerSelection, computerSelection){
    computerSelection = computerSelection.toLowerCase();
    playerSelection = playerSelection.toLowerCase(); 
    if(playerSelection === computerSelection) return 'It\'s a draw!';
    if(playerSelection === 'rock'){
        if(computerSelection === 'paper')
            return 'You Lose! Paper beats Rock';
        else
            return 'You Win! Rock beats Scissors';
    }
    if(playerSelection === 'scissors'){
        if(computerSelection === 'rock')
            return 'You Lose! Rock beats Scissors';
        else
            return 'You Win! Scissors beats Paper';
    }
    if(playerSelection === 'paper'){
        if(computerSelection === 'scissors')
            return 'You Lose! Scissors beats Paper';
        else
            return 'You Win! Paper beats Rock';
    }
}

for(let i = 0; i < 10; i++){
    let playerSelection = prompt('Enter your choice', 'Enter your choice');
    if(playerSelection === 'Enter your choice'){
        console.log('Wrong Input!');
        i--;
        continue;
    }

    if(playerSelection === null){
        console.log('Game exited!');
        break;
    }
    let computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
}
