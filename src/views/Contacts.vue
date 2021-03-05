<template>
  <div>
    <v-container>
      <v-row>
        <v-col md="6" sm="12">
          <MemberList :members="officers" :header="'2021 Governing Board'"></MemberList>
        </v-col>
        <v-col md="6" sm="12">
          <MemberList :members="chairs" :header="'2021 Committee Chairs'"></MemberList>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <p>
            Contact the
            <a href="mailto:board@gulfstreamsailingclub.org">Board</a> for more information.
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// import CommitteeChairsTable from '../components/CommitteeChairsTable'
// import OfficersTable from '../components/OfficersTable'
import MemberList from '../components/MemberList'
import officersData from '../data/officers.json'
import chairsData from '../data/chairs.json'
export default {
  name: 'ContactsPage',
  components: { MemberList },
  data () {
    return {
      officers: officersData,
      chairs: chairsData
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
