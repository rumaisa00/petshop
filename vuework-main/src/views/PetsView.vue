<template>
  <div class="manage-page">
    <h1>Manage Pets</h1>

```
<button @click="addPet" class="btn-add">+ Add New Pet</button>

<table>
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Type</th>
      <th>Age</th>
      <th>Status</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="pet in pets" :key="pet.id">
      <td>{{ pet.id }}</td>
      <td>{{ pet.name }}</td>
      <td>{{ pet.type }}</td>
      <td>{{ pet.age }}</td>
      <td>{{ pet.status }}</td>
      <td>
        <button @click="editPet(pet)">Edit</button>
        <button @click="removePet(pet.id)">Delete</button>
      </td>
    </tr>
  </tbody>
</table>
```

  </div>
</template>

<script setup>
import { ref } from 'vue'

const pets = ref([
  { id: 1, name: 'Buddy', type: 'Dog', age: '2 years', status: 'Available' },
  { id: 2, name: 'Kitty', type: 'Cat', age: '1 year', status: 'Sold' }
])

const addPet = () => alert('Add Pet functionality coming soon')
const editPet = (pet) => alert(`Edit ${pet.name}`)
const removePet = (id) => alert(`Remove pet ID ${id}`)
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
