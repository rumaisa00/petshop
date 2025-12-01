<template>
  <footer class="app-footer">
    <div class="container">
      <p>&copy; {{ currentYear }} SmartPetShop. Built with Vue 3.</p>
      <div class="footer-links">
        <a href="https://github.com/yourusername/your-repo" target="_blank" rel="noopener">
          GitHub
        </a>
        <span>•</span>
        <a href="mailto:your.email@example.com">Contact</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
.app-footer {
  background: #2c3e50;
  color: white;
  padding: 2rem 0;
  margin-top: auto;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-links {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.footer-links a {
  color: white;
  text-decoration: none;
  transition: opacity 0.3s ease;
}

.footer-links a:hover {
  opacity: 0.8;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
}
</style>
