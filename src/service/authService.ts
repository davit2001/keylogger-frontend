import apiClient from "./apiClient";

interface LoginPayload {
  username: string;
  password: string;
}

interface AuthResponse {
  token: string;
  expiresIn: number;
}

interface UserProfile {
  id: string;
  username: string;
  role: string;
}

export class AuthService {
  static async login(payload: LoginPayload): Promise<AuthResponse> {
    return apiClient.post("/auth/login", payload);
  }

  static async logout(): Promise<void> {
    return apiClient.post("/auth/logout");
  }

  static async getProfile(): Promise<UserProfile> {
    return apiClient.get("/auth/me");
  }

  static async refreshToken(token: string): Promise<AuthResponse> {
    return apiClient.post("/auth/refresh", { token });
  }
}
