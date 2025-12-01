import { defineStore } from 'pinia';
import axios from 'axios';

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [],
    loading: false,
    error: null,
    categories: ['pets', 'food', 'supplies', 'toys', 'health'],
  }),

  getters: {
    getProductById: (state) => (id) => {
      return state.products.find(p => p.id === id);
    },

    getProductsByCategory: (state) => (category) => {
      if (category === 'all') return state.products;
      return state.products.filter(p => p.category === category);
    },

    inStockProducts: (state) => {
      return state.products.filter(p => p.inStock);
    },

    featuredProducts: (state) => {
      return state.products.filter(p => p.featured).slice(0, 6);
    },
  },

  actions: {
    async fetchProducts() {
      this.loading = true;
      this.error = null;
      
      try {
        const response = await axios.get('/api/products');
        this.products = response.data;
      } catch (error) {
        this.error = error.message;
        console.error('Error fetching products:', error);
      } finally {
        this.loading = false;
      }
    },

    async fetchProductById(id) {
      this.loading = true;
      this.error = null;

      try {
        const response = await axios.get(`/api/products/${id}`);
        const index = this.products.findIndex(p => p.id === id);
        
        if (index !== -1) {
          this.products[index] = response.data;
        } else {
          this.products.push(response.data);
        }
        
        return response.data;
      } catch (error) {
        this.error = error.message;
        console.error('Error fetching product:', error);
        throw error;
      } finally {
        this.loading = false;
      }
    },

    async createProduct(productData) {
      try {
        const response = await axios.post('/api/products', productData);
        this.products.push(response.data);
        return response.data;
      } catch (error) {
        this.error = error.message;
        throw error;
      }
    },

    async updateProduct(id, productData) {
      try {
        const response = await axios.put(`/api/products/${id}`, productData);
        const index = this.products.findIndex(p => p.id === id);
        
        if (index !== -1) {
          this.products[index] = response.data;
        }
        
        return response.data;
      } catch (error) {
        this.error = error.message;
        throw error;
      }
    },

    async deleteProduct(id) {
      try {
        await axios.delete(`/api/products/${id}`);
        this.products = this.products.filter(p => p.id !== id);
      } catch (error) {
        this.error = error.message;
        throw error;
      }
    },

    searchProducts(query) {
      const lowerQuery = query.toLowerCase();
      return this.products.filter(p => 
        p.name.toLowerCase().includes(lowerQuery) ||
        p.description?.toLowerCase().includes(lowerQuery) ||
        p.category.toLowerCase().includes(lowerQuery)
      );
    },
  },
});

