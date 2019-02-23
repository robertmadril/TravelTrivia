var qAndA = [
    {
        question: '<div class="question-display">This is question 1</div>',
        guess1: '<button class="guesses" answerID="0">This is answer one, question 1</button>',
        guess2: '<div class="guesses" answerID="0">This is answer two, question 1</div>',
        guess3: '<div class="guesses" answerID="1">This is answer three, question 1</div>',
        guess4: '<div class="guesses" answerID="0">This is answer four, question 1</div>',
        img: '<img src="image-1" alt="image">',
        correct: '<div class="answer-display">The answer is three</div',
    },

    {
        question: '<div class="question-display">This is question 2</div>',
        guess1: '<div class="guess-display" answerID="0">This is answer one, question 2</div>',
        guess2: '<div class="guess-display" answerID="0">This is answer two, question 2</div>',
        guess3: '<div class="guess-display" answerID="1">This is answer three, question 1</div>',
        guess4: '<div class="guess-display" answerID="0">This is answer four, question 1</div>',
        img: '<img src="image-1" alt="image">',
        correct: '<div class="answer-display">The answer is three</div',
    },
]

var count = 30;
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
    timeoutId = setTimeout(displayQuestion, 5000);
    clearInterval(intervalId);
    count = 30;
}

function counter() {
    count--;
    $("#time-counter").text(count);
    if (count < 1) {
        clearInterval(intervalId);
    };
}

//general function to display answer

function displayAnswer() {
    //clear questions and answers field
    $("#time-cont").empty();
    $("#questions").empty()
    $("#answers").empty();
    //display correct answer and img
    questionNum++;

}

//general function to populate questions into HTML
function displayQuestion() {
    $("#time-cont").html('Time Remaining: <span id="time-counter">30</span>');
    $("#questions").html(qAndA[questionNum].question);
    $("#answers").html(qAndA[questionNum].guess1);
    $("#answers").append(qAndA[questionNum].guess2);
    $("#answers").append(qAndA[questionNum].guess3);
    $("#answers").append(qAndA[questionNum].guess4);
    startTimer();
}

//function to display last screen
function displayFinalScore() {
    //clear all fields
    //insert wins
    //insert losses
    //clearInterval clearTimeout
    //insert restartGame() functionality and display restart button

}

//restart game function without refreshing page
function restartGame() {
    //startTimer
    //displayQuestion from first question. isFinished?
}


$("#start").on("click", function () {

    $("#start-cont").empty();

    displayQuestion();

    if (count < 1) {
        displayAnswer();
        answerTimer();
    }

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



});

/*
Counter does not displayAnswer() when reaching 0;
Can't click on second guess answers
*/
