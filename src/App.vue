<script setup lang="ts">
import UserFetch from './components/UserFetch.vue'
</script>

<template>
  <h1>Fetch User - VueJS</h1>
  <div class="container">
    <UserFetch />
  </div>
</template>

<style scoped>
h1 {
  width: 100%;
  text-align: center;
}
.container {
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 2em;
}
@media (max-width: 768px) {
  h1 {
    font-size: .7rem;
  }
}
</style>
