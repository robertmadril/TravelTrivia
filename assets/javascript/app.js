//object containing trivia questions and answers

var qAndA = [
    //Questions are property of the lovely Ivy Morris
    {
        question: '<div class="question-display">What nations population, on average, takes the longest time to eat their meals?</div>',
        guess1: '<div class="guesses" id="spain" answerID="0">Spain</div',
        guess2: '<div class="guesses" id="argentina"answerID="0">Argentina</div>',
        guess3: '<div class="guesses" id="france" answerID="1">France</div>',
        guess4: '<div class="guesses" id="india" answerID="0">India</div>',
        img: '<img src="assets/images/france.png" class="flag" alt="french flag">',
        correct: '<p class="answer-display">The correct answer is France.</p>',
    },

    {
        question: '<div class="question-display">You’ll pay for things in ziotys in this country, known for its kielbasas and pierogis.</div>',
        guess1: '<div class="guesses" id="russia" answerID="0">Russia</div>',
        guess2: '<div class="guesses" id="japan" answerID="0">Japan</div>',
        guess3: '<div class="guesses" id="poland" answerID="1">Poland</div>',
        guess4: '<div class="guesses" id="croatia" answerID="0">Croatia</div>',
        img: '<img src="assets/images/poland.png" class="flag" alt="polish flag">',
        correct: '<p class="answer-display">The correct answer is Poland.</p>',
    },

    {
        question: '<div class="question-display">10,000 Yen might seem like a lot, but it’s really only about $90 in this country.</div>',
        guess1: '<div class="guesses" id="australia" answerID="0">Australia</div>',
        guess2: '<div class="guesses" id="vietnam" answerID="0">Vietnam</div>',
        guess3: '<div class="guesses" id="japan" answerID="1">Japan</div>',
        guess4: '<div class="guesses" id="bangladesh" answerID="0">Bangladesh</div>',
        img: '<img src="assets/images/japan.png" class="flag" alt="japanese flag">',
        correct: '<p class="answer-display">The correct answer is Japan.</p>',
    },

    {
        question: '<div class="question-display">You can find Frida Kahlos artwork at the Tucson Botanical Gardens, and at her museum in this countrys capital city.</div>',
        guess1: '<div class="guesses" id="usa" answerID="0">USA</div>',
        guess2: '<div class="guesses" id="brazil" answerID="0">Brazil</div>',
        guess3: '<div class="guesses" id="mexico" answerID="1">Mexico</div>',
        guess4: '<div class="guesses" id="england" answerID="0">England</div>',
        img: '<img src="assets/images/mexico.png" class="flag" alt="mexican flag">',
        correct: '<p class="answer-display">The correct answer is Mexico.</p>',
    },

    {
        question: '<div class="question-display">The worlds most remote weather station is located in what country?</div>',
        guess1: '<div class="guesses" id="china" answerID="0">China</div>',
        guess2: '<div class="guesses" id="nigeria" answerID="0">Nigeria</div>',
        guess3: '<div class="guesses" id="canada" answerID="1">Canada</div>',
        guess4: '<div class="guesses" id="peru" answerID="0">Peru</div>',
        img: '<img src="assets/images/canada.png" class="flag" alt="canadian flag">',
        correct: '<p class="answer-display">The correct answer is Canada.</p>',
    },

    {
        question: '<div class="question-display">Waza National Park is one of the most visited landmarks in this country.</div>',
        guess1: '<div class="guesses" id="thailand" answerID="0">Thailand</div>',
        guess2: '<div class="guesses" id="new-zealand" answerID="0">New Zealand</div>',
        guess3: '<div class="guesses" id="cameroon" answerID="1">Cameroon</div>',
        guess4: '<div class="guesses" id="portugal" answerID="0">Portugal</div>',
        img: '<img src="assets/images/cameroon.png" class="flag" alt="cameroonian flag">',
        correct: '<p class="answer-display">The correct answer is Cameroon.</p>',
    },

    {
        question: '<div class="question-display">The Joropo is the national dance of this country.</div>',
        guess1: '<div class="guesses" id="singapore" answerID="0">Singapore</div>',
        guess2: '<div class="guesses" id="ukraine" answerID="0">Ukraine</div>',
        guess3: '<div class="guesses" id="venezuela" answerID="1">Venezuela</div>',
        guess4: '<div class="guesses" id="switzerland" answerID="0">Switzerland</div>',
        img: '<img src="assets/images/venezuela.png" class="flag" alt="venezuelan flag">',
        correct: '<p class="answer-display">The correct answer is Venezuela.</p>',
    },

    {
        question: '<div class="question-display">Saltah, a brown stew traditionally served at lunch, is considered the national dish of what country?</div>',
        guess1: '<div class="guesses" id="south-africa" answerID="0">South Africa</div>',
        guess2: '<div class="guesses" id="colombia" answerID="0">Colombia</div>',
        guess3: '<div class="guesses" id="yemen" answerID="1">Yemen</div>',
        guess4: '<div class="guesses" id="greece" answerID="0">Greece</div>',
        img: '<img src="assets/images/yemen.png" class="flag" alt="yemen flag">',
        correct: '<p class="answer-display">The correct answer is Yemen.</p>',
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
    $("#answers").append(qAndA[questionNum].correct);
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
    $("#wins").html("<p>" + win + " answers were correct.</p>")
    //insert losses
    $("#losses").html("<p>" + loss + " answers were incorrect.</p>")
    //clearInterval clearTimeout
    clearTimeout(timeoutId);
    clearInterval(intervalId);
    //insert restartGame() functionality and display restart button
    $("#restart").html('<button id="restart-btn">Keep Exploring</button>');
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

add html questions/answers
question-specific css positioning

*/
