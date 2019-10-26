<template>
  <v-app>
    <v-header class="mainlogo">
      <span>
        <img src=".\assets\gsc_logo_bl_bkg_sm.jpg" class="logo mr-4" /> Gulfstream Sailing Club
      </span>
    </v-header>
    <v-toolbar
      dark="true"
      color="primary darken-1"

    >
      <v-toolbar-items>
        <v-btn
          v-for="link in links"
          :key="`${link.label}-header-link`"
          text
          :to="link.url"
          dark
        >{{ link.label }}</v-btn>
      </v-toolbar-items>
    </v-toolbar>

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
        >{{ link.label }}</v-btn>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      links: [
        {
          label: "Home",
          url: "/"
        },
        {
          label: "Sailors Point",
          url: "/sailorsPoint"
        },
        {
          label: "Contacts",
          url: "/contacts"
        },
        {
          label: "Meetings",
          url: "/meetings"
        },
        {
          label: "Calendar",
          url: "/calendar"
        },
        {
          label: "Photos",
          url: "/photos"
        },
        {
          label: "Events",
          url: "/events"
        },
        {
          label: "Membership",
          url: "/membership"
        },
        {
          label: "Regatta",
          url: "/regatta"
        }
      ]
    };
  }
};
</script>

<style scoped>
.logo {
  vertical-align: middle;
  height: 40px;
}
.mainlogo {
  background-color: #003366;
  font-size: xx-large;
  color: white;
}

</style>
