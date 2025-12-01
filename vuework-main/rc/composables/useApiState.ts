import { ref } from "vue";

export function useApiState() {
  const loading = ref(false);
  const error = ref<string | null>(null);

  const startLoading = () => { loading.value = true; error.value = null; };
  const stopLoading = () => { loading.value = false; };
  const setError = (msg: string) => { error.value = msg; };

  return { loading, error, startLoading, stopLoading, setError };
}
