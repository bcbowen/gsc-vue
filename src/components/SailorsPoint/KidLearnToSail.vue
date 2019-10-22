<template>
  <div>
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

    <h3>Camp Dates:</h3>Camp 1 - Jun 10 - 14
    <br />Camp 2 - Jun 17 - 21
    <br />Camp 3 - Jun 24 - 28
    <br />
    <b>No Camp - Jul 1 - 5</b>
    <br />Camp 4 - Jul 8 - 12
    <br />Camp 5 - Jul 15 - 19
    <br />Camp 6 - Jul 22 - 26
    <br />Camp 7 - Jul 29 - Aug 2
    <br />Camp 8 - Aug 5 - 9
    <br />

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
export default {
  data() {
    return {
      KidsSchedule: KidsLTSScheduleData
    }
  },
};
</script>

<style scoped>

</style>
