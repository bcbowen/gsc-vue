<template>
  <div>
    <table>
      <thead>
        <th>Session</th>
        <th>Start</th>
        <th>End</th>
      </thead>
      <tr v-for="session in CampSchedule" :key="session.Session">
        <td v-if="session.Session == -1"><strong>No Camp</strong></td>
        <td v-else>{{ session.Session }}</td>
        <td class="full">{{ session.Start }}</td>
        <td class="full">{{ session.End }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import CampScheduleData from '@/data/campSchedule.json'

export default {
  data () {
    return {
      CampSchedule: CampScheduleData
    }
  }
}
</script>
