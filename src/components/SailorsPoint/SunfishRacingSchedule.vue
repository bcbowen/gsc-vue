<template>
  <div>
    <h3>2019 Sunfish Racing Schedule</h3>
    <table>
      <thead>
        <th>Winter Series</th>
        <th>Spring Series</th>
        <th>Summer Series</th>
        <th>Fall Series</th>
      </thead>
      <tr>
        <td>{{formatDate(SunfishSchedule.Winter.Race1)}}</td>
        <td>{{formatDate(SunfishSchedule.Spring.Race1)}}</td>
        <td>{{formatDate(SunfishSchedule.Summer.Race1)}}</td>
        <td>{{formatDate(SunfishSchedule.Fall.Race1)}}</td>
      </tr>
      <tr>
        <td>{{formatDate(SunfishSchedule.Winter.Race2)}}</td>
        <td>{{formatDate(SunfishSchedule.Spring.Race2)}}</td>
        <td>{{formatDate(SunfishSchedule.Summer.Race2)}}</td>
        <td>{{formatDate(SunfishSchedule.Fall.Race2)}}</td>
      </tr>
      <tr>
        <td>{{formatDate(SunfishSchedule.Winter.Race3)}}</td>
        <td>{{formatDate(SunfishSchedule.Spring.Race3)}}</td>
        <td>{{formatDate(SunfishSchedule.Summer.Race3)}}</td>
        <td>{{formatDate(SunfishSchedule.Fall.Race3)}}</td>
      </tr>
      <tr>
        <td>{{formatDate(SunfishSchedule.Winter.Race4)}}</td>
        <td>{{formatDate(SunfishSchedule.Spring.Race4)}}</td>
        <td>{{formatDate(SunfishSchedule.Summer.Race4)}}</td>
        <td>{{formatDate(SunfishSchedule.Fall.Race4)}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import SunfishData from "@/data/sunfishSchedule.json";
export default {
  data() {
    return {
      SunfishSchedule: SunfishData
    };
  },
  methods: {
    getMonth(val) {
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      return months[parseInt(val) - 1];
    },
    formatDate(raceDate) {
      return `${this.getMonth(raceDate.Month)} ${raceDate.Day}`;
    }
  }
};
</script>

<style scoped>

</style>
