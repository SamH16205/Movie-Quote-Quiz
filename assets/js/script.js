var correctAnswers = ["The Godfather", "Dog Day Afternoon", "Casablanca", "Evil Dead 2", "Network", "Fantastic Mr.Fox", "Shawn of the Dead", "Tombstone", "There Will be Blood", "Apocalypse Now", "Dazed and Confused", "The Shining"]
var score = 0
var currentQuestion = -1
var scoreCard = document.querySelector("p")
var highscoreText = document.querySelector("h4")
if (localStorage.getItem('userNameAndScore') !== null){
    var currentHighScore = JSON.parse(localStorage.getItem('userNameAndScore'))['playerScore']
    var currentHighScoreName = JSON.parse(localStorage.getItem('userNameAndScore'))['name']
    highscoreText.textContent = "High Score: " + currentHighScoreName + " " + currentHighScore + "pts"
} 
var questions = [

    ["I'm gonna make him an offer he can't refuse.", "The Godfather","The Good, the Bad, and the Ugly", "Miller's Crossing", "Gone With the Wind"],

    ["Attica! Attica!", "Fear and Loathing in Las Vegas", "Sparticus", "Dog Day Afternoon", "Mad Max"],

    ["We'll always have Paris", "Inception", "Amelie", "Midnight in Paris", "Casablanca"],

    ["Groovy...", "The Bee Movie", "Cars 3", "Evil Dead 2", "The Polar Express"],

    ["I'm mad as hell, and I'm not going to take it anymore!" , "Network", "Wallstreet", "Glengarry Glen Ross", "Paris, Texas"],

    ["If what I think is happening is happening... it better not be", "Fantastic Mr.Fox", "Fear and Loathing in Las Vegas", "Giant", "Finding Dory"],

    ["You've got red on you.", "Pulp Fiction", "Shawn of the Dead", "Taxi Driver", "Snatch"],

    ["I'm your huckleberry.", "Tombstone", "Stagecoach", "Unforgiven", "The Searchers"],

    ["I drink your milkshake! I drink it up!", "The Fifth Element", "The Big Lebowski", "Trainspotting", "There Will be Blood"],

    ["I love the smell of napalm in the morning.", "Apocalypse Now", "The Hurt Locker", "Oldboy", "The Thin Red Line"],

    ["Alright alright alright.", "Fast Times at Ridgemont High", "Dazed and Confused", "Everybody Wants Some", "Boyhood"],

    ["All work and no play makes Jack a dull boy.", "The Shining", "Happy Feet", "Hereditary", "Stalker"],

    [" ", " ", " ", " ", " "]

]

var secondsLeft = 90

// Event listener
var guessButtons = document.querySelectorAll(".guess-btn")
for (var button of guessButtons) {
    button.addEventListener("click", function(event){ 
        var userChoice = event.target.textContent
        if(userChoice === "Click to begin"){
            
            var myInt = setInterval(function(){
                if(secondsLeft>0 && currentQuestion < 12){
                secondsLeft --
                document.getElementById("timer").textContent = "Time: " + secondsLeft
                }else{
                    clearInterval(myInt)
                    endGame()
                }
            }
            , 1000)
            nextQuestion()
        }else{
            if(currentQuestion < 12){
            revealAnswer()
            referee(userChoice)
            setTimeout(nextQuestion, 1500)
            }
        }
    })
}

function nextQuestion(){
    resetButtons()
    currentQuestion ++
    var questionText = document.querySelector("#question")
    questionText.textContent = questions[currentQuestion][0]
    var choice1 = document.querySelector("#choice-1")
    choice1.textContent = questions[currentQuestion][1]
    var choice2 = document.querySelector("#choice-2")
    choice2.textContent = questions[currentQuestion][2]
    var choice3 = document.querySelector("#choice-3")
    choice3.textContent = questions[currentQuestion][3]
    var choice4 = document.querySelector("#choice-4")
    choice4.textContent = questions[currentQuestion][4]
    }


function resetButtons(){
    // Changes the color of the buttons back to grey
    for (const button of guessButtons) {
        button.style.backgroundColor = "rgb(15,15,15)"
    }
}

function referee(text){
    // keeps and updates score
if (correctAnswers.includes(text)){
    score ++
    scoreCard.textContent = "Current Score: " + score
}else{
    secondsLeft = secondsLeft - 10
}
}

function revealAnswer(){
    // makes the correct answer green and wrong answers red
    for (const button of guessButtons) {
        if(correctAnswers.includes(button.textContent)){
            button.style.backgroundColor = "green"
    }else{
        button.style.backgroundColor = "red"
    }
}
}

function endGame(){
    for (var button of guessButtons) {
        button.style.backgroundColor = "#711324"
        button.textContent = ''
}
    document.querySelector("#question").textContent = "Final Score: " + score
    var userName = document.createElement("input")
    var nameBox = document.createElement("h2")
    var submitButton = document.createElement("button")
    submitButton.textContent = "Submit"
    nameBox.textContent = "Enter your name"
    nameBox.style.color = "wheat"
    document.querySelector("section").appendChild(nameBox)
    document.querySelector("section").appendChild(userName)
    document.querySelector("section").appendChild(submitButton)
    submitButton.addEventListener("click", function(){
        var userNameAndScore ={
            name: userName.value,
            playerScore: score
        }
        if(score>currentHighScore || localStorage.getItem('userNameAndScore') == null){
        localStorage.setItem("userNameAndScore", JSON.stringify(userNameAndScore))
        }
    })
}