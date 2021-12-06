// Defining the elements in HTML 
let uRes = document.getElementById('uRes')
let cRes = document.getElementById('cRes')
let describe = document.getElementById('describe')
let roundShowRes = document.getElementById('roundShowRes')
let roundMaxShow = document.getElementById('roundMaxShow')
let roundShow = document.querySelector('.roundShow')
let form = document.querySelector('form')

// Making variables to process the game result outputs
// Generally, user is u and computer is c
let choices = ['rock', 'paper', 'scissor']
let rounds = 0 /* the number of rounds that user selected */
let uScore = 0
let cScore = 0
let uChoice;
let cChoice;
let beater; /* this variable shows the last result. w means win, u : loss for user and d is draw */
let finish = false

// difines ROUNDS to user selected and changes html element to be displayed after selection
function roundCheck(){
    let round5 = document.getElementById('round5').checked
    let round10 = document.getElementById('round10').checked
    let round15 = document.getElementById('round15').checked
    let round20 = document.getElementById('round20').checked
    switch (true){
        case (round5): rounds = 5;break;
        case (round10): rounds = 10;break;
        case (round15): rounds = 15;break;
        case (round20): rounds = 20;break;
    }
    form.setAttribute('style', 'display:none')
    roundShow.setAttribute('style', 'display:unset')
}

// generates a random choice for computer, then selects using index from choices array.
function cGen(){
    let cMoveIndex = Math.round(Math.random()*2)
    cChoice = choices[cMoveIndex]
}

// checks the result, affects the related variables and addes the css effect and html text
function resultChecker(a,b,c){
    switch (a+b){
        case 'rockrock':
        case 'paperpaper':
        case 'scissorscissor':
            beater = 'd';
            describe.innerHTML = 'Draw !'
            c.setAttribute('class', 'reactResdraw')  /* win/loss color effect */
            break

        case 'rockscissor':
        case 'paperrock':
        case 'scissorpaper':
            beater = 'u';
            uScore++
            describe.innerHTML = 'User beats the Computer.You won !'
            c.setAttribute('class', 'reactReswin')
            break

        case 'scissorrock':
        case 'rockpaper':
        case 'paperscissor':
            c.setAttribute('class', 'reactResloss')
            beater = 'c';
            cScore++
            describe.innerHTML = 'Computer beats the User.You lost !'
            break
    }
}


let roundCounter = 1 /* the number of rounds */
let signs = document.querySelector('.signs')

// this event is made for the div containig 3 images.after click it defines which image is selected
signs.addEventListener('click',(i) =>{
    let selected = i.srcElement /* defines which one is selected*/
    if (finish == false && rounds > 0){ /* checks if the rounds is not finished and round by user is selected */
        roundShowRes.innerHTML = roundCounter
        roundMaxShow.innerHTML = rounds
        roundCounter++ 
        let uChoice = selected.id
        cGen(); /* then generates cChoice */
        resultChecker(uChoice,cChoice,selected);

        uRes.innerHTML = uScore
        cRes.innerHTML = cScore
        if (roundCounter == rounds+1){ /* checks the ending of the game */
            finish = true
            if (uScore > cScore) {
                describe.innerHTML = 'YOU WON'
            }
            else if (uScore < cScore) {
                describe.innerHTML = 'YOU Lost'
            }
        }
        setTimeout(() => (selected.classList.remove("reactResdraw")), 770)
        setTimeout(() => (selected.classList.remove("reactReswin")), 770)
        setTimeout(() => (selected.classList.remove("reactResloss")), 770)
        }
    }
)
