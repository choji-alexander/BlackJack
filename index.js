let player = {
    name: "CHOJI",
    chips: 245 
}

let cards = []
let sum = 0
let hasblackjack = false
let isAlive = false
let message = ""
let playerEl = document.getElementById('player-el')
let messageEl = document.getElementById('message-el')
let sumEL = document.getElementById("sum-el")
let cardsEL = document.querySelector('#cards-el')
playerEl.textContent = player.name + ': $' + player.chips

function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber === 1){
        return 11
    }
    else if (randomNumber > 10){
        return 10
    }
    else{
        return randomNumber

    }
}

function startGame(){
    isAlive = true
    let firstNum = getRandomCard()
    let secondNum = getRandomCard()
    cards = [firstNum, secondNum]
    sum = firstNum + secondNum
    renderGame()
}

function renderGame(){
    sumEL.textContent = "Sum: " + sum
    cardsEL.textContent = "Cards: "
    for (let card = 0; card < cards.length; card++){
        cardsEL.textContent += cards[card] + ' '
    }
    if (sum <= 20){
        message = "Do you want to draw a new card?"
    } else if (sum === 21){
        message = "You got Blackjack"
        hasblackjack = true
    } else {
        message = "You're out of the game"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard(){
    if (isAlive === true && hasblackjack === false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
    else {
        console.log("Can't get a new card")
    }
}
