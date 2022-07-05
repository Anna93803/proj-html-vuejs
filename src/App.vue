<template>
  <div id="app">
    <header>
      <nav>
        <TheNavBar/>
      </nav>
    </header>
    <main>
      <TheJumboTop/>
      <TheCenterMain/>
      <TheJumboCenter/>
      <TheBottomMain/>
      <TheJumboBottom/>
    </main>
    <footer>
      <TheFooter/>
    </footer>
  </div>
</template>

<script>
import TheNavBar from './components/TheNavBar.vue';
import TheJumboTop from './components/TheJumboTop.vue';
import TheCenterMain from './components/TheCenterMain.vue';
import TheJumboCenter from './components/TheJumboCenter.vue';
import TheBottomMain from './components/TheBottomMain.vue';
import TheJumboBottom from './components/TheJumboBottom.vue';
import TheFooter from './components/TheFooter.vue';


export default {
  name: 'App',
  components: {
    TheNavBar,
    TheJumboTop,
    TheCenterMain,
    TheJumboCenter,
    TheBottomMain,
    TheJumboBottom,
    TheFooter
}
}
</script>

<style lang="scss">
@import './assets/style/main.scss';

</style>
