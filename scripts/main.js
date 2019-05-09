window.addEventListener('DOMContentLoaded', () => {
  console.log('DaftPunk : sample triggers')

  const helmets = document.querySelector('.helmets')

  const wavAfter = document.querySelector('.afterWav')
  const wavBetter = document.querySelector('.betterWav')
  const wavDoit = document.querySelector('.doitWav')
  const wavEver = document.querySelector('.everWav')
  const wavFaster = document.querySelector('.fasterWav')
  const wavHarder = document.querySelector('.harderWav')
  const wavHour = document.querySelector('.hourWav')
  const wavMakeit = document.querySelector('.makeitWav')
  const wavMakesus = document.querySelector('.makesusWav')
  const wavMorethan = document.querySelector('.morethanWav')
  const wavNever = document.querySelector('.neverWav')
  const wavOur = document.querySelector('.ourWav')
  const wavOver = document.querySelector('.overWav')
  const wavStronger = document.querySelector('.strongerWav')
  const wavWorkis = document.querySelector('.workisWav')
  const wavWorkit = document.querySelector('.workitWav')

  const buttons = document.querySelectorAll('.button')

  const buttonAfter = document.querySelector('.after')
  const buttonBetter = document.querySelector('.better')
  const buttonDoit = document.querySelector('.doit')
  const buttonEver = document.querySelector('.ever')
  const buttonFaster = document.querySelector('.faster')
  const buttonHarder = document.querySelector('.harder')
  const buttonHour = document.querySelector('.hour')
  const buttonMakeit = document.querySelector('.makeit')
  const buttonMakesus = document.querySelector('.makesus')
  const buttonMorethan = document.querySelector('.morethan')
  const buttonNever = document.querySelector('.never')
  const buttonOur = document.querySelector('.our')
  const buttonOver = document.querySelector('.over')
  const buttonStronger = document.querySelector('.stronger')
  const buttonWorkis = document.querySelector('.workis')
  const buttonWorkit = document.querySelector('.workit')


  helmets.addEventListener('mousedown', (e) => {
    console.log('reset')
    location.reload()
  })


  let speed = 1

  const slider = document.querySelector('.slider')


  slider.addEventListener('change', (e) => {
    speed = ((e.target.value)/50)
    console.log('Speed Multiplier: '+ speed)

  })

  buttons.forEach(name => {
    name.addEventListener('mouseout', (event) => {
      event.target.classList.remove('clicked')
    })
    name.addEventListener('mouseup', (event) => {
      event.target.classList.remove('clicked')
    })
    name.addEventListener('mousedown', (event) => {
      event.target.classList.add('clicked')
    })

  })



  buttonMakeit.addEventListener('mousedown', () => {
    wavMakeit.currentTime = 0
    wavMakeit.playbackRate = speed
    wavMakeit.play()
  })

  buttonMakesus.addEventListener('mousedown', () => {
    wavMakesus.currentTime = 0
    wavMakesus.playbackRate = speed
    wavMakesus.play()
  })

  buttonMorethan.addEventListener('mousedown', () => {
    wavMorethan.currentTime = 0
    wavMorethan.playbackRate = speed
    wavMorethan.play()
  })

  buttonNever.addEventListener('mousedown', () => {
    wavNever.currentTime = 0
    wavNever.playbackRate = speed
    wavNever.play()
  })

  buttonOur.addEventListener('mousedown', () => {
    wavOur.currentTime = 0
    wavOur.playbackRate = speed
    wavOur.play()
  })

  buttonOver.addEventListener('mousedown', () => {
    wavOver.currentTime = 0
    wavOver.playbackRate = speed
    wavOver.play()
  })

  buttonStronger.addEventListener('mousedown', () => {
    wavStronger.currentTime = 0
    wavStronger.playbackRate = speed
    wavStronger.play()
  })


  buttonWorkis.addEventListener('mousedown', () => {
    wavWorkis.currentTime = 0
    wavWorkis.playbackRate = speed
    wavWorkis.play()
  })

  buttonWorkit.addEventListener('mousedown', () => {
    wavWorkit.currentTime = 0
    wavWorkit.playbackRate = speed
    wavWorkit.play()
  })

  buttonAfter.addEventListener('mousedown', () => {
    wavAfter.currentTime = 0
    wavAfter.playbackRate = speed
    wavAfter.play()
  })

  buttonBetter.addEventListener('mousedown', () => {
    wavBetter.currentTime = 0
    wavBetter.playbackRate = speed
    wavBetter.play()
  })

  buttonDoit.addEventListener('mousedown', () => {
    wavDoit.currentTime = 0
    wavDoit.playbackRate = speed
    wavDoit.play()
  })
  buttonEver.addEventListener('mousedown', () => {
    wavEver.currentTime = 0
    wavEver.playbackRate = speed
    wavEver.play()
  })

  buttonFaster.addEventListener('mousedown', () => {
    wavFaster.currentTime = 0
    wavFaster.playbackRate = speed
    wavFaster.play()
  })

  buttonHarder.addEventListener('mousedown', () => {
    wavHarder.currentTime = 0
    wavHarder.playbackRate = speed
    wavHarder.play()
  })
  buttonHour.addEventListener('mousedown', () => {
    wavHour.currentTime = 0
    wavHour.playbackRate = speed
    wavHour.play()
  })

})
