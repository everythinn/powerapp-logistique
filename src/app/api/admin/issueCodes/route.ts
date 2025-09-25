import { NextRequest, NextResponse } from "next/server";
import { executeQuery } from "../../../../lib/database";

//GET all issue codes
export async function GET(_req: NextRequest) {
  try {
    const result = await executeQuery("SELECT * FROM Type_Litige");
  } catch (error: any) {
    console.error("Erreur DB:", error);
    if (error.originalError) {
      console.error("Original:", error.originalError);
    }
    if (error.precedingErrors) {
      console.error("Preceding:", error.precedingErrors);
    }
    return NextResponse.json(
      { error: "Database error", details: error.message },
      { status: 500 }
    );
  }
}

