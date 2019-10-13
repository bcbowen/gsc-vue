<template>
  <v-container>
    <v-row>
      <v-col cols="8">
        <v-card>
              <v-card-title>About</v-card-title>
              <v-card-text>The GULFSTREAM SAILING CLUB, founded in 1957, is one of Broward County's oldest sailing clubs. The Sailing Club is run by its members who are volunteers and are committed to preserving fun, safety and affordability in Fort Lauderdale yachting.
                Boat ownership is not a prerequisite!

                We are an active club, holding and participating in many activities and events, including:

                Races on the ocean and at the lake in Hollywood throughout the year
                Our annual Beach Bash each August
                Our annual Gulfstream Sailing Club Regatta, which began in 1991, continues to this day with multiple sailing clubs participating each year
                Sailing lessons for Adults and Children at Sailors Point.
                In case you are interested, you can read the current Club bylaws here.
            </v-card-text>

        </v-card>
      </v-col>
      <v-col cols="4">
        <Sponsors></Sponsors>
      </v-col>
      <v-col cols="8">
        <v-card>
          <v-card-title>What's New</v-card-title>
          <v-card-text>
            <h3>
              <ul>
                <li>Join us for Happy Hour at our NEW LOCATION! Every Tuesday when there isn't a General Meeting. The new location is: Bahama Breeze, Oakland Park, so come out and join us! We get started around 6:30 PM.</li>
                <li>Meetings are held on the third Tuesday of each month. Click here for more info on the meetings.</li>
                <li>Open Sail every weekend at Sailor's Point We have Optis, Sunfish &amp; 420s for your enjoyment. Saturday from 9:00 AM - 3:00 PM. Rentals still $5 for members.</li>
              </ul>
            </h3>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Sponsors from '../components/Sponsors/Sponsors'

export default {
  components: {
    Sponsors
  }
}
</script>
