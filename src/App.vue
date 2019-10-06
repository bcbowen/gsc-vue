<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'Home'}" exact>
              <img src="./assets/gsc_logo_bl_bkg_sm.jpg" class="logo" />
              Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'SailorsPoint'}" exact>SailorsPoint</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'Contacts'}" exact>Contacts</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'Meetings'}" exact>Meetings</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'News'}" exact>News</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'Calendar'}" exact>Calendar</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'Photos'}" exact>Photos</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'Events'}" exact>Events</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'Join'}" exact>Join</router-link>
          </li>
        </ul>
      </nav>
    </header>
    <div class="container">
      <aside class="aside">
        <router-view name="sidebar" />
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>

export default {
  name: "app",
};
</script>

<style>
body {
  background: linear-gradient(to bottom, white, #d5e2f0);
  background-attachment: fixed;
}
</style>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
main {
  padding: 30px;
  background-color: white;
  width: 964px;
  min-height: 300px;
}

header {
  background-color: #187fe0;
  width: 1184px;
  margin: 0 auto;
}
ul {
  padding: 3px;
  display: flex;
}
.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  border-right: 1px solid #bbb;
  color: #c1c716;
}
.logo {
  vertical-align: middle;
  height: 30px;
}
.nav-link {
  text-decoration: none;
  color: inherit;
}
.router-link-active {
  color: white;
}
.container {
  display: flex;
  margin: 10px auto 0 auto;
  justify-content: center;
}
.aside {
  padding: 30px;
  background-color: #aaa;
  width: 100px;
  min-height: 300px;
}

</style>
