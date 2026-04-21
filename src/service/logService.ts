import { LogRecord, PaginatedResponse } from "@/types";

const BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ??
  "https://java-keyguard-api.onrender.com";

export async function getRawLogs(
  page: number,
  size: number
): Promise<PaginatedResponse<LogRecord>> {
  const url = `${BASE_URL}/logs/raw?page=${page}&size=${size}`;
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) {
    throw new Error(`Failed to load logs (${res.status})`);
  }
  return res.json();
}
