// Defining the elements in HTML 
let rock = document.getElementById('rock')
let scissor = document.getElementById('scissor')
let paper = document.getElementById('paper')
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

// checks the result and addes the css and html effect
function resultChecker(a,b,c){
    switch (a+b){
        case 'rockrock':
        case 'paperpaper':
        case 'scissorscissor':
            beater = 'd';
            describe.innerHTML = 'Draw !'
            c.setAttribute('class', 'reactResdraw')
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


let roundCounter = 1
let signs = document.querySelector('.signs')
signs.addEventListener('click',i =>{
    let selected = i.path[0]
    
    if (finish == false && rounds > 0){
        roundShowRes.innerHTML = roundCounter
        roundMaxShow.innerHTML = rounds
        roundCounter++
        let uChoice = i.path[0].id
        cGen();
        resultChecker(uChoice,cChoice,selected);
        uRes.innerHTML = uScore
        cRes.innerHTML = cScore
        if (roundCounter == rounds+1){
            finish = true
            if (uScore > cScore) {
                describe.innerHTML = 'YOU WON'
            }
            else if (uScore < cScore) {
                describe.innerHTML = 'YOU Lost'
            }
        }
        }
        
    }
)
