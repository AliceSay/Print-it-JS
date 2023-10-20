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
let bulletPoint = document.querySelectorAll('.dot')
let current = 0

function slideNext() {
  if (current < nbSlide - 1) {
    current++
  } else {
    current = 0
  }
  let changeImage = slides[current]
  image.setAttribute('src', 'assets/images/slideshow/' + changeImage.image)
}

goNextbtn.addEventListener('click', slideNext)

function slideBack() {
  if (current > 0) {
    current--
  } else {
    current = nbSlide - 1
  }
  let changeImage = slides[current]
  image.setAttribute('src', 'assets/images/slideshow/' + changeImage.image)
}

goBackbtn.addEventListener('click', slideBack)
