<template>
  <div class="home-view">
    <section class="hero">
      <h1>Welcome to Pet Store Management System</h1>
      <p class="subtitle">
        Manage pets, food, supplies, customers, and orders with a modern smart dashboard
      </p>

      <div class="cta-buttons">
        <RouterLink to="/products" class="btn btn-primary">Browse Products</RouterLink>
        <RouterLink to="/login" class="btn btn-secondary">Login</RouterLink>
        <RouterLink to="/signup" class="btn btn-secondary">Sign Up</RouterLink>
      </div>
    </section>

    <section class="features">
      <h2>Features</h2>
      <div class="feature-grid">
        <div class="feature-card">
          <div class="icon">🐶</div>
          <h3>Manage Pets</h3>
          <p>Add, edit, and remove pets from the store inventory</p>
        </div>

        <div class="feature-card">
          <div class="icon">🍖</div>
          <h3>Food & Supplies</h3>
          <p>Track stock, update quantities, and control product availability</p>
        </div>

        <div class="feature-card">
          <div class="icon">🛒</div>
          <h3>Customer Orders</h3>
          <p>Customers can place orders and view detailed bills</p>
        </div>

        <div class="feature-card">
          <div class="icon">⭐</div>
          <h3>Ratings</h3>
          <p>View customer feedback and store ratings</p>
        </div>
      </div>
    </section>

    <section class="stats">
      <div class="stat-item">
        <h3>{{ stats.pets }}</h3>
        <p>Pets Available</p>
      </div>
      <div class="stat-item">
        <h3>{{ stats.foods }}</h3>
        <p>Food Items</p>
      </div>
      <div class="stat-item">
        <h3>{{ stats.customers }}</h3>
        <p>Customers</p>
      </div>
      <div class="stat-item">
        <h3>{{ stats.orders }}</h3>
        <p>Total Orders</p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";

const stats = ref({
  pets: 12,
  foods: 25,
  customers: 8,
  orders: 4,
});
</script>

<style scoped>
.home-view {
  max-width: 1200px;
  margin: 0 auto;
}

.hero {
  text-align: center;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #7dd3fc22 0%, #38bdf822 100%);
  border-radius: 12px;
  margin-bottom: 3rem;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #0f172a;
}

.subtitle {
  font-size: 1.3rem;
  color: #334155;
  margin-bottom: 2rem;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: 1rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-block;
}

.btn-primary {
  background: linear-gradient(135deg, #38bdf8 0%, #0ea5e9 100%);
  color: white;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(56, 189, 248, 0.4);
}

.btn-secondary {
  background: white;
  color: #0ea5e9;
  border: 2px solid #0ea5e9;
}

.btn-secondary:hover {
  background: #0ea5e9;
  color: white;
}

.features {
  margin-bottom: 3rem;
}

.features h2 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #0f172a;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  text-align: center;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
}

.icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  margin-bottom: 0.5rem;
  color: #0f172a;
}

.feature-card p {
  color: #475569;
  line-height: 1.6;
}

.stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  background: linear-gradient(135deg, #38bdf8 0%, #0ea5e9 100%);
  padding: 3rem 2rem;
  border-radius: 12px;
  color: white;
}

.stat-item {
  text-align: center;
}

.stat-item h3 {
  font-size: 3rem;
  margin-bottom: 0.5rem;
}

.stat-item p {
  font-size: 1.1rem;
  opacity: 0.9;
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2rem;
  }

  .subtitle {
    font-size: 1.1rem;
  }

  .feature-grid {
    grid-template-columns: 1fr;
  }

  .stats {
    grid-template-columns: 1fr;
  }
}
</style>
