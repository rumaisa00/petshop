<template>
  <header class="app-header">
    <div class="container">
      <!-- Logo -->
      <div class="logo">
        <RouterLink to="/">
          <h1>🐾 SmartPetShop</h1>
        </RouterLink>
      </div>

      <!-- Navigation Menu -->
      <nav class="nav-menu" :class="{ active: isMenuOpen }">
        <RouterLink to="/" @click="closeMenu">Home</RouterLink>
        <RouterLink to="/admin" @click="closeMenu">Admin</RouterLink>
        <RouterLink to="/employee" @click="closeMenu">Employee</RouterLink>
        <RouterLink to="/customer" @click="closeMenu">Customer</RouterLink>
        <RouterLink to="/manage-pets" @click="closeMenu">Pets</RouterLink>
        <RouterLink to="/manage-food" @click="closeMenu">Food</RouterLink>
        <RouterLink to="/manage-supplies" @click="closeMenu">Supplies</RouterLink>
        <RouterLink to="/orders" @click="closeMenu">Orders</RouterLink>
        <RouterLink to="/cart" @click="closeMenu">Cart</RouterLink>
      </nav>

      <!-- Mobile Menu Toggle -->
      <button class="menu-toggle" @click="toggleMenu" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<style scoped>
.app-header {
  background: linear-gradient(135deg, #27ae60 0%, #2ecc71 100%);
  color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo h1 {
  font-size: 1.5rem;
  font-weight: 700;
}

.logo a {
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
}

.nav-menu {
  display: flex;
  gap: 1.5rem;
}

.nav-menu a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.nav-menu a:hover {
  background: rgba(255, 255, 255, 0.2);
}

.nav-menu a.router-link-active {
  background: rgba(255, 255, 255, 0.25);
  font-weight: 600;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.menu-toggle span {
  display: block;
  width: 25px;
  height: 3px;
  background: white;
  border-radius: 3px;
  transition: all 0.3s ease;
}

/* Responsive */
@media (max-width: 768px) {
  .container {
    padding: 1rem;
  }

  .menu-toggle {
    display: flex;
  }

  .nav-menu {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: linear-gradient(135deg, #27ae60 0%, #2ecc71 100%);
    flex-direction: column;
    gap: 0;
    padding: 1rem;
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }

  .nav-menu.active {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  .nav-menu a {
    padding: 1rem;
    border-radius: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
}
</style>
