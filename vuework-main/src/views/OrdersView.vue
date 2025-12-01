<template>
  <div class="orders-page">
    <h1 class="page-title">Orders Overview</h1>

    <div class="orders-grid">
      <div
        v-for="order in orders"
        :key="order.id"
        class="order-card"
        :class="order.status"
      >
        <div class="order-header">
          <h3>{{ order.title }}</h3>
          <span class="status">{{ order.status }}</span>
        </div>

        <p class="desc">{{ order.description }}</p>

        <div class="order-footer">
          <span class="customer">👤 {{ order.customer }}</span>
          <span class="date">📅 {{ order.date }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrdersView",
  data() {
    return {
      orders: [
        {
          id: 1,
          title: "Laptop Purchase",
          description: "Dell XPS ordered by Sara",
          customer: "Sara Khalil",
          date: "2025-11-20",
          status: "pending",
        },
        {
          id: 2,
          title: "Office Desk",
          description: "Wooden desk for Admin Office",
          customer: "Rumaitha",
          date: "2025-11-18",
          status: "completed",
        },
        {
          id: 3,
          title: "Headphones",
          description: "Sony WH-1000XM4 for new employee",
          customer: "Ala Malik",
          date: "2025-11-19",
          status: "processing",
        },
      ],
    };
  },
};
</script>

<style scoped>
.orders-page {
  padding: 2rem;
  animation: fadeIn 0.5s ease;
}

.page-title {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 20px;
  text-align: center;
}

/* Grid Layout */
.orders-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

/* Order Card */
.order-card {
  background: rgba(255, 255, 255, 0.22);
  backdrop-filter: blur(12px);
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: 0.3s ease;
  cursor: pointer;
}

.order-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.18);
}

/* Header */
.order-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.order-header h3 {
  font-size: 20px;
  font-weight: 600;
}

/* Status Colors */
.status {
  padding: 4px 12px;
  font-size: 12px;
  border-radius: 12px;
  color: #fff;
  text-transform: capitalize;
}

.pending {
  border-left: 5px solid #ffb400;
}

.pending .status {
  background: #ffb400;
}

.processing {
  border-left: 5px solid #007bff;
}

.processing .status {
  background: #007bff;
}

.completed {
  border-left: 5px solid #07c23b;
}

.completed .status {
  background: #07c23b;
}

.desc {
  margin: 12px 0;
  opacity: 0.8;
}

/* Footer */
.order-footer {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  margin-top: 10px;
}

/* Animation */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
