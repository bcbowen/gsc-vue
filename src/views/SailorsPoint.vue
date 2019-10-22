<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <v-toolbar color="primary" dark>
            <v-btn
              to="/sailorspoint/about"
              color="info"
              class="mr-2"
            >About</v-btn>
            <v-btn
              to="/sailorspoint/classes"
              color="info"
              class="mr-2"
            >Classes</v-btn>
            <v-btn
              to="/sailorspoint/kidLearnToSail"
              color="info"
              class="mr-2"
            >Kid Learn To Sail</v-btn>
            <v-btn
              to="/sailorspoint/adultLearnToSail"
              color="info"
              class="mr-2"
            >Adult Learn To Sail</v-btn>
            <v-btn
              to="/sailorspoint/racing"
              color="info"
              class="mr-2"
            >Racing</v-btn>

          </v-toolbar>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <router-link></router-link>
          <router-view></router-view>
        </v-col>
      </v-row>
      <v-row>
        <v-col><Directions/></v-col>
      </v-row>
      <v-row>
        <v-col>For more information contact: <a href="mailto:sailorspoint@gulfstreamsailingclub.org">sailorspoint@gulfstreamsailingclub.org</a></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  import Directions from '../components/SailorsPoint/Directions'
  export default {
    name: "SailorsPoint",
    components: {Directions},
    created() {
      this.$router.push('sailorspoint/about')
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
