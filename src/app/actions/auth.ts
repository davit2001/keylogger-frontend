"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL;

const AUTH_COOKIE = "auth_token";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 7;

export type LoginResult =
  | { ok: true }
  | { ok: false; error: string };

export async function loginAction(
  _prev: LoginResult | null,
  formData: FormData
): Promise<LoginResult> {
  const username = String(formData.get("username") ?? "");
  const password = String(formData.get("password") ?? "");

  if (!username || !password) {
    return { ok: false, error: "Username and password are required" };
  }

  let res: Response;
  try {
    res = await fetch(`${API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
      cache: "no-store",
    });
  } catch {
    return { ok: false, error: "Network error. Please try again." };
  }

  if (!res.ok) {
    return {
      ok: false,
      error:
        res.status === 401 || res.status === 403
          ? "Invalid credentials"
          : `Login failed (${res.status})`,
    };
  }

  const data = (await res.json().catch(() => null)) as { token?: string } | null;
  if (!data?.token) {
    return { ok: false, error: "Malformed login response" };
  }

  const cookieStore = await cookies();
  cookieStore.set(AUTH_COOKIE, data.token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: COOKIE_MAX_AGE,
  });

  return { ok: true };
}

export async function logoutAction(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(AUTH_COOKIE);
  redirect("/login");
}

export async function getAuthToken(): Promise<string | null> {
  const cookieStore = await cookies();
  return cookieStore.get(AUTH_COOKIE)?.value ?? null;
}
