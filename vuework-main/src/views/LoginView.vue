<template>
  <div class="login-page">
    <h1>Pet Store Login</h1>
    <form @submit.prevent="login">
      <input type="text" v-model="username" placeholder="Username" required />
      <input type="password" v-model="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
    <p>Don't have an account? <router-link to="/signup">Sign Up</router-link></p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const username = ref('')
const password = ref('')

const login = () => {
  alert(`Logging in as ${username.value}`)
  // Replace with real authentication logic later
}
</script>

<style scoped>
.login-page {
  max-width: 400px;
  margin: 4rem auto;
  padding: 2rem;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  background: #dff9fb;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}
input {
  width: 100%;
  padding: 0.8rem;
  margin: 0.5rem 0;
  border-radius: 8px;
  border: 1px solid #ccc;
}
button {
  width: 100%;
  padding: 0.8rem;
  background: #27ae60;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;
}
button:hover { background: #2ecc71; }
</style>
