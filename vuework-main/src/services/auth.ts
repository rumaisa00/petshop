import { api } from './core';
import type { ApiResult } from '@/types/http';
import type { User } from '@/types/entities';

export interface LoginBody { email: string; password: string; }
export interface LoginResponse {
  accessToken: string;
  refreshToken?: string;
  user: User;
}

export const AuthApi = {
  login(body: LoginBody): Promise<ApiResult<LoginResponse>> {
    return api.post<LoginResponse>('/auth/login', body);
  },
  me(): Promise<ApiResult<User>> {
    return api.get<User>('/auth/me');
  },
  logout(): Promise<ApiResult<{ success: true }>> {
    return api.post<{ success: true }>('/auth/logout');
  },
};
