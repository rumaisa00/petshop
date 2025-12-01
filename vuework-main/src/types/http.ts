export interface Pagination {
  page?: number;
  pageSize?: number;
}

export interface Paginated<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
}

export type ApiOk<T> = { ok: true; data: T };
export type ApiFail = {
  ok: false;
  status: number;
  code?: string;
  message: string;
  details?: Record<string, string[]>; // field errors
};
export type ApiResult<T> = ApiOk<T> | ApiFail;
