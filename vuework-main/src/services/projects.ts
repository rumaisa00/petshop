import { api } from './core';
import type { ApiResult, Paginated } from '@/types/http';
import type { Project } from '@/types/entities';

export const ProjectsApi = {
  list(params?: { page?: number; pageSize?: number; status?: 'active'|'archived'; q?: string })
    : Promise<ApiResult<Paginated<Project>>> {
    return api.get('/projects', params);
  },
  get(id: string): Promise<ApiResult<Project>> {
    return api.get(`/projects/${id}`);
  },
  create(body: { name: string; description?: string })
    : Promise<ApiResult<Project>> {
    return api.post('/projects', body);
  },
  update(id: string, body: Partial<Project>): Promise<ApiResult<Project>> {
    return api.put(`/projects/${id}`, body);
  },
  archive(id: string): Promise<ApiResult<Project>> {
    return api.post(`/projects/${id}/archive`);
  },
  unarchive(id: string): Promise<ApiResult<Project>> {
    return api.post(`/projects/${id}/unarchive`);
  },
  remove(id: string): Promise<ApiResult<{ success: true }>> {
    return api.del(`/projects/${id}`);
  },
};
