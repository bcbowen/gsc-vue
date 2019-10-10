<template>
  <v-app>
    <v-app-bar app color="primary" dark>

    <v-btn
      v-for="link in links"
      :key="`${link.label}-header-link`"
      text
      rounded
      :to="link.url"
    >
      {{ link.label }}
    </v-btn>
  </v-app-bar>

  <v-content>
    <router-view></router-view>
  </v-content>
  <v-footer color="primary lighten-1" padless>
			<v-layout justify-center wrap>
				<v-btn
					v-for="link in links"
					:key="`${link.label}-footer-link`"
					color="white"
					text
					rounded
					class="my-2"
					:to="link.url"
				>
					{{ link.label }}
				</v-btn>
			</v-layout>
		</v-footer>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      links: [
        {
					label: 'Home',
					url: '/'
				},
				{
					label: 'Sailors Point',
					url: '/sailorsPoint'
        },
        {
					label: 'Contacts',
					url: '/contacts'
				},
				{
					label: 'Meetings',
					url: '/meetings'
				},
        {
					label: 'News',
					url: '/news'
				},
				{
					label: 'Events',
					url: '/events'
				},
				{
					label: 'Join',
					url: '/join'
				}
      ]
    }
  }
}
</script>
