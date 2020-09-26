<template>
  <div class="site-container not-found">
    <Header/>
    <main class="site-wrapper">
      <div class="error">
        <saber-image class="mascot" src="../assets/whoops.png" alt="404 Not Found" />
        <span class="overlay"></span>
      </div>
    </main>
    <Footer/>
  </div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'

export default {
  components: {
    Header,
    Footer
  },
  head() {
    return {
      title: `404 Not Found - ${this.$siteConfig.title}`
    }
  }
}
</script>

<style scoped>
.site-container {
  background-color: #f7f7f7;
}

.site-container .error {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.mascot {
  max-width: 100%;
  height: unset;
}

.site-container .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
