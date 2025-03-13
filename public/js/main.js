let toutLesCards = document.querySelectorAll('.card')
toutLesCards.forEach(card => {
    card.addEventListener('click', () => {
        card.style.boxShadow = '5px 5px 10px gray'
    })
    card.addEventListener('mouseover', () => {
        card.style.backgroundColor = 'gray'
    })
    card.addEventListener('mouseout', () => {
        card.style.backgroundColor ='white'
    })
})
