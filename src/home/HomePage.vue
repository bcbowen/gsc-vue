<template>
  <div class="home">
   Home page
   <About></About>
   <WhatsNew></WhatsNew>
  </div>
</template>

<script>
import About from './About.vue';
import WhatsNew from './WhatsNew.vue';
export default {
  name: 'HomePage',
  components: {About, WhatsNew},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
