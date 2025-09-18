//in order to use prompt, add this line:
const prompt = require("prompt-sync")();

/*
//LEVEL 1 CODE
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



//LEVEL 2 CODE
var problemNumber = Number(1);
var score = Number(0);
var lives = Number(3);

var firstNum;
var secondNum;
var operatorIndex;

var lastFirstNum;
var lastSecondNum;
var lastOperatorIndex;

var gameMode;

console.log(`Welcome to the math game of wonders!`);
console.log(`You have 2 modes, 20 questions, and 3-out.`);
console.log(`Which do you want? \n Enter 1 for 20 questions \n Enter 2 for 3-out`);


SelectGameMode();

//selects if 20 questions or if 3 out
function SelectGameMode() 
{
    gameMode = Number(prompt(`Game mode: `));

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
    //keeps selecting new operator until it is different than the last operator
    operatorIndex = GetOperator();


    firstNum = GetFirstNum();
    secondNum = GetLastNum();

    CheckDivideZero();
    

    if (operatorIndex === 1)
    {
        RandomSum(firstNum, secondNum);
    }

    else if (operatorIndex === 2)
    {
        RandomSubtract(firstNum, secondNum);
    }

    else if (operatorIndex === 3)
    {
        RandomMultiply(firstNum, secondNum);
    }

    else if (operatorIndex === 4)
    {
        RandomDivide(firstNum, secondNum);
    }

    else if (operatorIndex === 5)
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

    var input = prompt(`${firstNum} + ${secondNum} = ?`);

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

    var input = prompt(`${firstNum} - ${secondNum} = ? `);

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

    var input = prompt(`${firstNum} * ${secondNum} = ? `);

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

    var input = prompt(`${firstNum} / ${secondNum} = ? `);

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

    var input = prompt(`${firstNum} % ${secondNum} = ? `);

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

//gets the operator to use in the equation
function GetOperator()
{
    while(lastOperatorIndex === operatorIndex)
    {
        operatorIndex = RandomInt(0, 5);
    }

    lastOperatorIndex = operatorIndex;
    return operatorIndex;
    
}

//gets the first number to use in the equation
function GetFirstNum()
{
    while(lastFirstNum === firstNum)
    {
        firstNum = RandomInt(0, 10);
    }

    lastFirstNum = firstNum;
    return firstNum;
    
}

//gets the last number to use in the equation
function GetLastNum()
{
    while(lastSecondNum === secondNum)
    {
        secondNum = RandomInt(0, 10);
    }

    lastSecondNum = secondNum;
    return secondNum;

}

//checks to make sure its not asking the user to divide by 0
function CheckDivideZero()
{
    if(operatorIndex === 2)
    {
        while(secondNum === 0)
        {
            scoreNum = GetSecondNum();
        }
    }
}


*/


//LEVEL 3 CODE
var problemNumber = Number(1);
var score = Number(0);
var lives = Number(3);

var firstNum;
var secondNum;
var operatorIndex;

//variables used to make sure each number is random and not the same as last time
var lastFirstNum;
var lastSecondNum;
var lastOperatorIndex;

//game mode setting. 1 is 20 questions and 2 is 3-out
var gameMode;

//game difficulty setting. 1 is for easy, 2 is for medium, and 3 is for hard
var gameDifficulty;

console.log(`Welcome to the math game of wonders!`);
console.log(`You have 2 modes, 20 questions, and 3-out.`);
console.log(`Which do you want? \n Enter 1 for 20 questions \n Enter 2 for 3-out`);


SelectGameMode();

//selects if 20 questions or if 3 out
function SelectGameMode() 
{
    gameMode = Number(prompt(`Game mode: `));

    if (gameMode === 1) 
    {
        console.log(`20 Questions`);
        SelectDifficultyMode();
    } 

    else if (gameMode === 2) 
    {
        console.log(`3-out`);
        SelectDifficultyMode();
    } 

    else 
    {
        console.log(`That's not valid, try again!`);
        SelectGameMode();
    }
}

//selects if mode is easy medium or hard
function SelectDifficultyMode() 
{
    console.log(`Now for the difficulty level! \n Enter 1 for easy \n Enter 2 for medium \n Enter 3 for hard`)
    
    gameDifficulty = Number(prompt(`Game difficulty mode: `));

    if (gameDifficulty === 1) 
    {
        console.log(`Easy`);
        KeepCorrectGameMode();
    } 

    else if (gameDifficulty === 2) 
    {
        console.log(`Medium`);
        KeepCorrectGameMode();
    } 

    else if (gameDifficulty === 3) 
    {
        console.log(`Hard`);
        KeepCorrectGameMode();
    } 

    else 
    {
        console.log(`That's not valid, try again!`);
        SelectDifficultyMode();
    }
}

//used for keeping the right game mode after selecting the difficulty
function KeepCorrectGameMode()
{
    if (gameMode === 1)
    {
        Mode20Questions();
    }
    else if (gameMode === 2)
    {
        Mode3Out();
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
    //keeps selecting new operator until it is different than the last operator
    operatorIndex = GetOperator();


    firstNum = GetFirstNum();
    secondNum = GetSecondNum();

    CheckDivideZero();
    

    if (operatorIndex === 1)
    {
        RandomSum(firstNum, secondNum);
    }

    else if (operatorIndex === 2)
    {
        RandomSubtract(firstNum, secondNum);
    }

    else if (operatorIndex === 3)
    {
        RandomMultiply(firstNum, secondNum);
    }

    else if (operatorIndex === 4)
    {
        RandomDivide(firstNum, secondNum);
    }

    else if (operatorIndex === 5)
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

    var input = prompt(`${firstNum} + ${secondNum} = ?`);

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

    var input = prompt(`${firstNum} - ${secondNum} = ? `);

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

    var input = prompt(`${firstNum} * ${secondNum} = ? `);

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

    var input = prompt(`${firstNum} / ${secondNum} = ? `);

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

    var input = prompt(`${firstNum} % ${secondNum} = ? `);

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

//gets the operator to use in the equation
function GetOperator()
{
    while(lastOperatorIndex === operatorIndex)
    {
        operatorIndex = GetCorrectOperator();
    }

    lastOperatorIndex = operatorIndex;
    return operatorIndex;
    
}

//gets the first number to use in the equation
function GetFirstNum()
{
    while(lastFirstNum === firstNum)
    {
        firstNum = GetCorrectFirstNum();
    }

    lastFirstNum = firstNum;
    return firstNum;
    
}

//gets the last number to use in the equation
function GetSecondNum()
{
    while(lastSecondNum === secondNum)
    {
        secondNum = GetCorrectSecondNum();
    }

    lastSecondNum = secondNum;
    return secondNum;

}

//checks to make sure its not asking the user to divide by 0
function CheckDivideZero()
{
    if(operatorIndex === 3)
    {
        while(secondNum === 0)
        {
            secondNum = GetSecondNum();
        }
    }
}

//makes sure only certain operators are used in each game mode
function GetCorrectOperator()
{
    if (gameDifficulty === 1)
    {
        //easy mode
        return RandomInt(1, 2);
    }
    else if (gameDifficulty === 2 || gameDifficulty === 3)
    {
        //medium mode and hard mode
        //both allow all different operators
        return RandomInt(1, 5);
    }
}

//makes sure only certain amounts of numbers are used for each game mode and operator
function GetCorrectFirstNum()
{
    if (gameDifficulty === 1)
    {
        //easy mode
        //only allows 1 digit options
        return RandomInt(0, 9);
    }
    else if (gameDifficulty === 2)
    {
        //medium mode
        //only allows 2 digits for add/subtract
        if (operatorIndex === 1 || operatorIndex === 2)
        {
            return RandomInt(0, 99);
        }
        //only allows 1 digit for multiply/divide/modulus
        else if (operatorIndex === 3 || operatorIndex === 4 || operatorIndex === 5)
        {
            return RandomInt(0, 9);
        }
    }

    else if (gameDifficulty === 3)
    {
        //hard mode
        //only allows 3 digits for add/subtract
        if (operatorIndex === 1 || operatorIndex === 2)
        {
            return RandomInt(0, 999);
        }
        //only allows 2 digit to multiply/divide/modulus
        else if (operatorIndex === 3 || operatorIndex === 4 || operatorIndex === 5)
        {
            return RandomInt(10, 99);
        }
    }
}

//makes sure only certain amounts of numbers are used for each game mode and operator
function GetCorrectSecondNum()
{
    if (gameDifficulty === 1)
    {
        //easy mode
        //only allows 1 digit options
        return RandomInt(0, 9);
    }
    else if (gameDifficulty === 2)
    {
        //medium mode
        //only allows 2 digits for add/subtract
        if (operatorIndex === 1 || operatorIndex === 2)
        {
            return RandomInt(0, 99);
        }
        //only allows 1 digit for multiply/divide/modulus
        else if (operatorIndex === 3 || operatorIndex === 4 || operatorIndex === 5)
        {
            return RandomInt(0, 9);
        }
    }

    else if (gameDifficulty === 3)
    {
        //hard mode
        //only allows 3 digits for add/subtract
        if (operatorIndex === 1 || operatorIndex === 2)
        {
            return RandomInt(0, 999);
        }
        //only allows 1 digit to multiply/divide/modulus
        else if (operatorIndex === 3 || operatorIndex === 4 || operatorIndex === 5)
        {
            return RandomInt(0, 9);
        }
    }
}