import { NextRequest, NextResponse } from "next/server";
import { executeQuery } from "../../../lib/database";

// Get all requests
export async function Get(_req: NextRequest) {
  try {
    const result = await executeQuery("SELECT * FROM Request ORDER BY createdAt DESC");
    return NextResponse.json(result.recordset);
  } catch (error: any) {
    console.error("Erreur DB:", error);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}

//Get filter by number
export async function GetByNumber(req: NextRequest){
    try {
        const number = await req.json;

        if (!number){
            return NextResponse.json({ error: "Missing field"}, { status: 400 });
        }

        await executeQuery(
            'SELECT * FROM Request WHERE number = @number', { number }
        );

        return NextResponse.json({ success: true, message: "Requests found"}, { status: 200 });

    } catch (error: any){
        console.error("Erreur DB:", error);
        return NextResponse.json({ error: "Database error" }, { status: 500 });

    }
}

//Get filter by creator
export async function GetByCreator(req: NextRequest){
    try {
        const creator = await req.json;

        if (!creator){
            return NextResponse.json({ error: "Missing field"}, { status: 400 });
        }

        await executeQuery(
            'SELECT * FROM Request WHERE creator = @creator', { creator }
        );

        return NextResponse.json({ success: true, message: "Requests found"}, { status: 200 });

    } catch (error: any){
        console.error("Erreur DB:", error);
        return NextResponse.json({ error: "Database error" }, { status: 500 });

    }
}

//Get filter by step
export async function GetByStep(req: NextRequest){
    try {
        const step = await req.json;

        if (!step){
            return NextResponse.json({ error: "Missing field"}, { status: 400 });
        }

        await executeQuery(
            'SELECT * FROM Request WHERE step = @step', { step }
        );

        return NextResponse.json({ success: true, message: "Requests found"}, { status: 200 });

    } catch (error: any){
        console.error("Erreur DB:", error);
        return NextResponse.json({ error: "Database error" }, { status: 500 });

    }
}

//Get filter by issuing company
export async function GetByIssuingCompany(req: NextRequest){
    try {
        const issuingCompany = await req.json;

        if (!issuingCompany){
            return NextResponse.json({ error: "Missing field"}, { status: 400 });
        }

        await executeQuery(
            'SELECT * FROM Request WHERE issuingCompany = @issuingCompany', { issuingCompany }
        );

        return NextResponse.json({ success: true, message: "Requests found"}, { status: 200 });

    } catch (error: any){
        console.error("Erreur DB:", error);
        return NextResponse.json({ error: "Database error" }, { status: 500 });

    }
}

//Get filter by receiving Company
export async function GetByReceivingCompany(req: NextRequest){
    try {
        const receivingCompany = await req.json;

        if (!receivingCompany){
            return NextResponse.json({ error: "Missing field"}, { status: 400 });
        }

        await executeQuery(
            'SELECT * FROM Request WHERE receivingCompany = @receivingCompany', { receivingCompany }
        );

        return NextResponse.json({ success: true, message: "Requests found"}, { status: 200 });

    } catch (error: any){
        console.error("Erreur DB:", error);
        return NextResponse.json({ error: "Database error" }, { status: 500 });

    }
}

//GET filter by manager
export async function GetByManager(req: NextRequest){
    try {
        const manager = await req.json;

        if (!manager){
            return NextResponse.json({ error: "Missing field"}, { status: 400 });
        }

        await executeQuery(
            'SELECT * FROM Request WHERE manager = @manager', { manager }
        );

        return NextResponse.json({ success: true, message: "Requests found"}, { status: 200 });

    } catch (error: any){
        console.error("Erreur DB:", error);
        return NextResponse.json({ error: "Database error" }, { status: 500 });

    }
}

//GET filter by reference number
export async function GetByReferenceNumber(req: NextRequest){
    try {
        const referenceNumber = await req.json;

        if (!referenceNumber){
            return NextResponse.json({ error: "Missing field"}, { status: 400 });
        }

        await executeQuery(
            'SELECT * FROM Request WHERE referenceNumber = @referenceNumber', { referenceNumber }
        );

        return NextResponse.json({ success: true, message: "Requests found"}, { status: 200 });

    } catch (error: any){
        console.error("Erreur DB:", error);
        return NextResponse.json({ error: "Database error" }, { status: 500 });

    }
}