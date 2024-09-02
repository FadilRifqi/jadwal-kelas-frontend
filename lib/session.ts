import { jwtVerify } from "jose";

const SECRET_KEY = process.env.NEXT_PUBLIC_JWT_SECRET;

if (!SECRET_KEY) {
  throw new Error("JWT secret not configured");
}

const secret = new TextEncoder().encode(SECRET_KEY);

export async function decrypt(token: string | undefined): Promise<any> {
  if (!token) {
    throw new Error("Access token not found");
  }

  try {
    const { payload } = await jwtVerify(token, secret);
    return payload;
  } catch (err) {
    throw new Error("Invalid token");
  }
}
