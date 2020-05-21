import ga from 'ga-lite'

ga('create', 'UA-140053908-1', 'auto')
ga('send', 'pageview')

const bio = document.querySelector<HTMLElement>('.bio')
const avatar = document.querySelector<HTMLElement>('.avatar')
const language = document.querySelector<HTMLElement>('.language')
const close = document.querySelector<HTMLElement>('.close')
const english = document.querySelector<HTMLElement>('.english')
const chinese = document.querySelector<HTMLElement>('.chinese')
let mouse = true

const toggleBio = (e: { x: number; y: number }) => {
  bio.classList.toggle('hidden')
  // Not mouse triggered click
  if (e.x === 0 && e.y === 0) {
    if (bio.classList.contains('hidden')) avatar.focus()
    else mouse = false
  }
}

const adjustFocus = () => {
  if (!bio.classList.contains('hidden') && !mouse) {
    mouse = true
    close.focus()
  }
}

const switchLanguage = () => {
  english.hidden = !english.hidden
  chinese.hidden = !chinese.hidden
}

bio.addEventListener('transitionstart', adjustFocus)
avatar.addEventListener('click', toggleBio)
language.addEventListener('click', switchLanguage)
close.addEventListener('click', toggleBio)
document.addEventListener('keydown', (e) => {
  if (!bio.classList.contains('hidden') && e.key === 'Escape')
    toggleBio({ x: 0, y: 0 })
})

document
  .querySelectorAll<HTMLAnchorElement>('.email')
  .forEach((el) => (el.href = window.atob('bWFpbHRvOmtpZG9ubmdAZ21haWwuY29t')))
