<template>
  <div>
    <v-divider vertical="true"></v-divider>
    <OfficersTable :officers="officers"></OfficersTable>
    <v-divider vertical="true"></v-divider>
    <CommitteeChairsTable :chairs="chairs"></CommitteeChairsTable>
    <v-divider vertical="true"></v-divider>
    <p>Contact the <a href="mailto:board@gulfstreamsailingclub.org">Board</a> for more information.</p>
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
