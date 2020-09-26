export default app => {
  if (app.page) {
    return [
      {
        name: 'description',
        content: app.page.attributes.description || app.$siteConfig.description
      },
      {
        property: 'og:title',
        content: app.page.attributes.title
      },
      {
        property: 'og:description',
        content: app.page.attributes.description || app.$siteConfig.description
      },
      {
        property: 'og:image',
        content: `${app.$siteConfig.url}${app.page.attributes.assets.cover || require('../assets/avatar.png')}`
      },
      {
        name: 'twitter:title',
        content: app.page.attributes.title
      },
      {
        name: 'twitter:description',
        content: app.page.attributes.description || app.$siteConfig.description
      },
      {
        property: 'twitter:image:src',
        content: `${app.$siteConfig.url}${app.page.attributes.assets.cover || require('../assets/avatar.png')}`
      }
    ]
  } else {
    return [
      {
        name: 'description',
        content: app.$siteConfig.description
      },
      {
        property: 'og:title',
        content: app.$siteConfig.title
      },
      {
        property: 'og:description',
        content: app.$siteConfig.description
      },
      {
        property: 'og:image',
        content: `${app.$siteConfig.url}${require('../assets/avatar.png')}`
      },
      {
        name: 'twitter:title',
        content: app.$siteConfig.title
      },
      {
        name: 'twitter:description',
        content: app.$siteConfig.description
      },
      {
        property: 'twitter:image:src',
        content: `${app.$siteConfig.url}${require('../assets/avatar.png')}`
      }
    ]
  }
}
