//selection de chaque card du site
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
            //selectionne la div dans la div pour pouvoir mettre le bouton a coté du premier et pas en dessous
            let divCard = card.querySelector('div')
            divCard.appendChild(nouveauBouton)  
            nouveauBouton.addEventListener('click', () => {
                card.remove()
            })
        }
    })
    card.addEventListener('mouseover', () => {
        card.style.backgroundColor = 'gray'
        card.style.transition = '500ms'
    })
    card.addEventListener('mouseout', () => {
        card.style.backgroundColor ='white'
    })
})
//selection de la deuxieme section qui est celle des plats
let section1 = document.querySelectorAll('section')[1]
let boutonDePlat = section1.querySelectorAll('.btn')
//ajout d'un lien pour chaque bouton dans la section
boutonDePlat[0].addEventListener('click', () => {
    window.location.href="./public/html/Chili con carne Vénézuelien.html"
})
boutonDePlat[1].addEventListener('click', () => {
    window.location.href="./public/html/Civet de Sanglier à la bourguignonne.html"
})
boutonDePlat[2].addEventListener('click', () => {
    window.location.href="./public/html/Tartiflette.html"
})
//selection de la deuxieme div dans la div du footer qui celle du contactez nous
let footer = document.querySelector('footer')
let div = footer.querySelector('div')
let divContact = div.querySelectorAll('div')[1]
//ajout de input 
let emailInput = document.createElement('input')
emailInput.placeholder = 'Entrez votre email'
divContact.appendChild(emailInput)
//ajout de bouton newsletter
let boutonNewsletter = document.createElement('button')
boutonNewsletter.textContent = "Newsletter"
divContact.appendChild(boutonNewsletter)
//recupere ce qu'il ya ecrit dans input et affiche une alert 
boutonNewsletter.addEventListener('click', () => {
    //verifie que linput nest pas vide puis le vide
    if (emailInput.value.length > 0) {
        alert("l'email "+emailInput.value+" à bien été ajouter a la newsletter")
        emailInput.value = ''
    } else {
        alert("Vous n'avez pas entrez de mail")
    }
})
