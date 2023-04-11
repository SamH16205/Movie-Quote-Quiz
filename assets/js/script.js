var correctAnswers = ["The Godfather", "Dog Day Afternoon", "Casablanca", "Evil Dead 2", "Network", "Fantastic Mr.Fox", "Shawn of the Dead", "Tombstone", "There Will be Blood", "Apocalypse Now", "Dazed and Confused"]

var questions = {

    Q1 : {"I'm gonna make him an offer he can't refuse.": ["The Godfather","The Good, the Bad, and the Ugly", "Miller's Crossing", "Gone With the Wind"]},

    Q2 : {"Attica! Attica!" : ["Fear and Loathing in Las Vegas", "Sparticus", "Dog Day Afternoon", "Mad Max"]},

    Q3 : {"We'll always have Paris" : ["Inception", "Amelie", "Midnight in Paris", "Casablanca"]},

    Q4 : {"Groovy...": ["The Bee Movie", "Cars 3", "Evil Dead 2", "The Polar Express"]},

    Q5 : {"I'm mad as hell, and I'm not going to take it anymore!" : ["Network", "Wallstreet", "Glengarry Glen Ross", "Paris, Texas"]},

    Q6 : {"If what I think is happening is happening... it better not be" : ["Fantastic Mr.Fox", "Fear and Loathing in Las Vegas", "Giant", "Finding Dory"]},

    Q7 : {"You've got red on you.": ["Pulp Fiction", "Shawn of the Dead", "Taxi Driver", "Snatch"]},

    Q8 : {"I'm your huckleberry." : ["Tombstone", "Stagecoach", "Unforgiven", "The Searchers"]},

    Q9 : {"I drink your milkshake! I drink it up!" : ["The Fifth Element", "The Big Lebowski", "Trainspotting", "There Will be Blood"]},

    Q10 : {"I love the smell of napalm in the morning." : ["Apocalypse Now", "The Hurt Locker", "Oldboy", "The Thin Red Line"]},

    Q11 : {"Alright alright alright." : ["Fast Times at Ridgemont High", "Dazed and Confused", "Everybody Wants Some", "Boyhood"]}
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
