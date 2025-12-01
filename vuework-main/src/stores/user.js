import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useUserStore = defineStore('user', () => {
  const user = ref(null)
  const users = ref([
    { id: 1, name: 'admin', role: 'admin', orders: [] },
    { id: 2, name: 'customer', role: 'customer', orders: [] }
  ])

  const isLoggedIn = computed(() => !!user.value)

  function login(u) { user.value = u }
  function logout() { user.value = null }
  function addUser(u) { users.value.push(u) }

  return { user, users, isLoggedIn, login, logout, addUser }
})
