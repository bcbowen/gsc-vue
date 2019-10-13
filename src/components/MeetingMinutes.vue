<template>
  <div>
    <v-card>
      <v-card-title>Meeting Minutes</v-card-title>
      <v-expansion-panels accordion>
        <v-expansion-panel
          v-for="(year, i) in years"
          :key="i"
        >
          <v-expansion-panel-header>{{ year.year }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <p v-for="(month, i) in year.months" :key="i">month</p>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card>
  </div>
</template>

<script>
  export default {
    name: "MeetingMinutes",
    data() {
      return {
        years: [{
          'year': 2019,
          'months': ['08', '07', '06', '05', '04', '03', '02', '01']
        }, {
          'year': 2018,
          'months': ['11', '10', '09', '08', '07', '06', '05', '04', '03', '02', '01']
        }]
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
