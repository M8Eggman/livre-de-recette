let toutLesCards = document.querySelectorAll('.card')
toutLesCards.forEach(card => {
    card.addEventListener('click', () => {
        card.style.boxShadow = '5px 5px 10px gray'
    })
})
