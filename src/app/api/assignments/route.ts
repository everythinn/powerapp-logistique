import { NextRequest, NextResponse } from "next/server";
import { executeQuery } from "../../../lib/database";

// GET all requests (missing WHERE user=login)
export async function GET(_req: NextRequest) {
  try {
    const result = await executeQuery("SELECT * FROM Request ORDER BY createdAt DESC");
    return NextResponse.json(result.recordset);
  } catch (error: any) {
    console.error("Erreur DB:", error);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}

// POST (to move into edit)
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { title, description } = body;

    if (!title || !description) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    await executeQuery(
      "INSERT INTO Request (title, description, createdAt) VALUES (@title, @description, GETDATE())",
      { title, description }
    );

    return NextResponse.json({ success: true, message: "Request created" }, { status: 201 });
  } catch (error: any) {
    console.error("Erreur DB:", error);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
