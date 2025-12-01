<template>
  <div class="manage-page">
    <h1>Manage Food Items</h1>

```
<button @click="addFood" class="btn-add">+ Add Food</button>

<table>
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Type</th>
      <th>Quantity</th>
      <th>Status</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="food in foods" :key="food.id">
      <td>{{ food.id }}</td>
      <td>{{ food.name }}</td>
      <td>{{ food.type }}</td>
      <td>{{ food.quantity }}</td>
      <td>{{ food.status }}</td>
      <td>
        <button @click="editFood(food)">Edit</button>
        <button @click="removeFood(food.id)">Delete</button>
      </td>
    </tr>
  </tbody>
</table>
```

  </div>
</template>

<script setup>
import { ref } from 'vue'

const foods = ref([
  { id: 1, name: 'Dog Food', type: 'Dry', quantity: 50, status: 'Available' },
  { id: 2, name: 'Cat Food', type: 'Wet', quantity: 20, status: 'Low Stock' }
])

const addFood = () => alert('Add Food functionality coming soon')
const editFood = (food) => alert(`Edit ${food.name}`)
const removeFood = (id) => alert(`Remove food ID ${id}`)
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
