let toutLesCards = document.querySelectorAll('.card')
toutLesCards.forEach(card => {
    card.addEventListener('click', () => {
        card.style.boxShadow = '5px 5px 10px gray'
        let nouveauBouton = ''
        if (card.classList.contains('destruction')) {

        }else {
            card.classList.add('destruction')
            nouveauBouton = document.createElement('a')
            nouveauBouton.textContent = 'Détruire la card'
            nouveauBouton.classList.add('btn', 'btn-primary')
            nouveauBouton.style.backgroundColor = 'red'
            card.appendChild(nouveauBouton)  
            nouveauBouton.addEventListener('click', () => {
                card.remove()
            })
        }
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
boutonDePlat[0].addEventListener('click', () => {
    window.location.href="./public/html/Chili con carne Vénézuelien.html"
})
boutonDePlat[1].addEventListener('click', () => {
    window.location.href="./public/html/Civet de Sanglier à la bourguignonne.html"
})
boutonDePlat[2].addEventListener('click', () => {
    window.location.href="./public/html/Tartiflette.html"
})
let footer = document.querySelector('footer')
let div = footer.querySelector('div')
let divContact = div.querySelectorAll('div')[1]
let emailInput = document.createElement('input')
emailInput.placeholder = 'Entrez votre email'
divContact.appendChild(emailInput)