<template>
  <footer id="site-footer" class="site-footer">
    <div class="wrap">
      <section class="section" v-if="$themeConfig.footer.nav">
        <nav class="footer-nav">
          <ul>
            <li v-for="(item, index) in $themeConfig.footer.nav" :key="index">
              <a
                v-if="item.name === 'Feed'"
                :href="$feed.permalink"
                target="_blank">Feed</a>
              <a
                v-else-if="item.name === 'Font'"
                class="button"
                title="切换字体"
                @click="selectFont">{{ serif ? 'Serif' : 'Sans-serif' }}</a>
              <saber-link v-else :to="item.path">{{ item.name }}</saber-link>
            </li>
          </ul>
        </nav>
      </section>
      <section class="section">
        <div class="copyright">By {{ $siteConfig.author }} with ❤️</div>
      </section>
    </div>
  </footer>
</template>

<script>
export default {
  data: () => ({
    serif: JSON.parse((process.browser && localStorage.serif) || false)
  }),
  methods: {
    selectFont() {
      this.serif = localStorage.serif = !this.serif
      document.documentElement.classList.toggle('serif', this.serif)
    }
  }
}
</script>
