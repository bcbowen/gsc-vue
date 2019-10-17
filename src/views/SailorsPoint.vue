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
    components: {Directions}
  }
</script>

<style lang="scss" scoped>

</style>
