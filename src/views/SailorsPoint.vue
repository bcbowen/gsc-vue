<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12"><h1>Sailors Point</h1></v-col>
      </v-row>
      <v-row>
        <v-col cols="">
          <v-navigation-drawer permanent="true">
            <v-list
              dark="true"
              color="primary darken-1"
              dense="true">
              <v-list-item>
              <v-btn
                to="/sailorspoint/about"
                color="info"
                class="mr-2 flex">About</v-btn>
            </v-list-item>
            <v-list-item>
              <v-btn
                to="/sailorspoint/classes"
                color="info"
                class="mr-2 flex">Classes</v-btn>
            </v-list-item>
            <v-list-item>
              <v-btn
                to="/sailorspoint/kidLearnToSail"
                color="info"
                class="mr-2 flex">Kid Learn To Sail</v-btn>
            </v-list-item>
              <v-list-item>
              <v-btn
                to="/sailorspoint/adultLearnToSail"
                color="info"
                class="mr-2 flex"
              >Adult Learn To Sail</v-btn>
            </v-list-item>
            <v-list-item>
              <v-btn
                to="/sailorspoint/racing"
                color="info"
                class="mr-2 flex"
              >Racing</v-btn>
            </v-list-item>

              <!--
              <v-list-title>
                <v-list-title-action></v-list-title-action>
                <v-list-title-content><v-list-tile-title>{{ item.title }}</v-list-tile-title></v-list-title-content>
              </v-list-title>
              -->
            </v-list>

          </v-navigation-drawer>
        </v-col>
        <v-col cols="9">
          <v-row>
            <v-col cols="12"><router-view></router-view></v-col>
            <v-col cols="12"><Directions/></v-col>
            <v-col cols="12">For more information contact: <a href="mailto:sailorspoint@gulfstreamsailingclub.org">sailorspoint@gulfstreamsailingclub.org</a></v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Directions from "../components/SailorsPoint/Directions";
export default {
  name: "SailorsPoint",
  components: { Directions },
  mounted () {
    if (this.$router.currentRoute.fullPath.toLowerCase() === '/sailorspoint') {
      this.$router.push("sailorspoint/about");
    }
    console.log(this.$router.currentRoute)
  }
};
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
