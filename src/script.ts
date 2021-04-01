import ga from 'ga-lite'

const links = document.querySelector('.links')
const email = document.createElement('a')
email.textContent = 'Email'
email.href = `mailto:${atob('aGlAeHVhbm4ud2FuZw==')}`
links.append(email)

ga('create', 'UA-140053908-1', 'auto')
ga('send', 'pageview')

console.info('> Did you expect cool stuff in the console?')
