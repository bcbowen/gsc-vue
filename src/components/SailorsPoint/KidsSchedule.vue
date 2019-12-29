<template>
  <div>
    <h3></h3>
    
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

    <!--
    <h4>Sessions:</h4>
    <v-form>
      <v-select
        :items="scheduleData.Sessions"
        item-text="Session"
        item-value="Session"
        label="Session Number"
        @change="selectSession"
        v-model="selectedSession"
      ></v-select>
      <v-list>
        <v-list-item>Registration: {{ selectedSession.Registration }}</v-list-item>
        <v-list-item>Class 1: {{ selectedSession.Classes[0] }}</v-list-item>
        <v-list-item>Class 2: {{ selectedSession.Classes[1] }}</v-list-item>
        <v-list-item>Class 3: {{ selectedSession.Classes[2] }}</v-list-item>
        <v-list-item>Class 4: {{ selectedSession.Classes[3] }}</v-list-item>
        <v-list-item>Class 5: {{ selectedSession.Classes[4] }}</v-list-item>
        <v-list-item>Class 6: {{ selectedSession.Classes[5] }}</v-list-item>
      </v-list>
    </v-form>
    -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      //selectedSession: this.scheduleData.Sessions[0]
    }
  },
  props: {
    scheduleData: {
      type: Object
    }
  },
  methods: {
    /*selectSession: function (id) {
      let index = 0
      for (var i = 0; i < this.scheduleData.Sessions.length; i++) {
        if (this.scheduleData.Sessions[i].Session === id) {
          index = i
          break
        }
      }
      this.selectedSession = this.scheduleData.Sessions[index]
    }
    */
  }
}
</script>

<style lang="scss" scoped>
</style>
