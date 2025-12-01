import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
  }),

  getters: {
    itemCount: (state) => {
      return state.items.reduce((total, item) => total + item.quantity, 0);
    },

    totalPrice: (state) => {
      return state.items.reduce((total, item) => {
        const price = item.discount 
          ? item.price * (1 - item.discount / 100)
          : item.price;
        return total + (price * item.quantity);
      }, 0);
    },

    cartItems: (state) => state.items,
  },

  actions: {
    addItem(product) {
      const existingItem = this.items.find(item => item.id === product.id);
      
      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.items.push({
          ...product,
          quantity: 1,
        });
      }

      this.saveToLocalStorage();
    },

    removeItem(productId) {
      this.items = this.items.filter(item => item.id !== productId);
      this.saveToLocalStorage();
    },

    updateQuantity(productId, quantity) {
      const item = this.items.find(item => item.id === productId);
      
      if (item) {
        if (quantity <= 0) {
          this.removeItem(productId);
        } else {
          item.quantity = quantity;
          this.saveToLocalStorage();
        }
      }
    },

    clearCart() {
      this.items = [];
      this.saveToLocalStorage();
    },

    saveToLocalStorage() {
      localStorage.setItem('cart', JSON.stringify(this.items));
    },

    loadFromLocalStorage() {
      const stored = localStorage.getItem('cart');
      if (stored) {
        this.items = JSON.parse(stored);
      }
    },
  },
});
