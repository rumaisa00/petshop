import { http } from './http';
import type { ApiResult, ApiOk, ApiFail } from '@/types/http';

async function handle<T>(p: Promise<any>): Promise<ApiResult<T>> {
  try {
    const res = await p;
    return { ok: true, data: res.data } as ApiOk<T>;
  } catch (e: any) {
    return e as ApiFail; // already normalized by interceptor
  }
}

// Generic helpers (include query typing if you like)
export const api = {
  get: <T>(url: string, params?: Record<string, any>) =>
    handle<T>(http.get(url, { params })),
  post: <T>(url: string, body?: any) =>
    handle<T>(http.post(url, body)),
  put:  <T>(url: string, body?: any) =>
    handle<T>(http.put(url, body)),
  patch:<T>(url: string, body?: any) =>
    handle<T>(http.patch(url, body)),
  del:  <T>(url: string) =>
    handle<T>(http.delete(url)),
};
