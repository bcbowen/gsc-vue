<template>
  <div>
    <v-card max-height="300px" class="overflow-y-auto">
      <v-card-title>{{ scheduleData.Year }} Learn-to-Sail Schedule (kids ages 8 to 14 - level 1)</v-card-title>
      <v-expansion-panels accordion>
        <v-expansion-panel v-for="(session, i) in scheduleData.Sessions" :key="i">
          <v-expansion-panel-header><b>Session {{ session.Session }}</b></v-expansion-panel-header>
          <v-expansion-panel-content>
            <table>
              <tr>
                <th>Registration</th>
                <td>{{ session.Registration }}</td>
              </tr>
              <tr v-for="(classDate, classIndex) in session.Classes" :key="classIndex">
                <th>Class {{ classIndex + 1}}</th>
                <td>{{ classDate }}</td>
              </tr>
            </table>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card>

  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    scheduleData: {
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
