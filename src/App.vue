<template>
  <v-app>
    <v-header class="mainlogo">
      <span>
        <img src=".\assets\gsc_logo_bl_bkg_sm.jpg" class="logo mr-4" /> Gulfstream Sailing Club
      </span>
    </v-header>

    <!-- class="hidden-sm-and-down" -->

    <v-toolbar
      dark="true"
      color="primary darken-1"
      v-if="$vuetify.breakpoint.lgAndUp"
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
    <!-- class="hidden-md-and-up" -->

    <v-navigation-drawer
      v-if="$vuetify.breakpoint.mdAndDown"
      permanent="true"
    >
      <v-list
        dark="true"
        color="primary darken-1"
        dense="true">
         <v-list-item v-for="link in links" :key="`${link.label}-header-link`">
          <v-btn
            class="flex"
            text
            :to="link.url"
            dark
          >{{ link.label }}</v-btn>
         </v-list-item>

        <!--
        <v-list-title>
          <v-list-title-action></v-list-title-action>
          <v-list-title-content><v-list-tile-title>{{ item.title }}</v-list-tile-title></v-list-title-content>
        </v-list-title>
        -->
      </v-list>
      <!--
         <v-list dense class="pt-0">
      <v-list-tile
        v-for="item in items"
        :key="item.title"
        @click=""
      >
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>

      -->
    </v-navigation-drawer>

    <v-content>
      <router-view></router-view>
    </v-content>

    <!-- Only show footer for large screens and above (>=600px)-->
    <v-footer color="primary lighten-1" padless v-if="$vuetify.breakpoint.lgAndUp">
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
        /*
        {
          label: "Events",
          url: "/events"
        },
        */
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
  },
  created: function() {
    console.log("hi");
    console.log(this.$vuetify.breakpoint.name);
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
