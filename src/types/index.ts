export interface LogRecord {
  id: number;
  agentLogId: number;
  timestamp: string; // ISO 8601
  encryptedContext: string;
  encryptedPayload: string;
}

export interface PaginatedResponse<T> {
  totalItems: number;
  totalPages: number;
  pageSize: number;
  currentPage: number;
  content: T[];
}
