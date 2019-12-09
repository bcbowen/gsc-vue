<template>
  <div>
    <v-container>
      <v-row>
        <v-col lg="8" md="6" sm="12">
          <v-row>
            <v-col><MeetingInfo></MeetingInfo></v-col>
          </v-row>
          <v-row>
            <v-col><HappyHour></HappyHour></v-col>
          </v-row>
        </v-col>
        <v-col lg="4" md="6" sm="12">
          <v-row>
            <v-col><GeneralMinutes></GeneralMinutes></v-col>
          </v-row>
          <v-row>
            <v-col><BoardMinutes></BoardMinutes></v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import HappyHour from "../components/HappyHour/HappyHour"
import GeneralMinutes from "../components/GeneralMinutes"
import BoardMinutes from "../components/BoardMinutes"
import MeetingInfo from "../components/MeetingInfo"
export default {
  components: { HappyHour, GeneralMinutes, BoardMinutes, MeetingInfo }
}
</script>

<style lang="scss" scoped>
</style>
