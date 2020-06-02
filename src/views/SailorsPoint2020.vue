<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <h1>Sailors Point</h1>
          <h3 class="redText">COVID-19 Update</h3>
          <p>Sailor's Point will be closed until the all-clear has been given. This means all events, classes and races will be cancelled or postponed until further notice.</p>
        </v-col>
      </v-row>
      <v-row>
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
export default {
  name: 'SailorsPoint',
  components: { Directions },
  mounted () {
    if (this.$router.currentRoute.fullPath.toLowerCase() === '/sailorspoint') {
      this.$router.push('sailorspoint/about')
    }
    console.log(this.$router.currentRoute)
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

.redText {
  color: #f00;
}
</style>
