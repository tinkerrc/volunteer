<template>
    <div class="home">
      <img alt="Vue logo" src="@/assets/logo/logo.png" />
      <h2>Welcome to Your Vue App</h2>
  
      <div v-if="!$auth.loading">
        <button v-if="!$auth.isAuthenticated" @click="login">Log in</button>
        <button v-if="$auth.isAuthenticated" @click="logout">Log out</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "home",
    methods: {
      login() {
        this.$auth.loginWithRedirect();
      },
      logout() {
        this.$auth.logout({
          logoutParams: {
            returnTo: window.location.origin + "/home"
          }
        });
      }
    }
  };
  </script>
  