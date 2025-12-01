<template>
  <div class="signup-page">
    <h1>Customer Signup</h1>
    <form @submit.prevent="signup">
      <input type="text" v-model="name" placeholder="Full Name" required />
      <input type="email" v-model="email" placeholder="Email" required />
      <input type="password" v-model="password" placeholder="Password" required />
      <button type="submit">Sign Up</button>
    </form>
    <p>Already have an account? <router-link to="/login">Login</router-link></p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const password = ref('')

const signup = () => {
  alert(`Signing up ${name.value}`)
  // Replace with real signup logic later
}
</script>

<style scoped>
.signup-page {
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
