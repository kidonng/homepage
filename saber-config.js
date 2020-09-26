module.exports = {
  siteConfig: {
    url: '***',
    title: 'The Story',
    description: "kidonng's Thoughts & Share",
    author: 'kidonng',
    lang: 'zh-CN'
  },
  theme: './packages/saber-theme-aimer',
  themeConfig: {
    home: {
      avatar: {
        path: '/about',
        title: 'About'
      },
      slogan: {
        name: 'Happy or not, the sun rises equally and ruthlessly',
        path: '***',
        title: 'Love Kano since 2014'
      },
      menu: [
        {
          name: 'Blog',
          path: '/blog',
          title: 'Thoughts & Share'
        },
        {
          name: 'GitHub',
          path: '***',
          title: 'Works & Open Source'
        },
        {
          name: 'Music',
          path: '***',
          title: 'Stick to no genre'
        },
        {
          name: 'Telegram',
          path: '***',
          title: 'Prefer email? Visit my GitHub profile'
        }
      ]
    },
    header: {
      logo_url: '/blog',
      nav: [
        {
          name: 'About',
          path: '/about'
        }
      ]
    },
    footer: {
      nav: [
        {
          name: 'Home',
          path: '/'
        },
        {
          name: 'Share',
          path: '/share'
        },
        {
          name: 'Feed'
        },
        {
          name: 'Font'
        }
      ]
    },
    googleAnalyticsId: 'UA-140053908-1'
  },
  permalinks: {
    post: '/blog/:slug',
    page: '/:slug'
  },
  markdown: {
    headings: {
      permalink: true
    },
    plugins: [
      {
        resolve: 'markdown-it-footnote'
      },
      {
        resolve: 'markdown-it-cjk-breaks'
      },
      {
        resolve: 'markdown-it-attrs',
        options: {
          leftDelimiter: '[',
          rightDelimiter: ']'
        }
      },
      {
        resolve: 'markdown-it-implicit-figures',
        options: {
          dataType: true,
          figcaption: true
        }
      },
      {
        resolve: 'markdown-it-imsize'
      }
    ]
  },
  plugins: [
    {
      resolve: './packages/saber-plugin-feed',
      options: {
        atomFeed: true,
        copyright: 'CC BY 4.0'
      }
    },
    {
      resolve: 'saber-plugin-query-posts',
      options: {
        perPage: 12,
        permalinks: {
          category: '/blog/categories/:slug',
          tag: '/blog/tags/:slug'
        }
      }
    },
    {
      resolve: 'saber-plugin-sitemap',
      options: {
        template: './sitemap.xml'
      }
    },
    {
      resolve: 'saber-plugin-prismjs'
    },
    {
      resolve: './packages/saber-plugin-image'
    }
  ]
}
