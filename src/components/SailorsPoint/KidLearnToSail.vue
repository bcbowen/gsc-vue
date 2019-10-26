<template>
  <div>
    <v-carousel
        continuous
        cycle="cycle"
        height="500px"
        hide-delimiters="true"
        show-arrows="false"
        show-arrows-on-hover="false"
    >
      <v-carousel-item
        v-for="(klsImage, i) in klsImages"
        :key="i"
      >
        <v-row align="center" justify="center">
          <img :src="klsImage" height="475px"/>
        </v-row>
      </v-carousel-item>
    </v-carousel>

    <h3>2019 LEARN-TO-SAIL SCHEDULE (kids ages 8 to 14 - level 1)</h3>

    <table>
      <thead>
        <th>&nbsp;</th>
        <th>
          <b>Registration:</b>
        </th>
        <th>Class 1</th>
        <th>Class 2</th>
        <th>Class 3</th>
        <th>Class 4</th>
        <th>Class 5</th>
        <th>Class 6</th>
      </thead>
      <tr v-for="session in KidsSchedule" :key="session.Session">
        <td>Session {{session.Session}}:</td>
        <td>{{session.Registration}}</td>
        <td v-for="(c, i) in session.Classes" :key="i">{{c}}</td>
      </tr>
    </table>
    <div>
      <b>* Denotes Saturday classes</b>
    </div>

    <h3>Summer Camps</h3>

    <p>
      <b>Registration for all camps:</b> Saturday May 4th; 9:00 to 10:00 AM at Sailor&apos;s Point.
      <br />Club members only may register as of January 2nd. There will be no rescheduling of any camp day due to bad weather.
    </p>

    <b>Camp runs from 9:00 to 1:00</b>
    <br />
    <br />

    <h3>Summer Camp Schedule</h3>
    <table>
      <thead>
        <th>Camp</th>
        <th>Start</th>
        <th>End</th>
      </thead>
      <tr>
        <td>1</td>
        <td>Jun 10</td>
        <td>Jun 14</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Jun 17</td>
        <td>Jun 21</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Jun 24</td>
        <td>Jun 28</td>
      </tr>
      <tr>
        <td><b>No Camp</b></td>
        <td>Jul 1</td>
        <td>Jul 5</td>
      </tr>
      <tr>
        <td>4</td>
        <td> Jul 8</td>
        <td> Jul 12</td>
      </tr>
      <tr>
        <td>5</td>
        <td>Jul 15</td>
        <td>Jul 19</td>
      </tr>
      <tr>
        <td>6</td>
        <td>Jul 22</td>
        <td>Jul 26</td>
      </tr>
      <tr>
        <td>7</td>
        <td>Jul 29</td>
        <td>Aug 2</td>
      </tr>
      <tr>
        <td>8</td>
        <td>Aug 5</td>
        <td>Aug 9</td>
      </tr>
    </table>

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

  </div>
</template>

<script>
import KidsLTSScheduleData from '@/data/kidsSchedule.json'
const images = []
for (let i = 1; i < 21; i++) {
  images.push(require(`@/assets/KLS/2019summer_${i}.jpg`))
}
//images.push(require('@/assets/KLS/2019summer_1.jpg'))
//images.push('http://www.gulfstreamsailingclub.org/images/SPONSORS/2019/BlueWater.png')
export default {
  data() {
    return {
      KidsSchedule: KidsLTSScheduleData,
      klsImages: images
    }
  },
};
</script>

<style scoped>

</style>
