let rock = document.getElementById('rock')
let scissor = document.getElementById('scissor')
let paper = document.getElementById('paper')
let uRes = document.getElementById('uRes')
let cRes = document.getElementById('cRes')
let choices = ['rock', 'scissor', 'paper']
let rounds = 0
let uScore = 0
let cScore = 0
let uChoice;
let cChoice;
let beater;
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
    console.log('rounds = ' + rounds)
}
function cGen(){
    let cMoveIndex = Math.round(Math.random()*2)
    cChoice = choices[cMoveIndex]
}
function resultChecker(a,b){
    switch (a+b){
        case 'rockrock':
        case 'paperpaper':
        case 'scissorscissor':
            beater = 'draw';
            break

        case 'rockscissor':
        case 'paperrock':
        case 'scissorscissor':
            beater = 'User';
            uScore++
            break

        case 'scissorrock':
        case 'rockpaper':
            beater = 'Computer';
            cScore++
            break
    }
}
// function textCreator(){
//     let txt = document.createTextNode(`${beater} beats `)

// }

let signs = document.querySelector('.signs')
signs.addEventListener('click',i =>{
    let uChoice = i.path[0].id
    cGen();
    resultChecker(uChoice,cChoice);
    uRes.innerHTML = uScore
    cRes.innerHTML = cScore
    console.log(uChoice)
    console.log(cChoice)
    console.log(beater)
})

