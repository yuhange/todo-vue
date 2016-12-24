<style src="todomvc-app-css/index.css"></style>

<template>
  <div id="app">
    <nav>
    <ul>
      <li><router-link to="/">today</router-link></li>
      <li><router-link to="/history">history</router-link></li>
    </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
