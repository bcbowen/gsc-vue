<template>
  <div>
    <v-card>
      <v-card-title>Tiller Tales</v-card-title>
      <v-expansion-panels accordion>
        <v-expansion-panel v-for="(year, i) in this.tillerTalesData" :key="i">
          <v-expansion-panel-header>{{ year.year }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <p v-for="(month, i) in year.months" :key="i">
              <a
                :href="`http://www.gulfstreamsailingclub.org/docs/tiller_tales/${year.year}${month}TillerTales.pdf`"
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
import TillerTalesData from '../data/tillerTales.json'
import { getMonth } from '../monthParse.js'
export default {
  name: 'TillerTales',

  data () {
    return {
      tillerTalesData: TillerTalesData
    }
  },
  methods: {
    getMonth
  }
}
</script>

<style lang="scss" scoped>
</style>
