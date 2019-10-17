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
          <v-row
            align="center"
            justify="center"
          >
            <v-col>
              <v-img :src="sponsor.path" :height="sponsor.height" :width="sponsor.width"></v-img>
            </v-col>

          </v-row>



        </v-carousel-item>
      </v-carousel>
    </v-card>

  </div>
</template>

<script>
export default {
  name: "Sponsors",
  data() {
    return {
      sponsors: [
        {
          path:
            "http://www.gulfstreamsailingclub.org/images/SPONSORS/2019/BlueWater.png",
          href: "http://www.bluewaterweb.com/",
          height: "130",
          width: "328"
        },
        {
          path:
            "http://www.gulfstreamsailingclub.org/images/SPONSORS/2019/BOW.png",
          href: "http://www.boatownerswarehouse.com/",
          height: "144",
          width: "200"
        },
        {
          path:
            "http://www.gulfstreamsailingclub.org/images/SPONSORS/2019/pbMarine.png",
          href: "http://www.playboymarine.com/",
          height: "134",
          width: "260"
        },
        {
          path:
            "http://www.gulfstreamsailingclub.org/images/SPONSORS/2019/SAILORMAN.png",
          href: "http://www.sailorman.com/",
          height: "200",
          width: "200"
        }
      ]
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
