let leftArrow = document.getElementById("leftarrow")
let righArrow = document.getElementById("rightarrow")
let openButton = document.getElementById("open")
let closeButton = document.getElementById("close")
let navBar = document.getElementById("navcontainer")

let slides = document.querySelectorAll(".slide")
let heroSlides = document.querySelectorAll(".hero-slide")
let activeSlide = 1
let numSlides = slides.length

righArrow.addEventListener("click", goForward)
leftArrow.addEventListener("click", goBack)

function goForward() {
  let next = slides[nextSlide(activeSlide) - 1]
  let current = slides[activeSlide - 1]
  let nextHero = heroSlides[nextSlide(activeSlide) - 1]
  let currentHero = heroSlides[activeSlide - 1]
  next.classList.remove("animating", "fromLeft")
  next.classList.add("fromRight", "animating", "active")
  next.classList.remove("fromRight")
  nextHero.classList.remove("animating", "fromBottom")
  nextHero.classList.add("fromTop", "animating", "active")
  nextHero.classList.remove("fromTop")

  current.classList.add("fromLeft")
  current.classList.remove("active")
  currentHero.classList.add("fromBottom")
  currentHero.classList.remove("active")
  
  activeSlide = nextSlide(activeSlide)

  slides[nextSlide(activeSlide) - 1].classList.remove("animating", "fromLeft")
  slides[nextSlide(activeSlide) - 1].classList.add("fromRight")
  heroSlides[nextSlide(activeSlide) - 1].classList.remove("animating", "fromBottom")
  heroSlides[nextSlide(activeSlide) - 1].classList.add("fromTop")
}

function goBack() {
  let prev = slides[previousSlide(activeSlide) - 1]
  let current = slides[activeSlide - 1]
  let prevHero = heroSlides[previousSlide(activeSlide) - 1]
  let currentHero = heroSlides[activeSlide - 1]
  prev.classList.remove("animating", "fromRight")
  prev.classList.add("fromLeft", "animating", "active")
  prev.classList.remove("fromLeft")
  
  prevHero.classList.remove("animating", "fromTop")
  prevHero.classList.add("fromBottom", "animating", "active")
  prevHero.classList.remove("fromBottom")

  current.classList.add("fromRight")
  current.classList.remove("active")
  
  currentHero.classList.add("fromTop")
  currentHero.classList.remove("active")
  
  activeSlide = previousSlide(activeSlide)

  slides[previousSlide(activeSlide) - 1].classList.remove("animating", "fromRight")
  slides[previousSlide(activeSlide) - 1].classList.add("fromLeft")
  
  heroSlides[previousSlide(activeSlide) - 1].classList.remove("animating", "fromTop")
  heroSlides[previousSlide(activeSlide) - 1].classList.add("fromBottom")
}

function nextSlide(val) {
  return (val + 1) > numSlides ? 1 : (val + 1)
}
function previousSlide(val) {
  return (val - 1) < 1 ? numSlides : (val - 1)
}

openButton.addEventListener("click", () => navBar.classList.add("active"))
closeButton.addEventListener("click", () => navBar.classList.remove("active"))