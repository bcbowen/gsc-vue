<template>
  <div>
    <v-container>
      


      <v-row>
        <v-col cols="8">Meetings</v-col>
        <v-col cols="4"><MeetingMinutes></MeetingMinutes></v-col>
      </v-row>
      <v-row>
        <v-col><v-col cols="8">
          <HappyHour></HappyHour>
        </v-col></v-col>
      </v-row>

    </v-container>
  </div>
</template>

<script>
  import HappyHour from '../components/HappyHour/HappyHour'
  import MeetingMinutes from '../components/MeetingMinutes'
  export default {
    components: { HappyHour, MeetingMinutes }
  }
</script>

<style lang="scss" scoped>

</style>
