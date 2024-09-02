import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;
    console.log("Login request body:", { email, password });

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

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Login failed");
    }

    const loginRes = await response.json();

    cookies().set("accessToken", loginRes.accessToken, {
      httpOnly: true,
      maxAge: 3600,
      sameSite: "strict",
    });

    cookies().set("refreshToken", loginRes.refreshToken, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60,
      sameSite: "strict",
    });

    return NextResponse.json(loginRes, { status: 200 });
  } catch (error: any) {
    console.error("Error during login:", error);
    return NextResponse.json(
      { message: error.message || "Login failed" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return methodNotAllowed();
}

export async function PUT() {
  return methodNotAllowed();
}

export async function DELETE() {
  return methodNotAllowed();
}

export async function PATCH() {
  return methodNotAllowed();
}

function methodNotAllowed() {
  return NextResponse.json({ message: "Method Not Allowed" }, { status: 405 });
}
