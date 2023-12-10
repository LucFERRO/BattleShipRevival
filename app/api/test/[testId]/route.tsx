import { NextRequest, NextResponse } from "next/server";

export async function GET (req: NextRequest, context: any) {
    const { params } = context
    return NextResponse.json({
        test: params.testId
    })
}

export async function POST (req: NextRequest) {
    const body = await req.json()

    return NextResponse.json({
        data: body
    })
}