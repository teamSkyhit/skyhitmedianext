import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const apiKey = process.env.EXTERNAL_LEADS_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "External leads API key is missing" },
        { status: 500 }
      );
    }

    const apiBase =
      process.env.EXTERNAL_LEADS_API_BASE ||
      process.env.NEXT_PUBLIC_API_BASE ||
      "https://marketing.dxbhost.agency";
    const apiUrl = `${apiBase}/api/v1/external-leads`;

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": apiKey
      },
      body: JSON.stringify(body),
    }
    );

    const data = await response.json();

    return NextResponse.json(data, { status: response.status });

  } catch (error) {
    console.error("External Lead Proxy Error:", error);
    return NextResponse.json(
      { error: "Failed to submit lead" },
      { status: 500 }
    );
  }
}
