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

//*********Navigation***********//
const nbSlide = slides.length
const goBackbtn = document.querySelector('.goback-btn')
const goNextbtn = document.querySelector('.gonext-btn')
let current = 0

function slideNext() {
  slides[current].classList.remove('active')
  if (current < nbSlide - 1) {
    current++
  } else {
    count = 0
  }
  slides[current].classList.add('active')
}

goNextbtn.addEventListener('click', slideNext)

function slideBack() {
  slide[count].classList.remove('active')
  if (count > 0) {
    count--
  } else {
    count = nbSlide - 1
  }
  slide[count].classList.add('active')
  console.log(count)
}

goBackbtn.addEventListener('click', slideBack)
