import { NextResponse } from "next/server";
import { createSession } from "@/lib/auth";

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    const expectedUser = process.env.ADMIN_USER || "admin";
    const expectedPassword = process.env.ADMIN_PASSWORD || "adminpassword123";

    if (username === expectedUser && password === expectedPassword) {
      await createSession(username);
      return NextResponse.json({ success: true, username });
    }

    return NextResponse.json(
      { error: "Username atau password yang Anda masukkan salah." },
      { status: 401 }
    );
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ error: "Terjadi kesalahan server" }, { status: 500 });
  }
}
