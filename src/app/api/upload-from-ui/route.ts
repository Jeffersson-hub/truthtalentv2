// src/app/api/upload-from-ui/route.ts (ou upload-from-script)

import { NextRequest, NextResponse } from "next/server";
import { utapi } from "uploadthing/server";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get("file") as File;

  if (!file) {
    return NextResponse.json({ error: "Fichier manquant" }, { status: 400 });
  }

  try {
    const uploaded = await utapi.uploadFiles(file, { slug: "cvUploader" });

    if (!uploaded || uploaded.length === 0) {
      return NextResponse.json({ error: "Échec UploadThing" }, { status: 500 });
    }

    return NextResponse.json({ url: uploaded[0].url });
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
