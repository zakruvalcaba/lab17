// HELPER FUNCTION TO GET DOM ELEMENTS
const $ = (id) => document.getElementById(id)

function getRandomNumber() {
    // CREATE RANDOM NUMBER
    let random = Math.random()
    // RANDOM NUMBER BETWEEN 0 AND 6
    random = Math.floor(random * 6)
    // ADD 1 SO RANDOM IS NEVER 0 (1-6)
    random = random + 1
    // RETURN RANDOM NUMBER
    return random
}

function changePlayer() {
    // SWITCH TURN BY COMPARING SPAN TAG'S VALUE WITH PLAYER'S NAME
    if ($('current').innerHTML === $('player1').value) {
        $('current').innerHTML = $('player2').value
    } else {
        $('current').innerHTML = $('player1').value
    }
    // SET DIE AND TOTAL TEXT BOXES TO 0
    $('die').value = '0'
    $('total').value = '0'
    $('roll').focus()
}

function newGame() {
    // SET SCORES TO 0
    $('score1').value = '0'
    $('score2').value = '0'
    // CHECK TO SEE IF PLAYER NAMES EXIST
    if ($('player1').value !== '' || $('player2').value !== '') {
        $('turn').setAttribute('class', 'open')
        changePlayer()
    } else {
        $('turn').removeAttribute('class')
        alert('Please enter two player names to begin.')
    }
}

function rollDice() {
    // GET THE TOTAL
    let total = parseInt($('total').value)
    // GET RANDOM NUMBER BETWEEN 1-6
    let die = getRandomNumber()
    // IF DIE IS 1, 0 OUT TOTAL AND SWITCH PLAYER
    // OTHERWISE INCREMENT USER'S TEMPORARY TOTAL
    if (die <= 1) {
        total = 0
        changePlayer()
    } else {
        total = total + die
    }
    $('die').value = die
    $('total').value = total
}

function holdTurn() {
    let total, score
    // GET THE TOTAL
    total = parseInt($('total').value)
    // GET THE SCORE OF THE CURRENT PLAYER
    if ($('current').innerHTML === $('player1').value) {
        score = $('score1')
    } else {
        score = $('score2')
    }
    // ADD CURRENT SCORE TO TOTAL SCORE
    score.value = parseInt(score.value) + total
    // IF TOTAL SCORE IS 100, PLAYER WINS, START NEW GAME
    // OTHERWISE CHANGE PLAYER
    if (score.value >= 100) {
        alert(`${$('current').innerHTML} wins!`)
        newGame()
    } else {
        changePlayer()
    }
}

// EVENT LISTENERS FOR 'NEW GAME', 'ROLL', AND 'HOLD' BUTTONS
$('new_game').addEventListener('click', newGame)
$('roll').addEventListener('click', rollDice)
$('hold').addEventListener('click', holdTurn)