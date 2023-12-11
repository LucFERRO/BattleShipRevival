import { NextRequest, NextResponse } from "next/server";
import { sql } from '@vercel/postgres';

export async function GET (req: NextRequest, context: any) {

    const playerList = await sql``

    return NextResponse.json({
        test: ''
    })
}

export async function POST (req: NextRequest) {
    const body = await req.json()

    return NextResponse.json({
        data: body
    })
}