<template>
  <div>
    <v-row>
      <v-col cols="8">
        <v-card
          height="100%"
        >
          <v-card-title>About</v-card-title>
          <v-card-text>
            The Sailor's Point property in Hollywood, Florida is run by the Gulfstream Sailing Club to teach and promote sailing. Two courses are currently being offered:
            Youth and Adult.
            <br />
            <br />Youth (8-14yrs) classes are taught on smaller optimist dinghies and are offered on Saturdays or as summertime programs. Adult classes are taught on sunfish and offered
            on weekends. Class schedules do vary, so check the Classes page for scheduled offerings.
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="4">
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
  </div>
</template>

<script>
const images = [];
for (let i = 1; i < 8; i++) {
  images.push(require(`@/assets/SailorsPointAbout/about_${i}.jpg`));
}

export default {
  name: "About",
  data() {
    return {
      pics: images
    };
  }
};
</script>

<style lang="scss" scoped>
</style>
