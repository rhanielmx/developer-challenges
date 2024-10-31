import { type NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, res: NextResponse) {
    const externalUrl = 'http://localhost:3333/api/profile' // Replace with your external API URL

    try {
        console.log(req.headers.get('authorization'))

        const response = await fetch(externalUrl, {
            method: 'GET',
            headers: req.headers
        });

        const data = await response.json()  

        return NextResponse.json(data)
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch from external API' });
    }
   
}