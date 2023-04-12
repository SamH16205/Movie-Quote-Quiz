var correctAnswers = ["The Godfather", "Dog Day Afternoon", "Casablanca", "Evil Dead 2", "Network", "Fantastic Mr.Fox", "Shawn of the Dead", "Tombstone", "There Will be Blood", "Apocalypse Now", "Dazed and Confused"]

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

    ["Alright alright alright.", "Fast Times at Ridgemont High", "Dazed and Confused", "Everybody Wants Some", "Boyhood"]
]
var currentQuestion = -1

// Event listener
var guessButtons = document.querySelectorAll(".guess-btn")
for (var button of guessButtons) {
    button.addEventListener("click", nextQuestion
    )
}

function startTimer(){
    // Begins that 90 second timer
    var secondsLeft = 90
    setInterval(function(){
        if(secondsLeft>0){
        secondsLeft --
        document.getElementById("timer").textContent = "Time: " + secondsLeft
        }
    }
    , 1000)
}

function nextQuestion(){
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