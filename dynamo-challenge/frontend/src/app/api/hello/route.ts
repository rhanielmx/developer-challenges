// app/api/fetchData/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        return NextResponse.json({hi:"there"});
    } catch (error) {
        return NextResponse.error();
    }
}