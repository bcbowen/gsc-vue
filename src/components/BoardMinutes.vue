<template>
  <div>
    <v-card max-height="250px" class="overflow-y-auto">
      <v-card-title>Board Meeting Minutes</v-card-title>
      <v-expansion-panels accordion>
        <v-expansion-panel v-for="(year, i) in this.minutes" :key="i">
          <v-expansion-panel-header>{{ year.year }}</v-expansion-panel-header>
          <v-expansion-panel-content>

            <p v-for="(month, i) in year.months" :key="i">

              <a
                :href="`http://www.gulfstreamsailingclub.org/docs/board_mins/Board${year.year}${month}.pdf`"
                target="_new"
              >{{ getMonth(month) }}</a>

            </p>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card>
  </div>
</template>

<script>
import MinutesData from '../data/minutesData.json'
import { getMonth } from '../monthParse.js'
export default {
  name: 'BoardMinutes',

  data () {
    return {
      minutes: MinutesData.BoardMinutes
    }
  },
  methods: {
    getMonth
  }
}
</script>

<style lang="scss" scoped>
</style>
