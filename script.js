let timerMinutes = document.querySelector('#minutes')
const timerSeconds = document.querySelector('#seconds')
const buttonPlay = document.querySelector('#play')
const buttonStop = document.querySelector('#stop')
const buttonIncrease = document.querySelector('#increase')
const buttonDecrease = document.querySelector('#decrease')
const cardTree = document.querySelector('.card1')
const cardRain = document.querySelector('.card2')
const cardCity = document.querySelector('.card3')
const cardFire = document.querySelector('.card4')
const iconTree = document.querySelector('#icon1')
let minutes = Number((timerMinutes).textContent)
let seconds = Number((timerSeconds).textContent)
let timerTimeOut
let newMinutes = Number()
const treeAudio = new Audio("https://github.com/silviocn/sounds_Stage_5/blob/main/tree.wav?raw=true")
treeAudio.loop = true
const rainAudio = new Audio("https://github.com/silviocn/sounds_Stage_5/blob/main/rain.wav?raw=true")
rainAudio.loop = true
const cityAudio = new Audio("https://github.com/silviocn/sounds_Stage_5/blob/main/city.wav?raw=true")
cityAudio.loop = true
const fireAudio = new Audio("https://github.com/silviocn/sounds_Stage_5/blob/main/fire.wav?raw=true")
fireAudio.loop = true

function updateTimerDisplay(minutes, seconds) {
  timerMinutes.textContent = String(minutes).padStart(2, "0")
  timerSeconds.textContent = String(seconds).padStart(2, "0")
}

function countdown() {
  timerTimeOut = setTimeout(function() {

    let seconds =  Number(timerSeconds.textContent)
    let minutes = Number(timerMinutes.textContent)
    
    updateTimerDisplay(minutes, 0)

    if (minutes <= 0) {
      seconds = 0
      minutes = timerMinutes
      return
    }

    if (seconds <= 0) {
      minutes = --minutes
      seconds = 60
    }
    
    updateTimerDisplay(minutes, String(seconds - 1))

    countdown()
  }, 1000)
}

buttonPlay.addEventListener('click', function(){
  buttonPlay.disabled = true
  countdown()
})

buttonIncrease.addEventListener('click', function(){
  minutes = Number(timerMinutes.textContent) + 5
  timerMinutes.textContent = String(minutes).padStart(2,"0")
})

buttonStop.addEventListener('click', function(){
  clearTimeout(timerTimeOut)
  updateTimerDisplay(25, 0)
  buttonPlay.disabled = false
  cityAudio.pause()
  fireAudio.pause()
  rainAudio.pause()
  treeAudio.pause()
})

buttonDecrease.addEventListener('click', function(){
  if (minutes <= 5) {
    alert("Por favor, comece pelo menos com 5 minutos!")
  } else {
  minutes = Number(timerMinutes.textContent) - 5
  timerMinutes.textContent = String(minutes).padStart(2,"0")  
  }
})

cardTree.addEventListener('click', function(){
  cardTree.classList.add('selected')
  cardCity.classList.remove('selected')
  cardRain.classList.remove('selected')
  cardFire.classList.remove('selected')
  treeAudio.play()
  cityAudio.pause()
  // cityAudio.currentTime = 0; Se quiser que volte o áudio do início
  fireAudio.pause()
  rainAudio.pause()

  iconTree.style.color='#337ab7'

})

cardRain.addEventListener('click', function(){
  cardRain.classList.add('selected')
  cardCity.classList.remove('selected')
  cardTree.classList.remove('selected')
  cardFire.classList.remove('selected')
  rainAudio.play()
  treeAudio.pause()
  cityAudio.pause()
  fireAudio.pause()
})

cardCity.addEventListener('click', function(){
  cardCity.classList.add('selected')
  cardTree.classList.remove('selected')
  cardRain.classList.remove('selected')
  cardFire.classList.remove('selected')
  cityAudio.play()
  treeAudio.pause()
  fireAudio.pause()
  rainAudio.pause()
})

cardFire.addEventListener('click', function(){
  cardFire.classList.add('selected')
  cardCity.classList.remove('selected')
  cardRain.classList.remove('selected')
  cardTree.classList.remove('selected')
  fireAudio.play()
  cityAudio.pause()
  treeAudio.pause()
  rainAudio.pause()
})