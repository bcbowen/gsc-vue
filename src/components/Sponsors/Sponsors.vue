<template>
  <div>
<!--
    <v-card>
      <v-card-title>Sponsors</v-card-title>

      <v-list>
        <v-list-item v-for="(sponsor, i) in sponsors" :key="i">
          <v-list-item-content>
            <v-img :src="sponsor.path"></v-img>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
    -->

    <div>
      <p v-for="(sponsor, i) in sponsors">
       <!--
       {{ sponsor.path }}: <v-img :src="`${sponsor.path}`"></v-img>
        -->
        <img :src="sponsor.path"/>
      </p>

    </div>

  </div>
</template>

<script>
export default {
  name: 'Sponsors',
  data () {
    return {
      sponsors: [
        {
          path: './components/Sponsors/BlueWater.png'
        }
/*
        ,
        {
          src: '@/assets/sponsors/BOW.png'
        },
        {
          src: '@/assets/sponsors/pbMarine.png'
        },
        {
          src: '@/assets/sponsors/SAILORMAN.png'
        }
        */
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
