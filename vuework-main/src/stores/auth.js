import { defineStore } from 'pinia';
import axios from 'axios';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: null,
    isAuthenticated: false,
    loading: false,
    error: null,
  }),

  getters: {
    isAdmin: (state) => {
      return state.user?.role === 'admin';
    },

    isEmployee: (state) => {
      return state.user?.role === 'employee';
    },

    isCustomer: (state) => {
      return state.user?.role === 'customer';
    },

    userRole: (state) => {
      return state.user?.role || null;
    },
  },

  actions: {
    async login(credentials) {
      this.loading = true;
      this.error = null;

      try {
        const response = await axios.post('/api/auth/login', credentials);
        const { user, token } = response.data;

        this.user = user;
        this.token = token;
        this.isAuthenticated = true;

        // Store in localStorage
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));

        // Set default auth header
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        return user;
      } catch (error) {
        this.error = error.response?.data?.message || 'Login failed';
        throw error;
      } finally {
        this.loading = false;
      }
    },

    async register(userData) {
      this.loading = true;
      this.error = null;

      try {
        const response = await axios.post('/api/auth/register', userData);
        const { user, token } = response.data;

        this.user = user;
        this.token = token;
        this.isAuthenticated = true;

        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        return user;
      } catch (error) {
        this.error = error.response?.data?.message || 'Registration failed';
        throw error;
      } finally {
        this.loading = false;
      }
    },

    logout() {
      this.user = null;
      this.token = null;
      this.isAuthenticated = false;

      localStorage.removeItem('token');
      localStorage.removeItem('user');
      delete axios.defaults.headers.common['Authorization'];
    },

    async checkAuth() {
      const token = localStorage.getItem('token');
      const user = localStorage.getItem('user');

      if (token && user) {
        this.token = token;
        this.user = JSON.parse(user);
        this.isAuthenticated = true;
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        // Optionally verify token with backend
        try {
          await axios.get('/api/auth/verify');
        } catch (error) {
          // Token is invalid, logout
          this.logout();
        }
      }
    },

    async updateProfile(userData) {
      try {
        const response = await axios.put('/api/auth/profile', userData);
        this.user = response.data;
        localStorage.setItem('user', JSON.stringify(this.user));
        return this.user;
      } catch (error) {
        this.error = error.response?.data?.message || 'Update failed';
        throw error;
      }
    },
  },
});
