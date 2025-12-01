<template>
  <div class="cart-page">
    <h1>My Cart</h1>
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Total</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in cart" :key="item.id">
          <td>{{ item.name }}</td>
          <td>{{ item.quantity }}</td>
          <td>{{ item.price }}$</td>
          <td>{{ item.quantity * item.price }}$</td>
          <td><button @click="removeItem(item.id)">Remove</button></td>
        </tr>
      </tbody>
    </table>
    <h3>Total: {{ total }}$</h3>
    <button @click="checkout" class="btn-checkout">Checkout</button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const cart = ref([
  { id: 1, name: 'Dog Food', quantity: 2, price: 15 },
  { id: 2, name: 'Cat Toy', quantity: 1, price: 10 }
])

const total = computed(() => cart.value.reduce((sum, item) => sum + item.quantity * item.price, 0))

const removeItem = (id) => { cart.value = cart.value.filter(i => i.id !== id) }
const checkout = () => alert(`Total payment: ${total.value}$`)
</script>

<style scoped>
.cart-page { max-width: 1000px; margin: 2rem auto; padding: 1rem; font-family: 'Poppins', sans-serif; }
h1 { color: #27ae60; margin-bottom: 1rem; text-align: center; }
table { width: 100%; border-collapse: collapse; margin-bottom: 1rem; }
th, td { padding: 0.8rem; border: 1px solid #ddd; text-align: center; }
th { background: #dff9fb; }
button { padding: 0.4rem 0.8rem; border-radius: 6px; border: none; cursor: pointer; margin: 0 0.2rem; }
button:hover { opacity: 0.8; }
.btn-checkout { background: #27ae60; color: white; margin-top: 1rem; }
.btn-checkout:hover { background: #2ecc71; }
h3 { text-align: right; }
</style>
