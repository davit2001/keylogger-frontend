import { LogRecord, PaginatedResponse } from "@/types";
import { fetchLogsAction } from "@/app/actions/logs";

export async function getRawLogs(
  page: number,
  size: number
): Promise<PaginatedResponse<LogRecord>> {
  const result = await fetchLogsAction(page, size);
  if (!result.ok) {
    const err = new Error(result.error || `Failed (${result.status})`) as Error & {
      status?: number;
    };
    err.status = result.status;
    throw err;
  }
  return result.data;
}
