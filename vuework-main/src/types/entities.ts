export type ID = string;

export type Role = 'admin' | 'member';
export type ProjectStatus = 'active' | 'archived';
export type TaskStatus = 'todo' | 'in_progress' | 'done';
export type TaskPriority = 'low' | 'medium' | 'high';

export interface User {
  id: ID;
  name: string;
  email: string;
  role: Role;
  avatarUrl?: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface Project {
  id: ID;
  name: string;
  description?: string;
  status: ProjectStatus;
  ownerId: ID;
  createdAt: string;
  updatedAt: string;
  archivedAt?: string | null;
}

export interface Task {
  id: ID;
  projectId: ID;
  title: string;
  description?: string;
  status: TaskStatus;
  priority: TaskPriority;
  dueDate?: string | null;
  assigneeId?: ID | null;
  labelIds?: ID[];
  createdAt: string;
  updatedAt: string;
}

export interface Comment {
  id: ID;
  taskId: ID;
  authorId: ID;
  body: string;
  createdAt: string;
  updatedAt: string;
}

export interface Label {
  id: ID;
  name: string;
  color?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ActivityLog {
  id: ID;
  entityType: 'project' | 'task' | 'comment';
  entityId: ID;
  action: 'created' | 'updated' | 'deleted' | 'status_changed' | 'commented';
  actorId: ID;
  payload?: Record<string, unknown>;
  createdAt: string;
}
