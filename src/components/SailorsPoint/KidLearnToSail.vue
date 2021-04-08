<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <KidsSchedule :scheduleData="KidsSchedule"></KidsSchedule>
          <br/>
          <KidsFormLinks />
          <br/>
          <span>
          <h3>Key Items to Remember:</h3>
          <ul>
            <li>Everyone (kids &amp; adults) will be required to wear a mask on land at all times.  Once the kids are on individual boats, they can remove their masks.  You must supply your own masks in order to attend.</li>
            <li>Additional children, siblings or friends must stay in your car.  We also highly recommend that parents stay in their cars upon drop offs and pick-ups.  If a parent gets out of their car, they must have a mask and their temperature will be taken.</li>
            <li>Please bring your own drinks to keep hydrated.</li>
            <li>All kids are required to wear a life jacket at all times.  Bring your own or you can borrow one from Sailor&apos;s Point.</li>
            <li>Wear closed toed shoes with rubber soles that can get wet. No flip flops or Crocs.</li>
            <li>Wear hats, long sleeve sun shirts, sunglasses and sunscreen to protect yourself from the sun.  Remind your child to reapply sunscreen.</li>
            <li>There will be no rescheduling or refunding of any sailing classes due to bad weather.  If there is lightning, the boats will not go out on the water.</li>
            <li>Don't forget your towel or change of clothes.</li>
            <li>Bringing electronic devices is not recommended and GSC will not be liable for any damage or missing items.  If you bring them, they should only be for calling your parents.</li>
            <li>There will be a swim test on day one.</li>
          </ul>
          <br/>
          </span>
          <span>
            <h4>Please do <strong>not</strong> bring electronics, except for a phone to call your parents.</h4>
          </span>
        </v-col>
      </v-row>

      <v-row>
        <v-col lg="7" md="6" cols="12">
          <v-card height="100%">
            <v-card-text>
              <p>
                There will be no rescheduling of any class day due to bad weather.
              </p>

              <b>Class runs from 9:00 to 1:00</b>
              <br />
              <br />
              <h2>Summer Camps</h2>
              <h3>Camp Dates:</h3>
              <CampSchedule />
            </v-card-text>
          </v-card>
        </v-col>
        <v-col lg="5" md="6" cols="12">
          <v-carousel
            continuous
            cycle="cycle"
            height="400px"
            hide-delimiters="true"
            show-arrows="false"
            show-arrows-on-hover="false"
          >
            <v-carousel-item v-for="(klsImage, i) in klsImages" :key="i">
              <v-row align="center" justify="center">
                <img :src="klsImage" height="400px" />
              </v-row>
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-card>
            <v-card-text>
              <KidsRegistrations />
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import CampSchedule from './CampSchedule'
import KidsFormLinks from './KidsFormLinks'
import KidsLTSScheduleData from '@/data/kidsSchedule.json'
import KidsRegistrations from './KidsRegistrations'
import KidsSchedule from './KidsSchedule.vue'

const images = []
for (let i = 1; i < 21; i++) {
  images.push(require(`@/assets/KLS/2019summer_${i}.jpg`))
}

export default {
  data () {
    return {
      KidsSchedule: KidsLTSScheduleData,
      klsImages: images
    }
  },
  components: { KidsSchedule, CampSchedule, KidsFormLinks, KidsRegistrations }
}
</script>

<style scoped>
.container {
  padding: 0;
}

td.full {
  background-color: darkgrey;
}
.redText {
  color: #ff0000;
}
</style>
