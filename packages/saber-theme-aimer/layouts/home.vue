<template>
  <div class="frontpage">
    <div class="frontpage-content">
      <saber-link
        v-if="$themeConfig.home.avatar.path"
        class="avatar"
        :to="$themeConfig.home.avatar.path"
        :title="$themeConfig.home.avatar.title">
        <saber-image :src="require('../assets/avatar.png?size=150')" alt="Avatar" />
      </saber-link>
      <div v-else class="avatar">
        <saber-image :src="require('../assets/avatar.png?size=150')" alt="Avatar" />
      </div>
      <h1 class="name">{{ $siteConfig.author }}</h1>
      <div class="slogan" :title="$themeConfig.home.slogan.title">
        <a
          v-if="$themeConfig.home.slogan.path"
          :href="$themeConfig.home.slogan.path" target="_blank" rel="noopener noreferrer">
          {{ $themeConfig.home.slogan.name }}
        </a>
        <span v-else>{{ $themeConfig.home.slogan.name }}</span>
      </div>
      <hr>
      <ul class="menu">
        <li v-for="(item, index) in $themeConfig.home.menu" :key="index">
          <saber-link v-if="item.path.startsWith('/')" :to="item.path" :title="item.title">
            {{ item.name }}
          </saber-link>
          <a v-else
            :href="item.path"
            :title="item.title"
            target="_blank" rel="noopener noreferrer">{{ item.name }}</a>
        </li>
      </ul>
      <div v-if="$themeConfig.home.location" class="location">
        {{ $themeConfig.home.location }}
      </div>
    </div>
  </div>
</template>

<script>
import meta from '../utils/meta'

export default {
  head() {
    return {
      title: this.$siteConfig.title,
      meta: meta(this)
    }
  }
}
</script>

<style scoped>
@font-face {
  font-family: 'Hi Melody';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Hi Melody Regular'), local('HiMelody-Regular'), url(https://fonts.gstatic.com/s/himelody/v7/46ktlbP8Vnz0pJcqCTbEegdS3V8yduAsxfUg1BUTwBF4g3aW.119.woff2) format('woff2');
  unicode-range: U+20-22, U+27-2a, U+2c-38, U+3a-3b, U+3f, U+41-47, U+4a-4c, U+4f-5d, U+61-7b, U+7d, U+a1, U+ab, U+ae, U+b7, U+bb, U+bf, U+2013-2014, U+201c-201d, U+2122, U+ac00, U+ace0, U+ae30, U+b2e4, U+b85c, U+b9ac, U+c0ac, U+c2a4, U+c2dc, U+c774, U+c778, U+c9c0, U+d558;
}

.frontpage {
	width: 100vw;
	height: 100vh;
  display: flex;
	align-items: center;
	justify-content: center;
  line-height: 1.15;
}

.frontpage-content {
	text-align: center
}

.avatar img {
	width: 100px;
	height: 100px;
	border-radius: 50%;
	object-fit: cover;
}

h1 {
	font-size: 38px;
	font-family: 'Hi Melody', cursive;
	font-weight: 400;
	margin: 8px 0;
}

.slogan {
	font-size: 16px;
	margin-bottom: 16px;
}

hr {
	max-width: 400px;
	height: 1px;
	border: none;
	background-image: linear-gradient(0deg, transparent, #d5d5d5, transparent);
	background-image: -webkit-linear-gradient(0deg, transparent, #d5d5d5, transparent);
}

.menu {
  display: flex;
  justify-content: center;
  list-style-type: none;
	font-size: 14px;
	margin: 16px 0;
}

.menu li {
	margin: 0 4px;
}

.location {
	font-size: 12px;
}
</style>
