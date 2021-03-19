<template>
  <div>
    <v-container>
      <h2>2021 Adult Learn-to-Sail Schedule</h2>

      <table width="640px">
        <thead>
          <th>Session</th>
          <th>Class Dates</th>
          <th>Bad Weather Makeup</th>
        </thead>
        <tr v-for="row in Schedule" :key="row.Session">
          <td>{{ row.Session }}</td>
          <td>{{ row.ClassDates }}</td>
          <td>{{ row.Makeup }}</td>
        </tr>
      </table>
      <p><strong>* No class in December</strong></p>

      <br />
      <h4>Additional Information:</h4>
      <ul>
        <li><b>Class Hours:</b> 9:00 AM to 5:00 PM</li>
        <li><b>Boats Used for Class:</b> Sunfish</li>
        <li><b>Fees:</b> Club Members and Hollywood residents - $125.00; Non-residents - $180.00 Class Fee includes two free boat rental days.</li>
        <li><b>Class Size:</b> (4) people minimum, maximum (10).</li>
        <li>
          <b>Registration:</b> Saturdays at Sailor&apos;s Point from 9:00 AM to 3:00 PM, or email us for mailing address. Due to the minimum class size, all registrations must be turned in (1) WEEK
          prior to class start date. Please fill out this <a target="_blank" href="http://www.gulfstreamsailingclub.org/docs/SailorsPointForms/Adult_LTS_Registration.pdf">form</a>
        </li>
        <li>
          <b>Cancelations:</b>
          A <b class="highlight">50% fee</b> applies to any cancelation within (1) WEEK of the class start date.
        </li>
        <li><b>Boat Rental Fees (after class taken):</b> Non-members - $20.00/day; Members - $10.00/day</li>
        <li><b>Club Membership: (not required)</b> $140.00 / $100.00 - first year / renewal. With class $100.00 / $100.00 first year/renewal.</li>
      </ul>
    </v-container>
  </div>
</template>

<script>
import ScheduleData from '@/data/adultSchedule.json'
export default {
  data () {
    return {
      Schedule: ScheduleData
    }
  }
}
</script>

<style scoped>
.highlight {
  background-color: yellow;
}
</style>
