import { NextResponse } from "next/server";
import { uploadToR2 } from "@/lib/r2";
import { verifySession } from "@/lib/auth";

export async function POST(request: Request) {
  // Check auth session
  const session = await verifySession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized access" }, { status: 401 });
  }

  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Upload to Cloudflare R2
    const publicUrl = await uploadToR2(buffer, file.name, file.type);

    return NextResponse.json({
      success: true,
      url: publicUrl,
      fileName: file.name,
    });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ error: "Failed to upload file to Cloudflare R2" }, { status: 500 });
  }
}
