import './styles/main.scss'
import galite from 'ga-lite'

export default ({ setHead, router }) => {
  if (process.browser) {
    import('smoothscroll-for-websites')

    document.documentElement.classList.toggle('serif', JSON.parse(localStorage.serif || false))

    if (process.env.NODE_ENV === 'production') {
      router.afterEach(to => {
        if (router.app.$themeConfig.googleAnalyticsId) {
          galite('create', router.app.$themeConfig.googleAnalyticsId, 'auto')
          router.app.$themeConfig.googleAnalyticsId = null
        } else {
          galite('set', 'page', to.fullPath)
          galite('send', 'pageview')
        }
      })
    }
  }

  setHead(function() {
    return {
      meta: [
        {
          name: 'author',
          content: this.$siteConfig.author
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          name: 'twitter:card',
          content: 'summary'
        },
        {
          name: 'twitter:creator',
          content: this.$siteConfig.author
        }
      ],
      link: [
        {
          rel: 'alternate',
          title: this.$siteConfig.title,
          href: this.$feed.permalink,
          type: this.$feed.type === 'atom'
            ? 'application/atom+xml'
            : this.$feed.type === 'rss2'
              ? 'application/rss+xml'
              : 'application/json'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com/',
          crossorigin: true
        }
      ]
    }
  })
}
