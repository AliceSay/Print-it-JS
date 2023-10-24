const slides = [
  {
    image: 'slide1.jpg',
    tagLine: 'Impressions tous formats <span>en boutique et en ligne</span>',
  },
  {
    image: 'slide2.jpg',
    tagLine:
      'Tirages haute définition grand format <span>pour vos bureaux et events</span>',
  },
  {
    image: 'slide3.jpg',
    tagLine: 'Grand choix de couleurs <span>de CMJN aux pantones</span>',
  },
  {
    image: 'slide4.png',
    tagLine: 'Autocollants <span>avec découpe laser sur mesure</span>',
  },
]

const nbSlide = slides.length
const goBackbtn = document.querySelector('.goback-btn')
const goNextbtn = document.querySelector('.gonext-btn')
let image = document.querySelector('.banner-img')
let bulletPoints = document.querySelectorAll('.dot')
let imageText = document.querySelector('p') // Texte à changer
let current = 0

/* 
imageText.innerHTML = currentSlide.tagLine // <p>du texte dedans</p> TOUT
imageText.textContent = currentSlide.tagLine // <p>SEUELEMENT LE TEXTE</p>
*/

function slideNext() {
  bulletPoints[current].classList.remove('dot_selected') //enlève la classe selected avant de modifier current
  if (current < nbSlide - 1) {
    current++
  } else {
    current = 0
  }
  bulletPoints[current].classList.add('dot_selected') // Une fois current modifié, on attribue la classe dot_selected au nouveau bullet point
  let currentSlide = slides[current]
  image.setAttribute('src', 'assets/images/slideshow/' + currentSlide.image)
  imageText.innerHTML = currentSlide.tagLine // Modifie le texte
}

goNextbtn.addEventListener('click', slideNext)

function slideBack() {
  bulletPoints[current].classList.remove('dot_selected')
  if (current > 0) {
    current--
  } else {
    current = nbSlide - 1
  }
  bulletPoints[current].classList.add('dot_selected')
  let currentSlide = slides[current]
  image.setAttribute('src', 'assets/images/slideshow/' + currentSlide.image)
  imageText.innerHTML = currentSlide.tagLine
}

goBackbtn.addEventListener('click', slideBack)
