import { ref } from 'vue';

export function useApiState() {
  const loading = ref(false);
  const error = ref(null);
  const data = ref(null);

  const execute = async (apiCall) => {
    loading.value = true;
    error.value = null;

    try {
      const response = await apiCall();
      data.value = response.data;
      return response.data;
    } catch (err) {
      error.value = err.response?.data?.message || err.message || 'An error occurred';
      throw err;
    } finally {
      loading.value = false;
    }
  };

  const reset = () => {
    loading.value = false;
    error.value = null;
    data.value = null;
  };

  return {
    loading,
    error,
    data,
    execute,
    reset,
  };
}

// ========================
// src/utils/formatters.js
export const formatCurrency = (value) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value);
};

export const formatDate = (date) => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(new Date(date));
};

export const formatDateTime = (date) => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(date));
};

export const formatRelativeTime = (date) => {
  const now = new Date();
  const then = new Date(date);
  const diffInSeconds = Math.floor((now - then) / 1000);

  if (diffInSeconds < 60) return 'just now';
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
  if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)}d ago`;
  
  return formatDate(date);
};

export const truncate = (text, length = 100) => {
  if (text.length <= length) return text;
  return text.substring(0, length) + '...';
};
