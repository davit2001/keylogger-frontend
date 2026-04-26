"use server";

import { LogRecord, PaginatedResponse } from "@/types";
import { getAuthToken } from "./auth";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL;

export type FetchLogsResult =
  | { ok: true; data: PaginatedResponse<LogRecord> }
  | { ok: false; status: number; error: string };

export async function fetchLogsAction(
  page: number,
  size: number
): Promise<FetchLogsResult> {
  const token = await getAuthToken();
  if (!token) {
    return { ok: false, status: 401, error: "Not authenticated" };
  }

  const url = `${API_BASE_URL}/logs/decrypted?page=${page}&size=${size}`;
  console.info("[action] GET", url);

  let res: Response;
  try {
    res = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
      cache: "no-store",
    });
  } catch (err) {
    console.error("[action] network error", err);
    return { ok: false, status: 0, error: "Network error" };
  }

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    console.error("[action] upstream error", res.status, body);
    return { ok: false, status: res.status, error: body || res.statusText };
  }

  const data = (await res.json()) as PaginatedResponse<LogRecord>;
  return { ok: true, data };
}
