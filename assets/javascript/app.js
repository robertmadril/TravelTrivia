var count = 30;
var intervalId;
var timeoutId;

//function to start question and answer timer
function startTimer() {
    intervalId = setInterval(counter, 1000);
    clearTimeout(timeoutId);
}

//function to display answer timer
function displayAnswerTimer() {
    timeoutId = setTimeout(displayAnswer, 5000);
    clearInterval(intervalId);
}

function counter() {
    count--;
    $("#time-counter").text(count);
    if (count < 1) {
        count = 0;
        clearInterval(intervalId);
        displayAnswerTimer();
    };
}

//general function to display answer

function displayAnswer() {
//clear questions and answers field
//display correct answer and img

}

//general function to populate questions into HTML
function displayQuestion() {
//clear answers field
//display question and four clickable answers 
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

    $("#time-cont").html('Time Remaining: <span id="time-counter">30</span>');

    //call displayQuestion and populate correct answer into var



});

/*

$(".guesses").on("click", function() {
    guess = $(this).attr("answerId");
    if (answer === guess) {
        win++
        displayAnswerTimer();
    }
    else{
        loss++;
        displayAnswerTimer();
    }
})
*/
