export interface DataRecord {
  id: string;
  context: string;
  encryptedPayload: string;
  timeline: string; // ISO 8601
}

export interface PaginationState {
  currentPage: number;
  pageSize: number;
}

export interface PaginatedResult<T> {
  data: T[];
  total: number;
  totalPages: number;
}