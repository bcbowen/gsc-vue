<template>
  <div>
    <h3>Gulfstream Sailing Club Racing Philosophy</h3>

    <br />We believe that racing furthers skill development for sailors young and old. Accordingly, Gulfstream Sailing Club holds an active schedule of dinghy and ocean capable racing. See below for the racing schedule for our Optimist (for children), Sunfish, and 420 racing. Racing is open to members and non-members alike.
    <br />
    <br />

    <SunfishRacingSchedule />

    <br />
    <h3>Commodores Cup</h3>
    <b>Dec 7</b>

    <p>Skipper&apos;s meeting at 11:00 AM each day, races start shortly thereafter.</p>

    <p>
      <b>Race Fee:</b> $5.00
    </p>

    <p>
      <b>Sunfish Rental Fee:</b> $5.00 for club members, $20.00 for non members
    </p>

    <p>
      <b>Requirements:</b> Closed toed shoes (rubber soles) and life jackets must be worn when sailing.
    </p>
  </div>
</template>

<script>
import SunfishRacingSchedule from '../SailorsPoint/SunfishRacingSchedule'
export default {
  name: 'Racing',
  components: { SunfishRacingSchedule }
}
</script>

<style lang="scss" scoped>
</style>
