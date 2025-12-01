import { api } from './core';
import type { ApiResult, Paginated } from '@/types/http';
import type { User } from '@/types/entities';

export const UsersApi = {
  list(params?: { page?: number; pageSize?: number; q?: string; role?: string })
    : Promise<ApiResult<Paginated<User>>> {
    return api.get('/users', params);
  },
  get(id: string): Promise<ApiResult<User>> {
    return api.get(`/users/${id}`);
  },
  create(body: Partial<User> & { name: string; email: string; role: string })
    : Promise<ApiResult<User>> {
    return api.post('/users', body);
  },
  update(id: string, body: Partial<User>): Promise<ApiResult<User>> {
    return api.put(`/users/${id}`, body);
  },
  remove(id: string): Promise<ApiResult<{ success: true }>> {
    return api.del(`/users/${id}`);
  },
};
