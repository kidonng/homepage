<template>
  <div>
    <h2 id="contents">
      <a href="#contents" class="header-anchor" aria-hidden="true">#</a> 目录
    </h2>
    <ul v-html="contents"></ul>
  </div>
</template>

<script>
export default {
  props: ['page'],
  computed: {
    contents() {
      const headings = this.page.markdownHeadings
      let html = ''
      let level

      headings.forEach((item, index) => {
        if (item.level === level + 1) {
          html += `<li class="sub-item"><ul>`
        } else while (level > item.level) {
          html += '</ul>'
          level--
        }

        html += `<li><a href="#${ item.slug }">${ item.text }</a>`
        level = item.level

        if (index === headings.length - 1) while (level > headings[0].level) {
          html += '</ul>'
          level--
        }
      })

      return html
    }
  }
}
</script>

<style>
.sub-item {
  list-style: none;
}
</style>
