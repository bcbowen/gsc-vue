<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <h1>Sailors Point</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-tabs>
            <v-tab>About</v-tab>
            <v-tab>Classes</v-tab>
            <v-tab>Kids Learn To Sail</v-tab>
            <v-tab>Adult Learn To Sail</v-tab>
            <v-tab>Racing</v-tab>
            <v-tab-item><About /></v-tab-item>
            <v-tab-item><Classes /></v-tab-item>
            <v-tab-item><KidLearnToSail /></v-tab-item>
            <v-tab-item><AdultLearnToSail /></v-tab-item>
            <v-tab-item><Racing /></v-tab-item>
          </v-tabs>
        </v-col>
        <v-col cols="12">
          <v-row>
            <v-col cols="12">
              <Directions />
            </v-col>
            <v-col cols="12">
              For more information contact:
              <a
                href="mailto:sailorspoint@gulfstreamsailingclub.org"
              >sailorspoint@gulfstreamsailingclub.org</a>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Directions from '../components/SailorsPoint/Directions'
import About from '../components/SailorsPoint/About'
import Classes from '../components/SailorsPoint/Classes'
import KidLearnToSail from '../components/SailorsPoint/KidLearnToSail'
import AdultLearnToSail from '../components/SailorsPoint/AdultLearnToSail'
import Racing from '../components/SailorsPoint/Racing'
export default {
  name: 'SailorsPoint',
  components: { Directions, About, Classes, KidLearnToSail, AdultLearnToSail, Racing },
  mounted () {
    if (this.$router.currentRoute.fullPath.toLowerCase() === '/sailorspoint') {
      this.$router.push('sailorspoint/about')
    }
  }
}
</script>

<style>
table {
  border: 2px solid #1976d2;
  border-radius: 3px;
  background-color: #fff;
}

th {
  background-color: #1976d2;
  color: rgba(255, 255, 255, 0.66);
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

td {
  background-color: #f9f9f9;
}

th,
td {
  min-width: 120px;
  padding: 10px 20px;
}

th.active {
  color: #fff;
}
</style>
