let randomnum = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');

const userInput = document.querySelector('#guessfield');

const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastresult');
const loworhigh = document.querySelector('.loworhigh');
const startOver = document.querySelector('.resultParas');
const p = document.createElement("p");
let prevguess = [];
let numGuess = 1;
let playGame = true;
if(playGame)
{
    
    submit.addEventListener('click',function (e){
    
   e.preventDefault();
   const guess=parseInt(userInput.value);

   validateGuess(guess);
});
}
function validateGuess(guess)
{ 
    // validate wheather value is between 1 to 100
    if(isNaN(guess))
    {
        alert('Please enter a valid number');
    }
    else if(guess<1)
    {
        alert('Please enter a number more than 1');
    }
    else if(guess>100)
    {
        alert('Please enter a numbe less than 100');
    }
    else{
        prevguess.push(guess);
        if(numGuess===11)
        {
            displayguess(guess)
            displaymsg(`Game Over Random number was ${randomnum}`)
            endGame(); 

        }
        else{
            displayguess(guess)
            checkGuess(guess);
        }
    }

}
function checkGuess(guess)
{
  // wheather value is equal to or not to random no
  if(guess===randomnum)
  {
    displaymsg(`you guessed it right`);
    endGame();
  }
  else if(guess < randomnum)
  {
    displaymsg(`Number is  low`);
  }
  else if(guess > randomnum)
    {
        displaymsg(`Number is  high`);
    }
 
}
function displayguess(guess)
{
  // clean value, show prev guess,remaining guess
  userInput.value=''
  guessSlot.innerHTML+=`${guess}  `
  numGuess++;
  remaining.innerHTML=`${12-numGuess} `

}

function displaymsg(message)
{
 //print val is low or high 
 loworhigh.innerHTML= `<h2> ${message}</h2>`;
 console.log(loworhigh)
}
function endGame()
{
    userInput.value='';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    
    p.innerHTML=`<h2 id="newGame">Start new Game </h2>`;
    startOver.appendChild(p);
    playGame=false;
    newGame();
}
function newGame()
{
    const newGameButton=document.querySelector('#newGame')
    newGameButton.style.ba
    newGameButton.addEventListener('click', function (e)
{
    randomnum=parseInt(Math.random() * 100 + 1);
    prevguess=[]
    numGuess=1;
    guessSlot.innerHTML=''
   remaining.innerHTML=`${12-numGuess} `
   userInput.removeAttribute('disabled')
   startOver.removeChild(p)
   playGame=true;
});
}
