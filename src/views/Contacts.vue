<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" md="6"><OfficersTable :officers="officers"></OfficersTable></v-col>
        <v-col cols="12" md="6"><CommitteeChairsTable :chairs="chairs"></CommitteeChairsTable></v-col>
      </v-row>
      <v-row>
        <v-col cols=12>
          <p>Contact the <a href="mailto:board@gulfstreamsailingclub.org">Board</a> for more information.</p>
        </v-col>
      </v-row>
    </v-container>
    

  </div>

</template>

<script>
  import CommitteeChairsTable from '../components/CommitteeChairsTable';
  import OfficersTable from '../components/OfficersTable';
  import officersData from '../data/officers.json';
  import chairsData from '../data/chairs.json';
  export default {
    name: "ContactsPage",
    components: { OfficersTable, CommitteeChairsTable },
    data() {
      return {
        officers: officersData,
        chairs: chairsData
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
