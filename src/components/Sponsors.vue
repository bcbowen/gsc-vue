<template>
  <div>
    <v-card>
      <v-card-title>Sponsors</v-card-title>

      <v-carousel
        continuous="true"
        cycle="cycle"
        height="200px"
        hide-delimiters="true"
        show-arrows="false"
        show-arrows-on-hover="false"
        active-class="sponsorImage"
      >
        <v-carousel-item
          v-for="(sponsor,i) in sponsors"
          :key="i"
          reverse-transition="fade-transition"
          transition="fade-transition"
          :href="sponsor.href"
          target="_blank"
          active-class="sponsorImage"
        >
          <v-row>
            <v-col>
              <v-row align="center" justify="center">
                <img :src="sponsor.path" :height="sponsor.height" :width="sponsor.width" />
              </v-row>
            </v-col>
          </v-row>
        </v-carousel-item>
      </v-carousel>
    </v-card>
  </div>
</template>

<script>
import sponsorData from "@/data/sponsors.json";
export default {
  name: "Sponsors",
  data() {
    return {
      sponsors: sponsorData.sponsors
    };
  }
};
</script>

<style lang="scss" scoped>
.sponsorImage {
  margin: auto;
  justify-content: center;
  align-content: center;
}
</style>
