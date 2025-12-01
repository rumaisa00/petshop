<template>
  <div class="employee-dashboard">
    <h1>Employee Dashboard</h1>
    <h2>Welcome, {{ employeeName }}</h2>

```
<!-- Stats Cards -->
<div class="stats-cards">
  <div class="stat-card" v-for="stat in stats" :key="stat.label">
    <div class="stat-icon">{{ stat.icon }}</div>
    <h3>{{ stat.label }}</h3>
    <p>{{ stat.value }}</p>
  </div>
</div>

<!-- Employee Actions -->
<div class="employee-actions">
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

const employeeName = ref('Employee')

const stats = ref([
  { label: 'Customers', value: 85, icon: '👥' },
  { label: 'Orders', value: 230, icon: '🛒' }
])

const actions = ref([
  { title: 'Manage Customers', description: 'Add, edit, or remove customers', link: '/manage-customers', icon: '👤' },
  { title: 'Manage Orders', description: 'View and update orders', link: '/manage-orders', icon: '📝' }
])
</script>

<style scoped>
.employee-dashboard {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Poppins', sans-serif;
  color: #2c3e50;
  text-align: center;
}
h1 { font-size: 2.5rem; color: #27ae60; margin-bottom: 0.5rem; }
h2 { font-size: 1.5rem; color: #34495e; margin-bottom: 2rem; }

.stats-cards, .employee-actions {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.stat-card, .action-card {
  background: #dff9fb;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}
.stat-card:hover, .action-card:hover { transform: translateY(-5px); background: #c7ecee; }

.stat-icon, .action-icon { font-size: 2rem; margin-bottom: 0.5rem; }
h3 { font-size: 1.3rem; margin-bottom: 0.5rem; }
p { font-size: 1rem; color: #34495e; }

@media (max-width: 768px) { .stats-cards, .employee-actions { grid-template-columns: 1fr; } }
</style>
