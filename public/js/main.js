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
let section1 = document.querySelectorAll('section')[1]
let boutonDePlat = section1.querySelectorAll('.btn')
console.log(boutonDePlat)
boutonDePlat[0].addEventListener('click', () => {
    window.location.href="./public/html/Chili con carne Vénézuelien.html"
})
boutonDePlat[1].addEventListener('click', () => {
    window.location.href="./public/html/Civet de Sanglier à la bourguignonne.html"
})
boutonDePlat[2].addEventListener('click', () => {
    window.location.href="./public/html/Tartiflette.html"
})