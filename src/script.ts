import ga from 'ga-lite'

ga('create', 'UA-140053908-1', 'auto')
ga('send', 'pageview')

const email = document.getElementById('email') as HTMLAnchorElement
email.href = `mailto:${atob('aGlAeHVhbm4ud2FuZw==')}`

console.info("Some people put cool stuff in the console, but I won't.")
