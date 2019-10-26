<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <h1>Gulfstream Regatta 2020</h1>
          <h4>More Info coming soon!</h4>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-carousel
            continuous
            cycle="cycle"
            height="500px"
            hide-delimiters="true"
            show-arrows="false"
            show-arrows-on-hover="false"
          >
            <v-carousel-item v-for="(pic, i) in pics" :key="i">
              <v-row align="center" justify="center">
                <img :src="pic" height="475px" />
              </v-row>
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
const images = [];
for (let i = 1; i < 15; i++) {
  images.push(require(`@/assets/Regatta/regatta_${i}.jpg`));
}
export default {
  data() {
    return {
      pics: images
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
