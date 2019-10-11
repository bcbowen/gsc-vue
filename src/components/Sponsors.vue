<template>
  <div>
    
    <v-card>
      <v-card-title>Sponsors</v-card-title>

      <v-list>
        <v-list-item v-for="(sponsor, i) in sponsors" :key="i">
          <v-list-item-content>
            <v-img :src="require(sponsor.src)"></v-img>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>

    <!--
    <div>
      <p>yadda</p>
      <v-img src="@/assets/sponsors/BOW.png"></v-img>
    </div>
    -->
  </div>
</template>

<script>
export default {
  name: 'Sponsors',
  data () {
    return {
      sponsors: [
        {
          src: '@/assets/sponsors/BlueWater.png'
        },
        {
          src: '@/assets/sponsors/BOW.png'
        },
        {
          src: '@/assets/sponsors/pbMarine.png'
        },
        {
          src: '@/assets/sponsors/SAILORMAN.png'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
