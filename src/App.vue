<template>
  <div>
    <div class="bg"></div>
    <div class="profile">
      <img
        class="avatar"
        :src="avatar"
        alt="Avatar"
        title="Bio"
        @click="showBio = true"
      />

      <div class="column">
        <h1 class="name">{{ name }}</h1>
        <ul class="links">
          <li v-for="link in links" :key="link.title">
            <a
              :href="link.href"
              :target="link.href.startsWith('http') && '_blank'"
              :rel="link.href.startsWith('http') && 'noreferrer noopener'"
            >
              {{ link.title }}
            </a>
          </li>
        </ul>
      </div>
    </div>
    <transition name="fade">
      <div class="bio" v-if="showBio">
        <h2 class="title">
          {{ bioTitle }}
          <svg class="close" viewBox="0 0 24 24" @click="showBio = false">
            <path
              fill="black"
              d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
            />
          </svg>
        </h2>
        <div class="text" v-html="bio"></div>
        <h2 class="title">{{ projectsTitle }}</h2>
        <ul class="projects">
          <li v-for="project in projects" :key="project.title">
            <a :href="project.href" target="_blank" rel="noreferrer noopener">
              {{ project.title }}
            </a>
            {{ project.description }}
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data: () => ({
    name: 'kidonng',
    avatar:
      'https://gravatar.loli.net/avatar/131ee6195713dfb178c5f0582e85a0c1?s=200',
    links: [
      {
        title: 'GitHub',
        href: 'https://github.com/kidonng'
      },
      {
        title: 'Blog',
        href: 'https://www.yuque.com/kidonng/blog'
      },
      {
        title: 'Telegram',
        href: 'https://t.me/kidonng'
      },
      {
        title: 'Email',
        href: 'mailto://kidonng@gmail.com'
      }
    ],
    bioTitle: 'Howdy!',
    bio: `
      <p>
        I'm Kid, a student at
        <a href="https://www.ncu.edu.cn/" target="_blank" rel="noreferrer noopener">NCU</a>
        & front-end dev at
        <a href="https://team.ncuos.com/" target="_blank" rel="noreferrer noopener">NCUHOME</a>.
      </p>
      <p>
        I love open source and building practical stuff to improve user/developer experience.
        Reading, music & otaku culture are my hobbies.
      </p>
    `,
    projectsTitle: 'Projects',
    projects: [
      {
        title: 'pixiv Collection',
        description: 'Simple pixiv collection showcase',
        href: 'https://github.com/kidonng/pixiv-collection'
      },
      {
        title: 'Scoop Docs',
        description: 'Scoop documentation done right',
        href: 'https://github.com/kidonng/scoop-docs'
      },
      {
        title: 'NCU Net',
        description:
          'A client for NCU Campus Network Access Authentication System',
        href: 'https://github.com/kidonng/ncu-net'
      },
      {
        title: 'Cherry',
        description: 'Handcrafted user scripts, user styles & bookmarklets',
        href: 'https://github.com/kidonng/cherry'
      },
      {
        title: 'Readhub',
        description: 'Simple Readhub application',
        href: 'https://github.com/kidonng/readhub'
      },
      {
        title: 'Sachan',
        description: 'Multifunctional Telegram bot',
        href: 'https://github.com/kidonng/sachan'
      }
    ],
    showBio: false
  })
}
</script>

<style lang="stylus">
// Mobile
breakpoint = 600px

overlay()
  height 100vh
  width 100vw

body
  font-family B612, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, Arial, sans-serif
  line-height 1.5

a
  color black
  text-decoration none
  transition color .25s

  &:hover
    color transparentify(black .5)

.bg
  overlay()
  background-image url('assets/bg.jpg')
  background-repeat no-repeat
  background-size cover
  opacity .5

  @media screen and (max-width: breakpoint)
    &
      background-position-x 42%

.bio
  overlay()
  position absolute
  top 0
  background-color white
  padding 1.5rem

  @media screen and (min-width: breakpoint)
    &
      padding-top 2rem
      padding-right 25vw
      padding-left 25vw

.fade-enter-active
.fade-leave-active
  transition opacity .5s

.fade-enter
.fade-leave-to
  opacity 0

.title
  font-size 1.5rem
  display flex
  justify-content space-between

.close
  width 2rem
  cursor pointer

  path
    transition fill .25s

  &:hover path
    fill transparentify(black .5)

.text
  color transparentify(black .75)

  p
    margin-top .75rem
    margin-bottom .75rem

    @media screen and (min-width: breakpoint)
      &
        margin-top 1rem
        margin-bottom 1rem

.projects li
  color transparentify(black .75)
  margin-top .75rem

  @media screen and (min-width: breakpoint)
    &
      margin-top 1rem

  a
    &::before
      content '• '

    &::after
      content ' - '

.profile
  position absolute
  bottom 0
  display flex
  user-select none
  width 100%
  padding 1rem

  @media screen and (min-width: breakpoint)
    &
      padding 2rem

.avatar
  width 100px
  border-radius 100%
  background-color transparentify(white .5)
  transition background-color .25s
  margin-right 1rem
  cursor pointer

  @media screen and (min-width: breakpoint)
    &
      margin-right 2rem

  &:hover
    background-color white

.column
  width 100%

  @media screen and (min-width: breakpoint)
    &
      width 30%
      max-width 15rem

@font-face
  font-family Hi Melody
  font-style normal
  font-weight 400
  font-display swap
  src local('Hi Melody Regular'), local('HiMelody-Regular'), url('https://fonts.gstatic.com/s/himelody/v7/46ktlbP8Vnz0pJcqCTbEegdS3V8yduAsxfUg1BUTwBF4g3aW.119.woff2') format('woff2')
  unicode-range U+20-22, U+27-2a, U+2c-38, U+3a-3b, U+3f, U+41-47, U+4a-4c, U+4f-5d, U+61-7b, U+7d, U+a1, U+ab, U+ae, U+b7, U+bb, U+bf, U+2013-2014, U+201c-201d, U+2122, U+ac00, U+ace0, U+ae30, U+b2e4, U+b85c, U+b9ac, U+c0ac, U+c2a4, U+c2dc, U+c774, U+c778, U+c9c0, U+d558

.name
  font-family Hi Melody, cursive
  font-size 3rem

.links
  display flex
  justify-content space-between
</style>
