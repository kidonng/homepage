import ga from 'ga-lite'

ga('create', 'UA-140053908-1', 'auto')
ga('send', 'pageview')

const bio = document.querySelector<HTMLElement>('.bio')
const avatar = document.querySelector<HTMLElement>('.avatar')
const close = document.querySelector<HTMLElement>('.close')
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

bio.addEventListener('transitionstart', adjustFocus)
avatar.addEventListener('click', toggleBio)
close.addEventListener('click', toggleBio)
document.addEventListener('keydown', (e) => {
  if (!bio.classList.contains('hidden') && e.key === 'Escape')
    toggleBio({ x: 0, y: 0 })
})

document.querySelector<HTMLAnchorElement>('.email').href = window.atob(
  'bWFpbHRvOmtpZG9ubmdAZ21haWwuY29t'
)
