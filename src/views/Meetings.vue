<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="8">
          <v-row>
            <v-col><MeetingInfo></MeetingInfo></v-col>
          </v-row>
          <v-row>
            <v-col><HappyHour></HappyHour></v-col>
          </v-row>
        </v-col>
        <v-col cols="4">
          <v-row>
            <v-col><MeetingMinutes></MeetingMinutes></v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import HappyHour from "../components/HappyHour/HappyHour";
import MeetingMinutes from "../components/MeetingMinutes";
import MeetingInfo from "../components/MeetingInfo";
export default {
  components: { HappyHour, MeetingMinutes, MeetingInfo }
};
</script>

<style lang="scss" scoped>
</style>
