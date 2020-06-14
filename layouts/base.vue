<template>
  <div id="app">
    <div class="header">
      <nuxt-link to="/">Método Clásico</nuxt-link>
      <nuxt-link to="/jcp">Método JSON Config Property</nuxt-link>
      <nuxt-link to="/component">Universal Component</nuxt-link>
      <nuxt-link to="/tree">Recursive Tree</nuxt-link>
      <nuxt-link to="/engine">UI Engine</nuxt-link>
      <nuxt-link to="/vuetify">Vuetify</nuxt-link>
      <nuxt-link to="/vuetify-engine">Vuetify Engine</nuxt-link>
    </div>
    <nuxt/>
  </div>
</template>

<style lang="css" scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.header {
  display: flex;
  justify-content: space-between;
}
pre {
  text-align: left !important;
  background-color: #2c3e50 !important;
}
</style>

