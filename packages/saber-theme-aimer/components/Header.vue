<template>
  <header
    id="site-header"
    class="site-header"
    :class="{ hidden, unpinned }"
    ref="header"
    @click="scrollToTop">
    <div class="wrap columns is-gapless is-mobile">
      <div class="column is-3-desktop">
        <saber-link
          class="site-title"
          :to="$themeConfig.header.logo_url">
          {{ $themeConfig.title || $siteConfig.title }}
        </saber-link>
      </div>
      <div v-if="$themeConfig.header.nav" class="topbar-nav-wrap column is-9-desktop">
        <nav class="topbar-nav">
          <ul>
            <li v-for="(item, index) in $themeConfig.header.nav" :key="index">
              <saber-link :to="item.path">{{ item.name }}</saber-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data: () => ({
    hidden: false,
    unpinned: false,
    scrollY: 0
  }),
  mounted() {
    document.addEventListener('scroll', this.scrollHandler)
  },
  beforeDestroy() {
    document.removeEventListener('scroll', this.scrollHandler)
  },
  methods: {
    scrollHandler() {
      this.unpinned = window.scrollY >= this.$refs.header.scrollHeight
      this.hidden = this.unpinned && window.scrollY >= this.scrollY
      this.scrollY = window.scrollY
    },
    scrollToTop(e) {
      if (e.target.tagName !== 'A'){
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      }
    }
  }
}
</script>
