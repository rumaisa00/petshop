import { api } from './core';
import type { ApiResult, Paginated } from '@/types/http';
import type { Task, TaskPriority, TaskStatus, ID } from '@/types/entities';

export const TasksApi = {
  list(params?: {
    page?: number; pageSize?: number; projectId?: ID; assigneeId?: ID;
    status?: TaskStatus; labelId?: ID; q?: string; sort?: 'dueDate'|'priority'|'updatedAt';
  }): Promise<ApiResult<Paginated<Task>>> {
    return api.get('/tasks', params);
  },
  get(id: ID): Promise<ApiResult<Task>> { return api.get(`/tasks/${id}`); },
  create(body: {
    projectId: ID; title: string; description?: string; dueDate?: string|null;
    assigneeId?: ID|null; priority?: TaskPriority; status?: TaskStatus; labelIds?: ID[];
  }): Promise<ApiResult<Task>> {
    return api.post('/tasks', body);
  },
  update(id: ID, body: Partial<Task>): Promise<ApiResult<Task>> {
    return api.put(`/tasks/${id}`, body);
  },
  moveStatus(id: ID, status: TaskStatus): Promise<ApiResult<Task>> {
    return api.post(`/tasks/${id}/move`, { status });
  },
  assign(id: ID, assigneeId: ID|null): Promise<ApiResult<Task>> {
    return api.post(`/tasks/${id}/assign`, { assigneeId });
  },
  addLabels(id: ID, labelIds: ID[]): Promise<ApiResult<Task>> {
    return api.post(`/tasks/${id}/labels`, { labelIds });
  },
  remove(id: ID): Promise<ApiResult<{ success: true }>> {
    return api.del(`/tasks/${id}`);
  },
};
