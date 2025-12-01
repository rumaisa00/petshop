<template>
  <div class="manage-page">
    <h1>Manage Supplies</h1>

```
<button @click="addSupply" class="btn-add">+ Add Supply</button>

<table>
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Quantity</th>
      <th>Status</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="supply in supplies" :key="supply.id">
      <td>{{ supply.id }}</td>
      <td>{{ supply.name }}</td>
      <td>{{ supply.quantity }}</td>
      <td>{{ supply.status }}</td>
      <td>
        <button @click="editSupply(supply)">Edit</button>
        <button @click="removeSupply(supply.id)">Delete</button>
      </td>
    </tr>
  </tbody>
</table>
```

  </div>
</template>

<script setup>
import { ref } from 'vue'

const supplies = ref([
  { id: 1, name: 'Leash', quantity: 30, status: 'Available' },
  { id: 2, name: 'Bowl', quantity: 10, status: 'Low Stock' }
])

const addSupply = () => alert('Add Supply functionality coming soon')
const editSupply = (supply) => alert(`Edit ${supply.name}`)
const removeSupply = (id) => alert(`Remove supply ID ${id}`)
</script>

<style scoped>
.manage-page { max-width: 1000px; margin: 2rem auto; padding: 1rem; font-family: 'Poppins', sans-serif; }
h1 { color: #27ae60; margin-bottom: 1rem; }
.btn-add { background: #27ae60; color: white; padding: 0.5rem 1rem; border-radius: 8px; border: none; margin-bottom: 1rem; cursor: pointer; }
.btn-add:hover { background: #2ecc71; }
table { width: 100%; border-collapse: collapse; }
th, td { padding: 0.8rem; border: 1px solid #ddd; text-align: center; }
th { background: #dff9fb; }
button { padding: 0.4rem 0.8rem; border-radius: 6px; border: none; cursor: pointer; margin: 0 0.2rem; }
button:hover { opacity: 0.8; }
</style>
