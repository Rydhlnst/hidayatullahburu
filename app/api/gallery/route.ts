import { NextResponse } from "next/server";
import { db } from "@/db";
import { galleryItems } from "@/db/schema";
import { desc, eq } from "drizzle-orm";
import { verifySession } from "@/lib/auth";
import { deleteFromR2 } from "@/lib/r2";

export async function GET() {
  try {
    const items = await db
      .select()
      .from(galleryItems)
      .orderBy(desc(galleryItems.createdAt));
    return NextResponse.json(items);
  } catch (error) {
    console.error("Fetch gallery error:", error);
    return NextResponse.json({ error: "Failed to fetch gallery" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const session = await verifySession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { title, category, image, caption } = body;

    const [item] = await db
      .insert(galleryItems)
      .values({
        title,
        category: category || "Dokumentasi",
        image,
        caption,
      })
      .returning();

    return NextResponse.json(item);
  } catch (error) {
    console.error("Create gallery item error:", error);
    return NextResponse.json({ error: "Failed to create gallery item" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  const session = await verifySession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "ID required" }, { status: 400 });
    }

    const [item] = await db
      .select()
      .from(galleryItems)
      .where(eq(galleryItems.id, id));

    if (item?.image) {
      await deleteFromR2(item.image);
    }

    await db.delete(galleryItems).where(eq(galleryItems.id, id));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Delete gallery item error:", error);
    return NextResponse.json({ error: "Failed to delete gallery item" }, { status: 500 });
  }
}
