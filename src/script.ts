import ga from 'ga-lite'
import 'minireset.css'
import './style.css'

ga('create', 'UA-140053908-1', 'auto')
ga('send', 'pageview')

;(document.getElementById('email') as HTMLAnchorElement).href = `mailto:${atob(
  'aGlAeHVhbm4ud2FuZw=='
)}`
