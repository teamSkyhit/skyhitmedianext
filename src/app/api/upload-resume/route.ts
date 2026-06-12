import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    // Generate a unique filename to prevent collisions
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const originalName = file.name.replace(/\s+/g, "_");
    const filename = `${uniqueSuffix}-${originalName}`;

    // Path to public/images/uploads/
    const uploadDir = path.join(process.cwd(), "public", "images", "uploads");

    // Ensure the directory exists
    await mkdir(uploadDir, { recursive: true });

    // Save the file
    const filePath = path.join(uploadDir, filename);
    await writeFile(filePath, buffer);

    // Return the public URL
    const fileUrl = `/images/uploads/${filename}`;

    return NextResponse.json({ fileUrl });
  } catch (error) {
    console.error("Resume Upload Route Error:", error);
    return NextResponse.json({ error: "Failed to upload resume" }, { status: 500 });
  }
}
