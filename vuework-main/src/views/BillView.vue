<template>
  <div class="bill-page">
    <h1>Bill</h1>
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in billItems" :key="item.id">
          <td>{{ item.name }}</td>
          <td>{{ item.quantity }}</td>
          <td>{{ item.price }}$</td>
          <td>{{ item.quantity * item.price }}$</td>
        </tr>
      </tbody>
    </table>
    <h3>Total Amount: {{ total }}$</h3>
    <button @click="printBill" class="btn-print">Print PDF</button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const billItems = ref([
  { id: 1, name: 'Dog Food', quantity: 2, price: 15 },
  { id: 2, name: 'Cat Toy', quantity: 1, price: 10 }
])

const total = computed(() => billItems.value.reduce((sum, i) => sum + i.quantity * i.price, 0))

const printBill = () => alert('Print PDF functionality coming soon')
</script>

<style scoped>
.bill-page { max-width: 1000px; margin: 2rem auto; padding: 1rem; font-family: 'Poppins', sans-serif; }
h1 { color: #27ae60; text-align: center; margin-bottom: 1rem; }
table { width: 100%; border-collapse: collapse; margin-bottom: 1rem; }
th, td { padding: 0.8rem; border: 1px solid #ddd; text-align: center; }
th { background: #dff9fb; }
.btn-print { background: #27ae60; color: white; padding: 0.5rem 1rem; border-radius: 8px; border: none; cursor: pointer; }
.btn-print:hover { background: #2ecc71; }
h3 { text-align: right; }
</style>
