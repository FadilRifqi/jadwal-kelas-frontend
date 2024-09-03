import { jwtVerify } from "jose";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "@/constant/constant";

const SECRET_KEY = process.env.NEXT_PUBLIC_JWT_SECRET;

if (!SECRET_KEY) {
  throw new Error("JWT secret not configured");
}

const secret = new TextEncoder().encode(SECRET_KEY);

export async function auth(): Promise<any> {
  const accessToken = localStorage.getItem(ACCESS_TOKEN);
  if (!accessToken) {
    throw new Error("No access token found");
  }
  try {
    const { payload } = await jwtVerify(accessToken, secret);
    return payload;
  } catch (error) {
    const refreshToken = localStorage.getItem(REFRESH_TOKEN);
    if (!refreshToken) {
      throw new Error("No refresh token found");
    }
    const newAccessToken = await refresh(refreshToken);
    if (!newAccessToken) {
      throw new Error("Failed to refresh token");
    }
    localStorage.setItem(ACCESS_TOKEN, newAccessToken);
  }
}

export async function refresh(refreshToken: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/refresh-token`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refreshToken }),
    }
  );

  if (!response.ok) {
    console.log("response", await response.json());

    return null;
  }

  const data = await response.json();
  localStorage.setItem(ACCESS_TOKEN, data.accessToken);
  return data.accessToken;
}

export async function login(email: string, password: string): Promise<any> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }
  );
  const data = await response.json();
  if (!response.ok) {
    throw new Error("Login failed", data);
  }

  localStorage.setItem(ACCESS_TOKEN, data.accessToken);
  localStorage.setItem(REFRESH_TOKEN, data.refreshToken);
}
