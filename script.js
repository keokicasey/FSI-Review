let animals = document.querySelectorAll('.animal')
let dogTable = document.querySelector('#doggo-votes')
let catTable = document.querySelector('#catto-votes')
let fishTable = document.querySelector('#fish-votes')

let dogVotes = localStorage.getItem('dogVotes')
if (dogVotes === null){
    dogVotes = 0
}

let catVotes = localStorage.getItem('catVotes')
if (catVotes === null){
    catVotes = 0
}

let fishVotes = localStorage.getItem('fishVotes')
if (fishVotes === null){
    fishVotes = 0
}

for (let i = 0; i < animals.length; i++){
    let button = document.createElement('button')
    button.textContent = 'Vote'
    let idName = 'animal-votes-' + i
    button.setAttribute('id', idName)
    animals[i].append(button)
}

let dogButton = document.querySelector('#animal-votes-0')
dogButton.addEventListener('click', function(){
    dogVotes = parseInt(dogVotes) + 1
    dogTable.textContent = dogVotes
    localStorage.setItem('dogVotes', dogVotes)
})

let catButton = document.querySelector('#animal-votes-1')
catButton.addEventListener('click', function(){
    catVotes = parseInt(catVotes) + 1
    catTable.textContent = catVotes
    localStorage.setItem('catVotes', catVotes)
})

let fishButton = document.querySelector('#animal-votes-2')
fishButton.addEventListener('click', function(){
    fishVotes = parseInt(fishVotes) + 1
    fishTable.textContent = fishVotes
    localStorage.setItem('fishVotes', fishVotes)
})