<template>
  <main>
    <div class="bg"></div>
    <div class="profile">
      <button
        class="avatar"
        ref="avatar"
        title="Show biography"
        @click="toggleBio"
      >
        <img
          src="https://gravatar.loli.net/avatar/131ee6195713dfb178c5f0582e85a0c1?s=200"
          alt="Avatar"
        />
      </button>

      <div>
        <h1 class="name">kidonng</h1>
        <ul>
          <li class="link" v-for="(link, name) in links" :key="name">
            <a :href="link">{{ name }}</a>
          </li>
        </ul>
      </div>
    </div>
    <transition name="fade" @enter="adjustFocus">
      <div class="bio" v-if="bio">
        <h2 class="title spacing">
          Hi, this is Kid.
          <button
            class="close"
            ref="close"
            title="Hide biography"
            @click="toggleBio"
          >
            <svg viewBox="0 0 24 24">
              <path
                d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
              />
            </svg>
          </button>
        </h2>
        <p class="text">
          I'm a web developer at <a href="https://team.ncuos.com/">NCUHOME</a>.
        </p>
        <p class="text">
          I think by writing and create for fun.
        </p>
        <p class="text">
          (Here used to be more text 😜)
        </p>
        <p class="text">
          More about me on my
          <a href="https://zh.wikipedia.org/wiki/User:Kidonng"
            >Wikipedia user page</a
          >.
        </p>
        <h2 class="title">Contact</h2>
        <ul>
          <li><a href="https://t.me/kidonng">Telegram</a></li>
          <li><a href="mailto:kidonng@gmail.com">Email</a></li>
        </ul>
      </div>
    </transition>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    bio: false,
    keyboard: false,
    links: {
      'Long Thoughts': 'https://www.notion.so/8934295471644607ae5f5a832682dba5',
      'Short Thoughts': 'https://t.me/s/kidaydream',
      Code: 'https://github.com/kidonng'
    }
  }),
  methods: {
    toggleBio(e: { x: number; y: number }) {
      this.bio = !this.bio
      if (e.x === 0 && e.y === 0) {
        // Keyboard triggered click
        if (this.bio) this.keyboard = true
        else (this.$refs.avatar as HTMLElement).focus()
      }
    },
    adjustFocus() {
      if (this.keyboard) {
        this.keyboard = false
        ;(this.$refs.close as HTMLElement).focus()
      }
    }
  },
  mounted() {
    document.addEventListener('keydown', e => {
      if (this.bio && e.key === 'Escape') this.toggleBio({ x: 0, y: 0 })
    })
  }
})
</script>

<style lang="stylus">
breakpoint = 600px
gap-1 = .5rem
gap-2 = 1rem
gap-3 = 1.5rem
gap-4 = 2rem
font-1 = 1.5rem
font-2 = 2.5rem
font-3 = 3rem
timing-1 = .25s
timing-2 = .5s
transparency = .5
translucent = transparentify(black transparency)

main
  color #4a4a4a
  font-family B612 Mono, monospace
  line-height 1.5

a
  color black

button
  background none
  border 0
  padding 0

.fade-enter-active
.fade-leave-active
  transition opacity .5s

.fade-enter
.fade-leave-to
  opacity 0

.bg
  height 100vh
  background-image url('assets/bg.webp')
  background-size cover
  opacity transparency * 1.2

  @media screen and (max-width: breakpoint)
    &
      background-position-x 40%

.bio
  position absolute
  top 0
  right 0
  bottom 0
  left 0
  background-color white
  transition opacity timing-2
  padding gap-3

  @media screen and (min-width: breakpoint)
    &
      padding-left 25vw
      padding-right 25vw

  &.hide
    opacity 0
    pointer-events none

  a:hover
    text-decoration none
    background-color black
    color white

  li
    margin-bottom gap-1
    @media screen and (min-width: breakpoint)
      &
        margin-bottom gap-2

    &::before
      content '- '

.title
  color black
  font-size font-1
  margin-bottom gap-1

  &:not(:first-of-type)
    margin-top gap-1

  @media screen and (min-width: breakpoint)
    &
      margin-bottom gap-2

      &:not(:first-of-type)
        margin-top gap-2

.spacing
  display flex
  justify-content space-between

.close
  width font-1
  vertical-align middle
  cursor pointer

  path
    transition fill timing-1

  &:hover path
    fill translucent

.text
  margin-bottom gap-1

  @media screen and (min-width: breakpoint)
    &
      margin-bottom gap-2

.profile
  position absolute
  bottom 0
  user-select none
  -moz-user-select none
  margin gap-2

  @media screen and (min-width: breakpoint)
    &
      display flex
      margin gap-4

.avatar
  width 100px
  transition opacity timing-1
  cursor pointer

  @media screen and (min-width: breakpoint)
    &
      margin-right gap-4

  &:hover
    opacity transparency

  img
    border-radius 100%

.name
  color black
  font-family Gaegu, cursive
  font-size font-2

  @media screen and (min-width: breakpoint)
    &
      font-size font-3

.link
  @media screen and (max-width: breakpoint)
    &
      margin-bottom gap-1

  @media screen and (min-width: breakpoint)
    &
      display inline
      margin-right gap-2

  a
    text-decoration none
    transition color timing-1

    &:hover
      color translucent
</style>
