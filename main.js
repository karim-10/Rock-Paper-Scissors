
const five = document.getElementById("five")
const ten = document.getElementById("ten")
const fifteen = document.getElementById("fifteen")
const twenthy = document.getElementById("twenthy")
const container = document.getElementById("container")
const roundContainer = document.getElementById("round-container")
const roundTotal = document.getElementById("round-total")
const roundSpan = document.getElementById("round")
const userScore = document.getElementById("user-score")
const computerScore = document.getElementById("computer-score")
const resultDiv = document.getElementById("result")
// let round
let counter = 0

let userScoreCounter = 0
let computerScoreCounter = 0

getRounds()

function getRounds() {
    if (five.checked) {
        // round = 5
        return 5
    } else if (ten.checked) {
        // round = 10
        return 10
    } else if (fifteen.checked) {
        // round = 15
        return 15
    } else if (twenthy.checked) {
        // round = 20
        return 20
    }
    // return round
    // console.log(round)
}

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"]
    let random = Math.floor(Math.random() * 3) //0 oder 1 oder 2
    //0<=Math.random()<1
    //0<=Math.random()*3<3
    //0 1 2
    return choices[random]
}
console.log(getComputerChoice())

function compare(userChoice, computerChoice) {
    switch (userChoice + computerChoice) {
        case 'paperrock':
        case 'scissorspaper':
        case 'rockscissors':
            return 'win'
        case 'rockpaper':
        case 'paperscissors':
        case 'scissorsrock':
            return 'lost'
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
            return 'draw'
    }
}
console.log(compare('paper', 'scissors'))
console.log(compare('paper', 'paper'))
console.log(compare('scissors', 'paper'))


function game(userChoice) {
    console.log({ userChoice })
    let computerChoice = getComputerChoice()
    console.log({ computerChoice })
    let round = getRounds()
    roundTotal.innerHTML = round
    console.log(round)
    container.style.display = "none"
    roundContainer.style.display = "block"
    if (counter < round) {
        counter++
        let result = compare(userChoice, computerChoice)
        console.log(result)
        if (result == "win") {
            userScoreCounter++
            resultDiv.innerHTML = `you win`
            document.getElementById(userChoice).classList.add('winningStyles')
            setTimeout(function () { document.getElementById(userChoice).classList.remove('winningStyles') }, 1000);
        } else if (result == "lost") {
            computerScoreCounter++
            resultDiv.innerHTML = `you lost`
            document.getElementById(userChoice).classList.add('losingStyles')
            setTimeout(function () { document.getElementById(userChoice).classList.remove('losingStyles') }, 1000);
        } else {
            resultDiv.innerHTML = `draw`
            document.getElementById(userChoice).classList.add('drawStyles')
            setTimeout(function () { document.getElementById(userChoice).classList.remove('drawStyles') }, 1000);
        }
        if (counter == round) {
            if (userScoreCounter > computerScoreCounter) {
                resultDiv.innerHTML = `user win`
            } else if (userScoreCounter < computerScoreCounter) {
                resultDiv.innerHTML = `computer win`
            } else {
                resultDiv.innerHTML = `draw between computer and user`
            }
        }
        userScore.innerHTML = userScoreCounter
        computerScore.innerHTML = computerScoreCounter
        roundSpan.innerHTML = counter
    }
}


function restart() {
    location.reload()
}