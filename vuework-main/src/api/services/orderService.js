import apiClient from '../axios';

export default {
  getAll() {
    return apiClient.get('/orders');
  },

  getById(id) {
    return apiClient.get(`/orders/${id}`);
  },

  create(data) {
    return apiClient.post('/orders', data);
  },

  updateStatus(id, status) {
    return apiClient.patch(`/orders/${id}/status`, { status });
  },

  cancel(id) {
    return apiClient.post(`/orders/${id}/cancel`);
  },
};
