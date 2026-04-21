export interface LogRecord {
  id: number;
  timestamp: string; // ISO 8601
  context: string;
  payload: string;
}

export interface PaginatedResponse<T> {
  totalItems: number;
  totalPages: number;
  pageSize: number;
  currentPage: number;
  content: T[];
}
