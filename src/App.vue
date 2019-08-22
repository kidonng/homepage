<template>
  <main>
    <div class="bg"></div>
    <div class="profile">
      <button class="avatar" title="Show biography" @click="showBio = true">
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
    <transition name="fade">
      <div class="bio" v-if="showBio">
        <h2 class="title spacing">
          Howdy!
          <button class="close" title="Hide biography" @click="showBio = false">
            <svg viewBox="0 0 24 24">
              <path
                d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
              />
            </svg>
          </button>
        </h2>
        <p class="text">
          I'm a student at
          <a href="https://www.ncu.edu.cn/">Nanchang University</a>
          and web developer at
          <a href="https://team.ncuos.com/">NCUHOME</a>.
        </p>
        <p class="text">
          Besides open source, I
          <a
            href="https://music.163.com/#/user/home?id=1655022829"
            title="My Netease Cloud Music profile"
            >listen to music</a
          >,
          <a
            href="https://ja.wikipedia.org/wiki/なもり"
            title="View なもり on Wikipedia"
            >enjoy Namori's drawings</a
          >
          and
          <a href="https://osu.ppy.sh/users/14347155" title="My osu! profile"
            >play osu!</a
          >
          for fun.
        </p>
        <div v-for="(list, title) in projects" :key="title">
          <h2 class="title">{{ title }}</h2>
          <ul class="projects">
            <li v-for="(desc, name) in list" :key="name">
              <a :href="`https://github.com/kidonng/${name}`">{{ name }}</a>
              <span>{{ desc }}</span>
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    showBio: false,
    links: {
      GitHub: 'https://github.com/kidonng',
      Blog: 'https://www.yuque.com/kidonng/blog',
      Telegram: 'https://t.me/kidonng',
      Email: 'mailto:kidonng@gmail.com'
    },
    projects: {
      'I create websites': {
        'pixiv-collection': '🅿️ Simple pixiv collection showcase',
        'scoop-docs': '📚 Scoop documentation done right',
        readhub: '📖 Simple Readhub application',
        'xkcd-why': '❓ Get a random question from xkcd list'
      },
      'I make modules': {
        'ncu-net':
          '📶 A client for NCU Campus Network Access Authentication System',
        'sachan-bot': '🤖 Multifunctional Telegram bot',
        'saber-plugin-medium-zoom': '🔍 medium-zoom plugin for Saber',
        inob: '👀 Yet another IntersectionObserver wrapper',
        headroom: '↕ The same old headroom simplified',
        'vue-router-ga-lite': '📊 Integrate ga-lite with Vue Router'
      },
      'I write scripts': {
        cherry: '🍒 Handcrafted user scripts, user styles & bookmarklets',
        'deno-scripts': '🦖 Casual Deno scripts'
      }
    }
  }),
  mounted() {
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && this.showBio) this.showBio = false
    })
  }
})
</script>

<style lang="stylus">
breakpoint = 600px
gap-1 = .25rem
gap-2 = .5rem
gap-3 = 1rem
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

.title
  color black
  font-size font-1
  margin-bottom gap-2

  &:not(:first-of-type)
    margin-top gap-2

  @media screen and (min-width: breakpoint)
    &
      margin-bottom gap-3

      &:not(:first-of-type)
        margin-top gap-3

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
  margin-bottom gap-2

  @media screen and (min-width: breakpoint)
    &
      margin-bottom gap-3

.projects
  li
    margin-bottom gap-1

    @media screen and (min-width: breakpoint)
      &
        margin-bottom gap-2

    &::before
      content '- '

  span::before
    content ' = '

.profile
  position absolute
  bottom 0
  user-select none
  -moz-user-select none
  margin gap-3

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
      margin-bottom gap-2

  @media screen and (min-width: breakpoint)
    &
      display inline
      margin-right gap-3

  a
    text-decoration none
    transition color timing-1

    &:hover
      color translucent
</style>
