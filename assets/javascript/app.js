var qAndA = [
    {
        question: '<div class="question-display">This is question 1</div>',
        guess1: '<div class="guesses" answerID="0">This is answer one, question 1</div',
        guess2: '<div class="guesses" answerID="0">This is answer two, question 1</div>',
        guess3: '<div class="guesses" answerID="1">This is answer three, question 1</div>',
        guess4: '<div class="guesses" answerID="0">This is answer four, question 1</div>',
        img: '<img src="https://placehold.it/150" alt="image">',
        correct: '<div class="answer-display">The answer is three</div',
    },

    {
        question: '<div class="question-display">This is question 2</div>',
        guess1: '<div class="guesses" answerID="0">This is answer one, question 2</div>',
        guess2: '<div class="guesses" answerID="0">This is answer two, question 2</div>',
        guess3: '<div class="guesses" answerID="1">This is answer three, question 2</div>',
        guess4: '<div class="guesses" answerID="0">This is answer four, question 2</div>',
        img: '<img src="https://placehold.it/200" alt="image">',
        correct: '<div class="answer-display">The answer is three</div',
    },

    {
        question: '<div class="question-display">This is question 3</div>',
        guess1: '<div class="guesses" answerID="0">This is answer one, question 3</div>',
        guess2: '<div class="guesses" answerID="0">This is answer two, question 3</div>',
        guess3: '<div class="guesses" answerID="1">This is answer three, question 3</div>',
        guess4: '<div class="guesses" answerID="0">This is answer four, question 3</div>',
        img: '<img src="https://placehold.it/250" alt="image">',
        correct: '<div class="answer-display">The answer is three</div',
    },
]

var count = 3;
var intervalId;
var timeoutId;
var questionNum = 0;
var win = 0;
var loss = 0;


//function to start question and answer timer
function startTimer() {
    intervalId = setInterval(counter, 1000);
    clearTimeout(timeoutId);
}

//function to display answer timer
function answerTimer() {
    timeoutId = setTimeout(display, 5000);
    clearInterval(intervalId);
    count = 30;
}

function counter() {
    count--;
    $("#time-counter").text(count);
    if (count < 1) {
        clearInterval(intervalId);
        displayAnswer();
        answerTimer();
        loss++;
    }
};


//general function to display answer

function displayAnswer() {
    //clear questions and answers field
    $("#time-cont").empty();
    $("#questions").empty()
    $("#answers").empty();
    $("#answers").html(qAndA[questionNum].img);
    questionNum++;
}

//general function to populate questions into HTML and start game play
function display() {
    if (questionNum > qAndA.length - 1) {
        displayFinalScore();
    }
    else {
    $("#time-cont").html('Time Remaining: <span id="time-counter">30</span>');
    $("#questions").html(qAndA[questionNum].question);
    $("#answers").html(qAndA[questionNum].guess1);
    $("#answers").append(qAndA[questionNum].guess2);
    $("#answers").append(qAndA[questionNum].guess3);
    $("#answers").append(qAndA[questionNum].guess4);
    startTimer();
    guessClick();
    }
}

function guessClick() {

    $(".guesses").on("click", function () {
        guess = $(this).attr("answerID");
        if (guess == 1) {
            win++
            displayAnswer();
            answerTimer();
        }
        else {
            loss++;
            displayAnswer();
            answerTimer();
        }
    })
}

//function to display last screen
function displayFinalScore() {
    //test
    console.log("final score");
    //clear all field
    $("#time-cont").empty();
    $("#questions").empty()
    $("#answers").empty();
    //insert wins
    $("#wins").html("<p>You guessed " + win + " answers correctly</p>")
    //insert losses
    $("#losses").html("<p>You guessed " + loss + " answers incorrectly</p>")
    //clearInterval clearTimeout
    clearTimeout(timeoutId);
    clearInterval(intervalId);
    //insert restartGame() functionality and display restart button
    $("#restart").html('<button id="restart-btn">RESTART</button>');
    restartGame();
}



//restart game function without refreshing page
function restartGame() {
    $("#restart-btn").on("click", function () {
        win = 0;
        loss = 0;
        //startTimer
        //displayQuestion from first question.
        display();
    })
}


$("#start").on("click", function () {

    $("#start-cont").empty();

    display();

});



/*
Restart button doesn't work
*/
