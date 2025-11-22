let pointEl = document.getElementById("point-el")
let pointsEl = document.getElementById("points-el")
let homeSave = document.getElementById("home-save")
let guestSave = document.getElementById("guest-save")
let foulEl = document.getElementById("foul-el")
let foulsEl = document.getElementById("fouls-el")

let point = 0
let points = 0
let foul = 0
let fouls = 0
let clear = 0

function plusOne() {
    point = point + 1
    pointEl.textContent = point
}

function plusTwo() {
    point = point + 2
    pointEl.textContent = point
}

function plusThree() {
    point = point + 3
    pointEl.textContent = point
}

function saveOne(){
    pointHome = point + " - "
    homeSave.textContent += pointHome
    pointEl.textContent = 0
    point = 0
}

function foulOne(){
    foulpoint = foul + 1
    foulEl.textContent = foulpoint
}



// second point buttons
function addOne() {
    points = points + 1
    pointsEl.textContent = points
}

function addTwo() {
    points = points + 2
    pointsEl.textContent = points
}

function addThree() {
    points = points + 3
    pointsEl.textContent = points
}
function saveTwo(){
    pointguest = points + " - "
    guestSave.textContent += pointguest
    pointsEl.textContent = 0
    points = 0
}

function foulTwo(){
    foulspoint = foul + 1
    foulsEl.textContent = foulspoint
}

// function reset(){
//     clear = clear + 0
//     pointEl.textContent = clear
//     pointsEl.textContent = clear
//     homeSave.textContent = clear
//     guestSave.textContent = clear
//     foulEl.textContent = clear
//     foulEl.textContent = clear
// }
