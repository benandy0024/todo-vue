<template>
  <div class="container">
    <router-view />
  </div>
</template>

<script setup>
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.container {
  max-width: 500px;
  overflow: auto;
  min-height: 400px;
  margin: 30px auto;
  padding: 30px;
  border-radius: 5px;
  background-color: #f8f9fa;
}
</style>
