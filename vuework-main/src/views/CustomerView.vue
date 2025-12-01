<template>
  <div class="customer-dashboard">
    <h1>Customer Dashboard</h1>
    <h2>Welcome, {{ customerName }}</h2>

    <!-- Quick Links -->
    <div class="customer-actions">
      <router-link v-for="action in actions" :key="action.title" :to="action.link" class="action-card">
        <div class="action-icon">{{ action.icon }}</div>
        <h3>{{ action.title }}</h3>
        <p>{{ action.description }}</p>
      </router-link>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const customerName = ref('Customer')

const actions = ref([
  { title: 'View Menu', description: 'Check pets, food, and supplies', link: '/menu', icon: '🛍️' },
  { title: 'My Orders', description: 'View order status and bills', link: '/my-orders', icon: '🛒' },
  { title: 'Cart', description: 'Add or edit items in cart', link: '/cart', icon: '🛒' },
  { title: 'Rate Services', description: 'Provide feedback for the shop', link: '/rate', icon: '⭐' }
])
</script>

<style scoped>
.customer-dashboard {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Poppins', sans-serif;
  color: #2c3e50;
  text-align: center;
}
h1 { font-size: 2.5rem; color: #27ae60; margin-bottom: 0.5rem; }
h2 { font-size: 1.5rem; color: #34495e; margin-bottom: 2rem; }

.customer-actions {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
}

.action-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: #2c3e50;
  transition: all 0.3s ease;
}

.action-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.action-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.action-card h3 {
  margin-bottom: 0.5rem;
  color: #27ae60;
}

.action-card p {
  color: #7f8c8d;
  font-size: 0.9rem;
}
</style>
