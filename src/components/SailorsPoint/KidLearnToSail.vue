<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <KidsSchedule :scheduleData="KidsSchedule"></KidsSchedule>The following are required to register for classes:
          <ul>
            <li>
              Registration Form (Can be downloaded
              <a
                href="http://www.gulfstreamsailingclub.org/docs/SailorsPointForms/2015RegistrationForm.pdf"
                target="_new"
              >here</a>)
            </li>
            <li>Check for $180 ($125 for club members or Hollywood residents with proof of residency)</li>
            <li>
              Security Deposit Form (Can be downloaded
              <a
                href="http://www.gulfstreamsailingclub.org/docs/SailorsPointForms/Kids_Safety_Deposit.pdf"
                target="_new"
              >here</a>)
            </li>
            <li>Check for $50 damage/security (only cashed if failure to meet the items on the security waiver)</li>
            <li>Front/Back copy of healthcare card</li>
          </ul>

          <span>
            Please do
            <b>not</b> bring electronics, except for a phone to call your parents.
          </span>
        </v-col>
      </v-row>

      <v-row>
        <v-col lg="7" md="6" cols="12">
          <v-card height="100%">
            <v-card-text>
              <p>
                <b>Registration for all camps:</b> Saturday May 4th; 9:00 to 10:00 AM at Sailor&apos;s Point.
                <br />Club members only may register as of January 2nd. There will be no rescheduling of any camp day due to bad weather.
              </p>

              <b>Camp runs from 9:00 to 1:00</b>
              <br />
              <br />
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
        <v-col md="6" cols="12">
          <v-card height="100%">
            <v-card-text>
              <h2>Summer Camps</h2>

              <h3>Summer Camp Schedule</h3>
              <table>
                <thead>
                  <th>Camp</th>
                  <th>Start</th>
                  <th>End</th>
                </thead>
                <tr v-for="session in CampSchedule" :key="session.Session">
                  <td>{{ session.Session }}</td>
                  <td>{{ session.Start }}</td>
                  <td>{{ session.End }}</td>
                </tr>
              </table>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col md="6" cols="12">
          <v-card>
            <v-card-text>
              <p>
                <b>Registrations:</b>
                <br />At Sailor&apos;s Point from 9:00 to 10:00 AM, accepted on or after the registration date for each session, but no later than one week prior to class date, on a first come first serve basis, no reservations and no class day registration accepted. Cash or checks only.
              </p>

              <p>
                <b>Weekend Class Fees:</b>
                <br />$180.00 or $125.00 for Club Members and City of Hollywood residents. Proof of residency necessary (Water or Electric bill).
              </p>

              <p>
                <b>Summer Camp Fees (non-members):</b>
                <br />$200.00 for the first child and $175.00 for each additional.
              </p>

              <p>
                <b>Summer Camp Fees (members and City of Hollywood residents):</b>
                <br />$150.00 for the first child and $125.00 for each additional. Proof of residency necessary (Water or Electric bill).
              </p>

              <p>
                <b>Summer Camp Early Drop Off (9:00 AM) Fee:</b>
                <br />$30.00 per week.
              </p>

              <p>
                <b>Security Deposit:</b>
                <br />ALL classes require a separate $50.00 damage/security check or cash that will be returned at the end of the last class, if no damage was done to any of the equipment.
              </p>

              <h3>Class Hours</h3>
              <p>Weekend Classes - 9:00 AM to Noon (except where noted)</p>
              <p>Summer Camps - 9:00 AM to 1:00 PM (no lunch provided)</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import KidsLTSScheduleData from "@/data/kidsSchedule.json";
import CampScheduleData from "@/data/campSchedule.json";
import KidsSchedule from "./KidsSchedule.vue";
const images = [];
for (let i = 1; i < 21; i++) {
  images.push(require(`@/assets/KLS/2019summer_${i}.jpg`));
}
//images.push(require('@/assets/KLS/2019summer_1.jpg'))
//images.push('http://www.gulfstreamsailingclub.org/images/SPONSORS/2019/BlueWater.png')
export default {
  data() {
    return {
      CampSchedule: CampScheduleData,
      KidsSchedule: KidsLTSScheduleData,
      klsImages: images
    };
  },
  components: { KidsSchedule }
};
</script>

<style scoped>
.container {
  padding: 0;
}
</style>
