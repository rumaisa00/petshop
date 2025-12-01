import { defineStore } from 'pinia';
import axios from 'axios';

export const useCustomerStore = defineStore('customer', {
  state: () => ({
    customers: [],
    loading: false,
    error: null,
  }),

  getters: {
    getCustomerById: (state) => (id) => {
      return state.customers.find(c => c.id === id);
    },

    totalCustomers: (state) => state.customers.length,
  },

  actions: {
    async fetchCustomers() {
      this.loading = true;
      this.error = null;

      try {
        const response = await axios.get('/api/customers');
        this.customers = response.data;
      } catch (error) {
        this.error = error.message;
        console.error('Error fetching customers:', error);
      } finally {
        this.loading = false;
      }
    },

    async createCustomer(customerData) {
      try {
        const response = await axios.post('/api/customers', customerData);
        this.customers.push(response.data);
        return response.data;
      } catch (error) {
        this.error = error.message;
        throw error;
      }
    },

    async updateCustomer(id, customerData) {
      try {
        const response = await axios.put(`/api/customers/${id}`, customerData);
        const index = this.customers.findIndex(c => c.id === id);
        
        if (index !== -1) {
          this.customers[index] = response.data;
        }
        
        return response.data;
      } catch (error) {
        this.error = error.message;
        throw error;
      }
    },

    searchCustomers(query) {
      const lowerQuery = query.toLowerCase();
      return this.customers.filter(c => 
        c.name.toLowerCase().includes(lowerQuery) ||
        c.email.toLowerCase().includes(lowerQuery) ||
        c.phone?.includes(query)
      );
    },
  },
});
