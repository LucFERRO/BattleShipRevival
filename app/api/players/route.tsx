import { NextRequest, NextResponse } from "next/server";
import { sql } from '@vercel/postgres';
import { fetchPlayers } from "@/app/lib/data";

export async function GET (req: NextRequest, context: any) {

    const playerList = await fetchPlayers()
    return NextResponse.json(playerList)
}

export async function POST (req: NextRequest) {
    const body = await req.json()

    return NextResponse.json({
        data: body
    })
}