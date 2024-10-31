import { type NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest, res: NextResponse) {
    const externalUrl = 'http://localhost:3333/api/sessions'; // Replace with your external API URL

    try {
        const body = await req.json()

        const response = await fetch(externalUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Include any other headers you need, e.g., Authorization
            },
            body: JSON.stringify(body), // Forward the request body
        });

        const data = await response.json()  as { access_token: string}

        return NextResponse.json(data)
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch from external API' });
    }
   
}