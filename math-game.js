//in order to use prompt, add this line:
const prompt = require("prompt-sync")();

var problemNumber = Number(1);
var score = Number(0);
var lives = Number(3);

var gameMode;

console.log(`Welcome to the math game of wonders!`);
console.log(`You have 2 modes, 20 questions, and 3-out.`);


SelectGameMode();

//selects if 20 questions or if 3 out
function SelectGameMode() 
{
    gameMode = Number(prompt(`Which do you want? \n Enter 1 for 20 questions \n Enter 2 for 3-out \n`));

    if (gameMode === 1) 
    {
        console.log(`20 Questions`);
        Mode20Questions();
    } 

    else if (gameMode === 2) 
    {
        console.log(`3-out`);
        Mode3Out();
    } 

    else 
    {
        console.log(`That's not valid, try again!`);
        SelectGameMode();
    }
}

//starts the 20 questions game mode
function Mode20Questions()
{
    while (problemNumber <= 20)
    {
        SelectRandomOperator();
    }
    
    GameEnd();
}

//starts the 3 out game mode
function Mode3Out()
{
    while (lives > 0)
    {
        SelectRandomOperator();
    }

    GameEnd();
}

//selects a random operator and then calls the appropriate function with that operator
function SelectRandomOperator()
{
    var OperatorIndex = RandomInt(1, 5);

    var firstNum = RandomInt(1, 10);
    var secondNum = RandomInt(1, 10);
    

    if (OperatorIndex === 1)
    {
        RandomSum(firstNum, secondNum);
    }

    else if (OperatorIndex === 2)
    {
        RandomSubtract(firstNum, secondNum);
    }

    else if (OperatorIndex === 3)
    {
        RandomMultiply(firstNum, secondNum);
    }

    else if (OperatorIndex === 4)
    {
        RandomDivide(firstNum, secondNum);
    }

    else if (OperatorIndex === 5)
    {
        RandomModulo(firstNum, secondNum);
    }

    else 
    {
        SelectRandomOperator();
    }
}

//gives a random addition question to the user
function RandomSum(firstNum, secondNum)
{
    //prints problem number first
    console.log(`${problemNumber})`);

    var input = prompt(`${firstNum} + ${secondNum} = ? \n`);

    //if player can skip (20 questions mode) and does skip, then skip
    if (gameMode === 1 && input === "skip")
    {
        SkipQuestion();
    }
    //decide if answer is correct
    else if (Number(input) === (firstNum + secondNum))
    {
        AnswerCorrect();
    }
    //if input is a number and is wrong then say incorrect
    else if (!isNaN(input))
    {
        AnswerIncorrect();
    }
    //if input isnt a number then say it isnt valid
    else
    {
        AnswerInvalid();
    }

    console.log(`On to the next one!`);
    problemNumber++;
}

//gives a random subtraction question to the user
function RandomSubtract(firstNum, secondNum)
{
    //prints problem number first
    console.log(`${problemNumber})`);

    var input = prompt(`${firstNum} - ${secondNum} = ? \n`);

    //if player can skip (20 questions mode) and does skip, then skip
    if (gameMode === 1 && input === "skip")
    {
        SkipQuestion();
    }
    //decide if answer is correct
    else if (Number(input) === (firstNum - secondNum))
    {
        AnswerCorrect();
    }
    //if input is a number and is wrong then say incorrect
    else if (!isNaN(input))
    {
        AnswerIncorrect();
    }
    //if input isnt a number then say it isnt valid
    else
    {
        AnswerInvalid();
    }

    console.log(`On to the next one!`);
    problemNumber++;
}

//gives a random multiplication question to the user
function RandomMultiply(firstNum, secondNum)
{
    //prints problem number first
    console.log(`${problemNumber})`);

    var input = prompt(`${firstNum} * ${secondNum} = ? \n`);

    //if player can skip (20 questions mode) and does skip, then skip
    if (gameMode === 1 && input === "skip")
    {
        SkipQuestion();
    }
    //decide if answer is correct
    else if (Number(input) === (firstNum * secondNum))
    {
        AnswerCorrect();
    }
    //if input is a number and is wrong then say incorrect
    else if (!isNaN(input))
    {
        AnswerIncorrect();
    }
    //if input isnt a number then say it isnt valid
    else
    {
        AnswerInvalid();
    }

    console.log(`On to the next one!`);
    problemNumber++;
}

//gives a random division question to the user
function RandomDivide(firstNum, secondNum)
{
    //prints problem number first
    console.log(`${problemNumber})`);

    var input = prompt(`${firstNum} / ${secondNum} = ? \n`);

    //if player can skip (20 questions mode) and does skip, then skip
    if (gameMode === 1 && input === "skip")
    {
        SkipQuestion();
    }
    //decide if answer is correct
    else if (Number(input) === (firstNum / secondNum))
    {
        AnswerCorrect();
    }
    //if input is a number and is wrong then say incorrect
    else if (!isNaN(input))
    {
        AnswerIncorrect();
    }
    //if input isnt a number then say it isnt valid
    else
    {
        AnswerInvalid();
    }

    console.log(`On to the next one!`);
    problemNumber++;
}

//gives a random modulo question to the user
function RandomModulo(firstNum, secondNum)
{
    //prints problem number first
    console.log(`${problemNumber})`);

    var input = prompt(`${firstNum} % ${secondNum} = ? \n`);

    //if player can skip (20 questions mode) and does skip, then skip
    if (gameMode === 1 && input === "skip")
    {
        SkipQuestion();
    }
    //decide if answer is correct
    else if (Number(input) === (firstNum % secondNum))
    {
        AnswerCorrect();
    }
    //if input is a number and is wrong then say incorrect
    else if (!isNaN(input))
    {
        AnswerIncorrect();
    }
    //if input isnt a number then say it isnt valid
    else
    {
        AnswerInvalid();
    }

    console.log(`On to the next one!`);
    problemNumber++;
}



//chooses any random integer since there isnt a built in random integer function
function RandomInt(min, max)
{
    min = Math.ceil(min);
    max = Math.floor(max);

    return Number(Math.floor(Math.random() * (max - min + 1)) + min);
}

//adds points and prints score if answer correct
function AnswerCorrect()
{
    score += 10;
    console.log(`Correct!`);
    console.log(`Your score is ${score}`);
    CheckPrintLives();
}

function SkipQuestion()
{
    //only allows user to skip in 20 questions mode
    if(gameMode === 1)
    {
        console.log(`Skip! No Penalty.`);
        console.log(`Your score is ${score}`);
    }
    else
    {
        AnswerInvalid();
    }
    
}

function AnswerIncorrect()
{
    //if 20 questions, only detract from score
    if (gameMode === 1)
    {
        score -= 5;
    }
    //otherwise, also detract a life
    else
    {   
        score -= 5;
        lives --;
    }
    console.log(`Incorrect!`);
    console.log(`Your score is ${score}`);
    CheckPrintLives();
}

function AnswerInvalid()
{
    //if 20 questions, only detract from score
    if (gameMode === 1)
    {
        score -= 5;
    }
    //otherwise, also detract a life
    else
    {   
        score -= 5;
        lives --;
    }
    console.log(`Invalid input!`);
    console.log(`Your score is ${score}`);
    CheckPrintLives();
}

//ending game function
function GameEnd()
{
    console.log(`That's the game!`);
    console.log(`Your final score is ${score}!`);
    console.log(`Thanks for playing!`);
}

//used in the correct and incorrect logic to print lives as long as program is 3 out
function CheckPrintLives()
{
    if(gameMode === 2)
    {
        console.log(`You have ${lives} lives left.`);
    }
}