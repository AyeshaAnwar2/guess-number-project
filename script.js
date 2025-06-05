const randomnum = parseInt(Math.random() *100 + 1);
console.log(randomnum)

const button = document.querySelector('#btn');
const userinput = document.querySelector('#guess-feild');
const guessslot = document.querySelector('#guesses')
const remainning = document.querySelector('.remaining')
const loworhi = document.querySelector('.final')
const startover = document.querySelector('#result')


const p = document.createElement('p')
let prevguess = []
let numguess = 1;

let playgame = true;

if(playgame){
    button.addEventListener('click' , function(e){
        e.preventDefault();
        const guess = parseInt(userinput.value);
        console.log(guess)
        validateGuess(guess)
    })
}


// it validate weather a num is between 1 to 100 or a num or not
function validateGuess(guess){
      if(isNaN(guess)){
        alert('please enter a valid number')
      }
      else if(guess<1){
        alert('please enter a number greater then 1')
      }
      else if (guess>100){
        alert('please enter a number less then 100')
      }
      else {
        prevguess.push(guess)
        if (numguess === 11){
            displayGuess(guess)
            displaymessage(`Game over. Random number was ${randomnum}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkguess(guess)
        }
      }
}

//checkguess checks the num we gave whether is equal to display num or not or identify is it equal,low or high
function checkguess (guess){
           if(guess === randomnum){
            displaymessage(`your guess is right`)
           }
           else if(guess < randomnum){
            displaymessage(`number is too low`)
           }
           else if(guess> randomnum){
            displaymessage(`numbeer is too high`)
           }
}

// display guess clean the input feild also update previous guess or the guess remainning 
function displayGuess (guess){
       userinput.value = ``
       guessslot.innerHTML += `${guess} , `
       numguess++;
       remainning.innerHTML = `${11-numguess}`
}

// it will display the message we pass in the loworhig feild
function displaymessage (message){
       loworhi.innerHTML = `<h2>${message}</h2>`
}


// method to end the game

function endGame (){

}

// method to start the new game
function newGame (){

}