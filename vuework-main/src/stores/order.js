import { defineStore } from 'pinia';
import axios from 'axios';

export const useOrderStore = defineStore('order', {
  state: () => ({
    orders: [],
    currentOrder: null,
    loading: false,
    error: null,
  }),

  getters: {
    recentOrders: (state) => {
      return state.orders.slice(0, 5);
    },

    orderById: (state) => (id) => {
      return state.orders.find(o => o.id === id);
    },
  },

  actions: {
    async fetchOrders() {
      this.loading = true;
      this.error = null;

      try {
        const response = await axios.get('/api/orders');
        this.orders = response.data;
      } catch (error) {
        this.error = error.message;
        console.error('Error fetching orders:', error);
      } finally {
        this.loading = false;
      }
    },

    async createOrder(orderData) {
      this.loading = true;
      this.error = null;

      try {
        const response = await axios.post('/api/orders', orderData);
        this.orders.unshift(response.data);
        this.currentOrder = response.data;
        return response.data;
      } catch (error) {
        this.error = error.response?.data?.message || 'Order creation failed';
        throw error;
      } finally {
        this.loading = false;
      }
    },

    async updateOrderStatus(orderId, status) {
      try {
        const response = await axios.patch(`/api/orders/${orderId}/status`, { status });
        const index = this.orders.findIndex(o => o.id === orderId);
        
        if (index !== -1) {
          this.orders[index] = response.data;
        }
        
        return response.data;
      } catch (error) {
        this.error = error.message;
        throw error;
      }
    },
  },
});

