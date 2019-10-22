<template>
  <div>
    <v-container>
      <h2>2019 Adult Learn-to-Sail Schedule</h2>

      <table width="640px">
        <thead>
          <th>Session</th>
          <th>Class Dates</th>
          <th>Bad Weather Makeup</th>
        </thead>
        <tr v-for="row in Schedule" :key="row.Session">
          <td>{{ row.Session }}</td>
          <td>{{ row.ClassDates }}</td>
          <td>{{ row.Registration }}</td>
        </tr>
      </table>

      <p>
        <b>Class Hours:</b> 9:00 AM to 5:00 PM
      </p>

      <p>
        <b>Boats Used for Class:</b> Sunfish
      </p>

      <p>
        <b>Fees:</b> Club Members and Hollywood residents - $125.00; Non-residents - $180.00 Class Fee includes two free boat rental days.
      </p>

      <p>
        <b>Class Size:</b> (4) people minimum, maximum (10).
      </p>

      <p>
        <b>Registration:</b> Saturdays at Sailor&apos;s Point from 9:00 AM to 3:00 PM, or email us for mailing address. Due to the minimum class size, all registrations must be turned in (1) WEEK prior to class start date. Please fill out this
        <a
          href="http://www.gulfstreamsailingclub.org/sailorspoint/docs/GSC-Adult LTS Registration.pdf"
        >form</a>
      </p>

      <p>
        <b>Cancelations:</b> A
        <b class="highlight">50% fee</b> applies to any cancelation within (1) WEEK of the class start date.
      </p>

      <p>
        <b>Boat Rental Fees (after class taken):</b> Non-members - $20.00/day; Members - $5.00/day
      </p>

      <p>
        <b>Club Membership: (not required)</b> $140.00 / $100.00 - first year / renewal. With class $100.00 / $100.00 first year/renewal.
      </p>
    </v-container>
  </div>
</template>

<script>
import ScheduleData from "@/data/adultSchedule.json";
export default {
  data() {
    return {
      Schedule: ScheduleData
    };
  }
};
</script>

<style scoped>

</style>
