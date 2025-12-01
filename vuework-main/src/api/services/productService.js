import apiClient from '../axios';

export default {
  // Get all products
  getAll(params = {}) {
    return apiClient.get('/products', { params });
  },

  // Get single product
  getById(id) {
    return apiClient.get(`/products/${id}`);
  },

  // Create product
  create(data) {
    return apiClient.post('/products', data);
  },

  // Update product
  update(id, data) {
    return apiClient.put(`/products/${id}`, data);
  },

  // Delete product
  delete(id) {
    return apiClient.delete(`/products/${id}`);
  },

  // Search products
  search(query) {
    return apiClient.get('/products/search', { params: { q: query } });
  },

  // Get products by category
  getByCategory(category) {
    return apiClient.get(`/products/category/${category}`);
  },
};
