<template>
  <section class="page-comments">
    <div id="load-disqus" ref="load">
      <a class="button" @click="load">Comments</a>
    </div>
    <div id="disqus_thread"></div>
  </section>
</template>

<script>
import '../../DisqusJS/src/disqusjs.css'
import disqusjs from '../../DisqusJS/src/disqus'

export default {
  props: ['page'],
  methods: {
    load() {
      this.$refs.load.remove()

      const { shortname, siteName, api, apikey, admin, adminLabel } = this.$themeConfig.disqusjs
      const { title, url, author } = this.$siteConfig
      new disqusjs({
        shortname: shortname || author,
        siteName: siteName || title,
        identifier: this.page.attributes.permalink,
        url: `${url}${this.page.attributes.permalink}`,
        title: this.page.attributes.title,
        api,
        apikey,
        admin: admin || author,
        adminLabel
      })
    }
  }
}
</script>
