<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <h1>30th Annual Gulfstream Regatta 2020</h1>
        </v-col>
      </v-row>
      <v-row>
<v-col>
          <v-card>
            <v-card-title>Forms</v-card-title>
            <v-card-text>
              <ul>
                <li><a target="_blank" href="https://www.gulfstreamsailingclub.org/docs/Regatta/2020NOR.pdf">Notice of Race</a></li>
                <li><a target="_blank" href="https://www.gulfstreamsailingclub.org/docs/Regatta/waiver.pdf">Waiver</a></li>
                <li><a target="_blank" href="https://www.gulfstreamsailingclub.org/docs/Regatta/2020Entry.pdf">Entry Form </a></li>
              </ul>
            </v-card-text>
          </v-card>
        </v-col>
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
const images = []
for (let i = 1; i < 15; i++) {
  images.push(require(`@/assets/Regatta/regatta_${i}.jpg`))
}
export default {
  data () {
    return {
      pics: images
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
