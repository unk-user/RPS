    const R = "Rock", P = "Paper", S = "Scissors";
    let buttons = document.querySelectorAll('button');
    let playerSign = document.querySelector('#playerSign');
    let computerSign = document.querySelector('#computerSign');
    let cSignImage = document.createElement('img');
    let pSignImage = document.createElement('img');
    let computerScoreDisplay = document.querySelector('#computerScore');
    let playerScoreDisplay = document.querySelector('#playerScore');
    let pScoreBox = document.querySelector('.pScoreBox');
    let cScorebox = document.querySelector('.cScorebox');
    let rounds = 0;
    let computerScore = 0;
    let playerScore = 0;
    let result;
    let scoreMessage = document.querySelector('#scoreMessage');
    function getComputerChoice() {   
        let randomN = Math.floor(Math.random() * 3);
        let choice;
        switch (randomN) {
            case 0: 
                choice = R;
                cSignImage.src = 'rock.webp';
                break;
            case 1:
                choice = P;
                cSignImage.src = 'paper.webp';
                break;
            case 2: 
                choice = S;  
                cSignImage.src = 'scissors.webp';
                break;
        }
        return choice;
    }
    function handleClick(event){
        switch(event.target.id){
            case 'Rock-btn':
                playerSelection = R;
                pSignImage.src = 'rock.webp';
                break;
            case 'Paper-btn': 
                playerSelection = P;
                pSignImage.src = 'paper.webp';
                break;
            case 'Scissors-btn':
                playerSelection = S;
                pSignImage.src = 'scissors.webp';
                break;
        }
        return playerSelection;
    }
    function appendSign() { 
        playerSign.innerHTML = '';
        computerSign.innerHTML = '';
        playerSign.appendChild(pSignImage);
        computerSign.appendChild(cSignImage);
    }
    function score(playerSelection, Choice) {
        let display;
        if (playerSelection === Choice) {            
            pScoreBox.style.backgroundColor = '#56b856';
            cScorebox.style.backgroundColor = '#56b856';
            display = "its a tie!";
          } else if (playerSelection === R && Choice === P) {                        
            pScoreBox.style.backgroundColor = '#e86c5d';
            cScorebox.style.backgroundColor = '#6ac4c4';
            computerScore += 1;
            display = "you lost";
          } else if (playerSelection === R && Choice === S) {            
            pScoreBox.style.backgroundColor = '#6ac4c4';
            cScorebox.style.backgroundColor = '#e86c5d';
            playerScore += 1;
            display = "you won!";
          } else if (playerSelection === P && Choice === R) {            
            pScoreBox.style.backgroundColor = '#6ac4c4';
            cScorebox.style.backgroundColor = '#e86c5d';
            playerScore += 1;
            display = "you won!";
          } else if (playerSelection === P && Choice === S) {            
            pScoreBox.style.backgroundColor = '#e86c5d';
            cScorebox.style.backgroundColor = '#6ac4c4';
            computerScore += 1;
            display = "you lost";
          } else if (playerSelection === S && Choice === R) {            
            pScoreBox.style.backgroundColor = '#e86c5d';
            cScorebox.style.backgroundColor = '#6ac4c4';
            computerScore += 1;
            display = "you lost";
          } else if (playerSelection === S && Choice === P) {            
            pScoreBox.style.backgroundColor = '#6ac4c4';
            cScorebox.style.backgroundColor = '#e86c5d';
            playerScore += 1;
            display = "you won!";
          } else {
            display = "Invalid player selection";
          }
      return {playerScore, computerScore, display};
    }
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            if(rounds < 10){
                let playerSelection = handleClick(event);
                let computerSelection = getComputerChoice();
                result = score(playerSelection, computerSelection);
                computerScoreDisplay.textContent = `Computer: ${result.computerScore}`;
                playerScoreDisplay.textContent = `Player: ${result.playerScore}`;
                appendSign();
                scoreMessage.textContent = result.display;
                rounds += 1; 
            } else {
                rounds = 0;
                computerScore = 0;
                playerScore = 0;
                scoreMessage.textContent = "Try again!";
                playerSign.innerHTML = '';
                computerSign.innerHTML = '';
                alert("Play Again");
            }
        });
    });