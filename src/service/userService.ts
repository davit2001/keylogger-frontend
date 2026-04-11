import apiClient from "./apiClient";
import { DataRecord, PaginatedResult } from "@/types";

export class UserService {
  static async getRecords(
    page: number,
    pageSize: number
  ): Promise<PaginatedResult<DataRecord>> {
    return apiClient.get("/records", { params: { page, pageSize } });
  }

  static async getRecordById(id: string): Promise<DataRecord> {
    return apiClient.get(`/records/${id}`);
  }
}
