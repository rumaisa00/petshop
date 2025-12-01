<template>
  <div id="app">
    <!-- Header -->
    <AppHeader />

    <!-- Main content where router views render -->
    <main class="main-content">
      <RouterView />
    </main>

    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from './layout/components/AppHeader.vue'
import AppFooter from './layout/components/AppFooter.vue'
</script>

<style>
/* Reset and global styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, sans-serif;
  background-color: #f5f7fa;
  color: #2c3e50;
  line-height: 1.6;
}

/* App container */
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Main content styling */
.main-content {
  flex: 1;
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  transition: all 0.3s ease;
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .main-content {
    padding: 1.5rem;
  }
}

@media (max-width: 768px) {
  .main-content {
    padding: 1rem;
  }
}
</style>
