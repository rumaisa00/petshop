<template>
  <div class="not-found-page">
    <div class="not-found-content">
      <h1 class="error-code">404</h1>
      <h2 class="error-title">Page Not Found</h2>
      <p class="error-message">Sorry, the page you are looking for does not exist.</p>
      <RouterLink to="/" class="btn btn-primary">Go Home</RouterLink>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.not-found-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  padding: 2rem;
}

.not-found-content {
  text-align: center;
  font-family: 'Poppins', sans-serif;
}

.error-code {
  font-size: 8rem;
  font-weight: 700;
  color: #667eea;
  margin: 0;
  line-height: 1;
}

.error-title {
  font-size: 2rem;
  color: #2c3e50;
  margin: 1rem 0;
}

.error-message {
  font-size: 1.1rem;
  color: #7f8c8d;
  margin-bottom: 2rem;
}

.btn {
  display: inline-block;
  padding: 0.8rem 2rem;
  background: #667eea;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: background 0.3s ease;
}

.btn:hover {
  background: #5568d3;
}

@media (max-width: 768px) {
  .error-code {
    font-size: 5rem;
  }
  
  .error-title {
    font-size: 1.5rem;
  }
}
</style>


