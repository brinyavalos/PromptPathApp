
// User types
export interface User {
  id: string;
  name: string;
  email: string;
  image?: string;
  bio?: string;
  location?: string;
  memberSince: Date;
}

// Auth types
export interface AuthResult {
  user: User;
  token: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials extends LoginCredentials {
  name: string;
}

// Prompt types
export interface Prompt {
  id: string;
  title: string;
  content: string;
  description?: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
  lastUsed?: Date;
  userId: string;
  model?: string;
  favorite?: boolean;
  collection?: string;
}

export interface PromptCollection {
  id: string;
  name: string;
  description?: string;
  userId: string;
  promptIds: string[];
  createdAt: Date;
  updatedAt: Date;
}

// API types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

// For pagination
export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}
