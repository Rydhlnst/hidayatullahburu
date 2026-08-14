import { NextResponse } from "next/server";
import { db } from "@/db";
import { heroSlides } from "@/db/schema";
import { asc, eq } from "drizzle-orm";
import { verifySession } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const slides = await db
      .select()
      .from(heroSlides)
      .orderBy(asc(heroSlides.order));
    return NextResponse.json(slides);
  } catch (error) {
    console.error("Fetch hero slides error:", error);
    return NextResponse.json({ error: "Failed to fetch hero slides" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const session = await verifySession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { title, subtitle, image, order } = body;

    const [slide] = await db
      .insert(heroSlides)
      .values({
        title,
        subtitle,
        image,
        order: order || 0,
      })
      .returning();

    return NextResponse.json(slide);
  } catch (error) {
    console.error("Create hero slide error:", error);
    return NextResponse.json({ error: "Failed to create hero slide" }, { status: 500 });
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

    await db.delete(heroSlides).where(eq(heroSlides.id, id));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Delete hero slide error:", error);
    return NextResponse.json({ error: "Failed to delete hero slide" }, { status: 500 });
  }
}
