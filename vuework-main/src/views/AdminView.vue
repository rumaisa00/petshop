<template>
  <div class="admin-dashboard">
    <h1>Pet Store Admin Dashboard</h1>
    <h2>Welcome, {{ adminName }}</h2>

```
<!-- Stats Cards -->
<div class="stats-cards">
  <div class="stat-card" v-for="stat in stats" :key="stat.label">
    <div class="stat-icon">{{ stat.icon }}</div>
    <h3>{{ stat.label }}</h3>
    <p>{{ stat.value }}</p>
  </div>
</div>

<!-- Admin Action Cards -->
<div class="admin-actions">
  <router-link v-for="action in actions" :key="action.title" :to="action.link" class="action-card">
    <div class="action-icon">{{ action.icon }}</div>
    <h3>{{ action.title }}</h3>
    <p>{{ action.description }}</p>
  </router-link>
</div>
```

  </div>
</template>

<script setup>
import { ref } from 'vue'

// Placeholder admin name
const adminName = ref('Admin')

// Dynamic stats
const stats = ref([
  { label: 'Animals', value: 120, icon: '🐶' },
  { label: 'Customers', value: 85, icon: '👥' },
  { label: 'Orders', value: 230, icon: '🛒' },
  { label: 'Employees', value: 15, icon: '🧑‍💼' }
])

// Admin actions
const actions = ref([
  { title: 'Manage Pets', description: 'Add, edit, or remove pets', link: '/manage-pets', icon: '🐾' },
  { title: 'Manage Food', description: 'Add, edit, or remove food items', link: '/manage-food', icon: '🍖' },
  { title: 'Manage Supplies', description: 'Update stock and details', link: '/manage-supplies', icon: '📦' },
  { title: 'Manage Orders', description: 'View and update customer orders', link: '/manage-orders', icon: '📝' },
  { title: 'Manage Employees', description: 'Add, edit, or remove employees', link: '/manage-employees', icon: '🧑‍💼' }
])
</script>

<style scoped>
.admin-dashboard {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Poppins', sans-serif;
  color: #2c3e50;
  text-align: center;
}

h1 {
  font-size: 2.5rem;
  color: #27ae60;
  margin-bottom: 0.5rem;
}
h2 {
  font-size: 1.5rem;
  color: #34495e;
  margin-bottom: 2rem;
}

/* Stats Cards */
.stats-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.stat-card {
  background: linear-gradient(135deg, #81ecec22 0%, #74b9ff22 100%);
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  transition: all 0.3s ease;
  cursor: default;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}
.stat-card:hover {
  transform: translateY(-5px);
  background: linear-gradient(135deg, #81ecec33 0%, #74b9ff33 100%);
}
.stat-card .stat-icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}
.stat-card h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}
.stat-card p {
  font-size: 1.8rem;
  font-weight: bold;
  color: #0984e3;
}

/* Admin Action Cards */
.admin-actions {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
}

.action-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #dff9fb;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  text-decoration: none;
  color: #2d3436;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
}
.action-card:hover {
  transform: translateY(-7px);
  background: #c7ecee;
}
.action-card .action-icon {
  font-size: 2.5rem;
  margin-bottom: 0.7rem;
}
.action-card h3 {
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
}
.action-card p {
  font-size: 1rem;
  color: #34495e;
}

/* Responsive tweaks */
@media (max-width: 768px) {
  .stats-cards, .admin-actions {
    grid-template-columns: 1fr;
  }
  .admin-dashboard {
    padding: 1rem;
  }
}
</style>
