<template>
  <div>
    <v-card max-width="500" class="mx-auto">
      <v-toolbar color="primary" dark>
        <v-toolbar-title>Committee Chairpersons</v-toolbar-title>
        <div class="flex-grow-1"></div>
      </v-toolbar>
      <v-data-table
        :headers="headers"
        :items="chairs"
        class="elevation-1"
        disable-pagination="true"
        disable-sort="true"
        hide-default-footer="true"
      >
        <template item.Name="{ item }">
          <a :href="`mailto:${item.Email}`">{{ item.Name }}</a>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'CommitteeChairsTable',
  props: {
    chairs: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    headers: [
      { text: 'Committee', value: 'Committee' },
      { text: 'Name', value: 'Name' }
    ]
  })
}
</script>
