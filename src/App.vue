<template>
  <div>
    <nav>
      <router-link to="/login">Login</router-link> |
      <router-link to="/Registro">Registro</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
export default {
  name: 'App'
};
</script>

<style scoped>
nav {
  position: absolute;
  top: 2%;
  right: 35px;
}
</style>
