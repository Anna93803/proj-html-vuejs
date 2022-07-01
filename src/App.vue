<template>
  <div id="app">
    <TheHeader/>
    <TheJumboTop/>
    <TheCenterMain/>
    <TheJumboCenter/>
    <TheBottomMain/>
    <TheJumboBottom/>
    <TheFooter/>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import TheJumboTop from './components/TheJumboTop.vue';
import TheCenterMain from './components/TheCenterMain.vue';
import TheJumboCenter from './components/TheJumboCenter.vue';
import TheBottomMain from './components/TheBottomMain.vue';
import TheJumboBottom from './components/TheJumboBottom.vue';
import TheFooter from './components/TheFooter.vue';


export default {
  name: 'App',
  components: {
    TheHeader,
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

</style>
