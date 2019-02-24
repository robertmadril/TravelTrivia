//object containing trivia questions and answers

var qAndA = [
    {
        question: '<div class="question-display">What nations population, on average, takes the longest time to eat their meals?</div>',
        guess1: '<div class="guesses" id="spain" answerID="0">Spain</div',
        guess2: '<div class="guesses" id="argentina"answerID="0">Argentina</div>',
        guess3: '<div class="guesses" id="france" answerID="1">France</div>',
        guess4: '<div class="guesses" id="india" answerID="0">India</div>',
        //display flags here
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

//global variables
var count = 30;
var intervalId;
var timeoutId;
var questionNum = 0;
var win = 0;
var loss = 0;

//general function to display answer
function displayAnswer() {
    //clear questions and answers field
    $("#time-cont").empty();
    $("#questions").empty()
    $("#answers").empty();
    $("#answers").html(qAndA[questionNum].img);
    questionNum++;
};

//counter function
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

//function to start question and answer timer
function startTimer() {
    intervalId = setInterval(counter, 1000);
    clearTimeout(timeoutId);
};

//function to display answer timer
function answerTimer() {
    timeoutId = setTimeout(display, 5000);
    clearInterval(intervalId);
    count = 30;
};

//function to display last screen
function displayFinalScore() {
    //test
    console.log("final score");
    //clear all fields
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
};

//restart game function without refreshing page
function restartGame() {
    $("#restart-btn").on("click", function () {
        win = 0;
        loss = 0;
        questionNum = 0;
        $("#restart").empty();
        $("#wins").empty();
        $("#losses").empty();
        //display starts game at question 1
        display();
    })
};


//game play primary functions
//start game function
$("#start").on("click", function () {
    $("#start-cont").empty();
    display();
});

//general function to populate questions into HTML and start/continue game play
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
};

//guess click function that populates correct answer ID and checks if win or lose round
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
};



/*

To Do:

Clean formatting
add html questions
question-specific css positioning
*/
