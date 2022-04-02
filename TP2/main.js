const cards = document.querySelectorAll('.card-before')
const players = document.querySelectorAll('.player-before') 

players.forEach(e => {
    e.classList.replace('player-before', 'player')
    e.classList.add('anim')
    console.log(e)
})

cards.forEach(e => {
    e.classList.replace('card-before', 'anim')
    console.log(e)
})