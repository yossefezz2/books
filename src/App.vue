<template>
  <body style='background-color: #e1c7a2; flex: 1 1 auto;margin-bottom: 14%;' >
      <div id="app">
        <b-container>
          <b-card
            style="border-radius: 25px; background-color: #f2ebe3"
            class="maincard"
          >
            <AppHeder />
            <router-view />
          </b-card>
        </b-container>
      </div>
  </body>

</template>
<script>
import AppHeder from "@/components/global/AppHeder.vue";

export default {
  name: "App",
  components: {
    AppHeder,
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: black;
    text-decoration: none;

    border-color: transparent;
    border-radius: 25px;
    text-align: center;
    padding: 3px 20px;
    &.router-link-exact-active {
      background-color: #daaa63;
      border-color: transparent;
      border-radius: 25px;
      text-align: center;
      padding: 8px 20px;
    }
    &:hover {
      color: black;
    }
    &:hover:not(.router-link-exact-active) {
      color: #daaa63;
    }
  }
}

body,
html {
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100vh;
}
</style>
<style>
@import "./assets/css/home.css";
</style>
