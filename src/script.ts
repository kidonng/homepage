import ga from 'ga-lite'

ga('create', 'UA-140053908-1', 'auto')
ga('send', 'pageview')

const about = document.querySelector<HTMLElement>('.about')
const avatar = document.querySelector<HTMLElement>('.avatar')
const language = document.querySelector<HTMLElement>('.language')
const close = document.querySelector<HTMLElement>('.close')
const english = document.querySelector<HTMLElement>('.english')
const chinese = document.querySelector<HTMLElement>('.chinese')
const profile = document.querySelector<HTMLElement>('.profile')
const email = document.querySelectorAll<HTMLAnchorElement>('.email')
let mouse = true

const toggleAbout = (e: { x: number; y: number }) => {
  about.classList.toggle('hidden')
  profile.classList.toggle('hidden')

  // Not mouse triggered toggle
  if (e.x === 0 && e.y === 0) {
    if (about.classList.contains('hidden')) avatar.focus()
    else mouse = false
  }
}

const adjustFocus = () => {
  if (!about.classList.contains('hidden') && !mouse) {
    mouse = true
    close.focus()
  }
}

const switchLanguage = () => {
  english.hidden = !english.hidden
  chinese.hidden = !chinese.hidden
}

about.addEventListener('transitionstart', adjustFocus)
avatar.addEventListener('click', toggleAbout)
language.addEventListener('click', switchLanguage)
close.addEventListener('click', toggleAbout)
document.addEventListener('keydown', (e) => {
  if (!about.classList.contains('hidden') && e.key === 'Escape')
    toggleAbout({ x: 0, y: 0 })
})

email.forEach((el) => (el.href = `mailto:${atob('aGlAeHVhbm4ud2FuZw==')}`))
