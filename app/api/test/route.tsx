import { NextRequest, NextResponse } from "next/server";

export async function GET (req: NextRequest) {
    console.log('OKOK')
    return NextResponse.json({
        hello: 'Hi this test is going OK'
    })
}

export async function POST (req: NextRequest) {
    const body = await req.json()

    return NextResponse.json({
        data: body
    })
}