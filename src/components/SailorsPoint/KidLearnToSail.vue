<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <KidsSchedule :scheduleData="KidsSchedule"></KidsSchedule>
          <br/>

          <h3>The following are required to register for classes:</h3>
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
            <li>
              COVID-19 Waiver (Can be downloaded
              <a
                href="http://www.gulfstreamsailingclub.org/docs/SailorsPointForms/COVID-19-Waiver-doc.pdf"
                target="_new"
              >here</a>)
            </li>
          </ul>
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
                <b>Registration for weekday classes:</b> Saturday May 4th; 9:00 to 10:00 AM at Sailor&apos;s Point.
                <br />Club members only may register as of January 2nd. There will be no rescheduling of any class day due to bad weather.
              </p>

              <b>Class runs from 9:00 to 1:00</b>
              <br />
              <br />
              <h2>Kids Weekday Class</h2>
              <h3>Schedule</h3>
              <span class="redText">
                Note: Weekday Classes for 2020 are all
                <strong>booked</strong>
              </span>
              <table>
                <thead>
                  <th>Session</th>
                  <th>Start</th>
                  <th>End</th>
                </thead>
                <tr v-for="session in CampSchedule" :key="session.Session">
                  <td>{{ session.Session }}</td>
                  <td class="full">{{ session.Start }}</td>
                  <td class="full">{{ session.End }}</td>
                </tr>
              </table>
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
              <p>
                <b>Registrations:</b>
                <br />At Sailor&apos;s Point from 9:00 to 10:00 AM, accepted on or after the registration date for each session, but no later than one week prior to class date, on a first come first serve basis, no reservations and no class day registration accepted. Cash or checks only.
              </p>

              <p>
                <b>Weekend Class Fees:</b>
                <br />$180.00 or $125.00 for Club Members and City of Hollywood residents. Proof of residency necessary (Water or Electric bill).
              </p>

              <p>
                <b>Weekday Class Fees (non-members):</b>
                <br />$200.00 for the first child and $175.00 for each additional.
              </p>

              <p>
                <b>Weekday Class Fees (members and City of Hollywood residents):</b>
                <br />$150.00 for the first child and $125.00 for each additional. Proof of residency necessary (Water or Electric bill).
              </p>

              <p>
                <b>Weekday Class Early Drop Off (9:00 AM) Fee:</b>
                <br />$30.00 per week.
              </p>

              <p>
                <b>Security Deposit:</b>
                <br />ALL classes require a separate $50.00 damage/security check or cash that will be returned at the end of the last class, if no damage was done to any of the equipment.
              </p>

              <h3>Class Hours</h3>
              <p>Weekend Classes - 9:00 AM to Noon (except where noted)</p>
              <p>Weekday Classes - 9:00 AM to 1:00 PM (no lunch provided)</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import KidsLTSScheduleData from '@/data/kidsSchedule.json'
import CampScheduleData from '@/data/campSchedule.json'
import KidsSchedule from './KidsSchedule.vue'
const images = []
for (let i = 1; i < 21; i++) {
  images.push(require(`@/assets/KLS/2019summer_${i}.jpg`))
}

export default {
  data () {
    return {
      CampSchedule: CampScheduleData,
      KidsSchedule: KidsLTSScheduleData,
      klsImages: images
    }
  },
  components: { KidsSchedule }
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
