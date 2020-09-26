<script>
import Index from './index'
import meta from '../utils/meta'

export default {
  extends: Index,
  head () {
    this.page.attributes.title = this.page.attributes.title || this.page.tag

    return {
      title: `${this.page.attributes.title} - ${this.$siteConfig.title}`,
      meta: meta(this)
    }
  }
}
</script>
