import VueLazyload from 'vue-lazyload'

export default ({ Vue }) => {
  const options = Object.assign(
    (process.browser && __SABER_IMAGE_OPTIONS__) || {}, // eslint-disable-line no-undef
    { lazyComponent: true }
  )

  Vue.use(VueLazyload, options)

  Vue.component('saber-image', {
    props: ['src', 'lazy'],
    render(h) {
      const lazy = Object.assign(
        options,
        JSON.parse(this.$attrs['data-lazy'] || '{}'),
        this.lazy
      )

      const getOption = key =>
        lazy[key] || (lazy[key] !== false && options[key])

      const { $attrs } = this

      if (getOption('lazyLoad')) {
        if (typeof this.src === 'string') {
          const { src } = this

          return h('img', {
            attrs: $attrs,
            directives: [
              {
                name: 'lazy',
                value: {
                  src
                }
              }
            ]
          })
        }

        const { width, height, src, placeholder } = this.src

        const loading =
          (getOption('placeholder') && placeholder) ||
          lazy.placeholder ||
          options.placeholder

        return h('img', {
          attrs: {
            ...$attrs,
            width,
            height
          },
          directives: [
            {
              name: 'lazy',
              value: {
                src,
                loading
              }
            }
          ]
        })
      }

      if (typeof this.src === 'string') {
        return h('img', {
          attrs: { ...$attrs, src: this.src }
        })
      }

      const { src } = this.src
      return h('img', {
        attrs: { ...$attrs, src }
      })
    }
  })
}
