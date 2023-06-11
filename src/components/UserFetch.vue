<script setup lang="ts">
import { reactive } from 'vue';
import { User } from '../types/User';
const state = reactive({
  status: {
    isReady: false,
    error: null,
  },
  currentUser: null as User | null,
})
function fetchUser() {
  const response = fetch("https://randomuser.me/api");
  response.then((res) => res.json()).then(data => {
    state.currentUser = data.results[0];
  }).catch((err) => {
    state.status.error = err.message;
  }).finally(() => state.status.isReady = true);
}
fetchUser();
</script>

<template>
  <div class="card">
    <div v-if="state.status.isReady && state.currentUser" class="card-user">
      <img v-bind:src="state.currentUser.picture.large">
      <p>{{ state.currentUser.name.first + " " + state.currentUser.name.last}}</p>
    </div>
    <button type="button" @click="fetchUser()">get user</button>
  </div>
</template>

<style scoped>
  .card {
    width: 400px;
    overflow-wrap: break-word;
  }
  .card img {
    border-radius: 100%;
    border-style: solid;
    border-color: black;
    border-width: 9px;
    aspect-ratio: 1;
    width: 70%;
  }
  button {
    aspect-ratio: 1;
    font-size: 0.5em;
    width: 30%;
    border: none;
    border-radius: 100%;
    margin-top: .4rem;
    color: white;
    background-color: #343434;
    border-color: #565656;
    border-width: 5px;
    border-style: solid;
    text-transform: uppercase;
    cursor: pointer;
    transition: ease-in-out .2s;
  }
  button:hover {
    border-color: #121212;
    transition: ease-in-out .2s;
  }
</style>