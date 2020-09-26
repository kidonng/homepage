<template>
  <div class="site-container">
    <Header />
    <SubHeader :page="page" v-if="page.attributes.assets.cover && page.pagination && (page.pagination.current === 1)" />
    <List :page="page" />
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
import List from '../components/List'
import SubHeader from '../components/SubHeader'
import meta from '../utils/meta'

export default {
  props: ['page'],
  components: {
    Header,
    Footer,
    List,
    SubHeader
  },
  head() {
    return {
      title: `${this.page.attributes.title} - ${this.$siteConfig.title}`,
      meta: meta(this)
    }
  }
}
</script>
