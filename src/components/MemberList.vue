<template>
  <div>
    <table cellpadding="5" cellspacing="5">
      <tr><th colspan="3"><h2>{{ header }}</h2></th></tr>
      <tr v-for="(member, i) in members" :key="i">
        <td>{{ member.Title }}</td>
        <td width="50px">&nbsp;</td>
        <td><a :href="`mailto:${member.Email}`">{{ member.Name }}</a> </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'MemberList',
  props: {
    members: {
      type: Array,
      required: true
    },
    header: {
      type: String,
      required: true
    }
  },
  data: () => ({
    headers: [
      { text: 'Title', value: 'Title' },
      { text: 'Name', value: 'Name' }
    ]
  })
}
</script>
