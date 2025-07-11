// src/uploadthing.config.ts

import { createUploadthing, type FileRouter } from "uploadthing/server";
import { type NextRequest } from "next/server";

const f = createUploadthing();

export const ourFileRouter = {
  cvUploader: f({
    "application/pdf": { maxFileSize: "4MB" },
    "application/msword": { maxFileSize: "4MB" },
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document": { maxFileSize: "4MB" },
  }).onUploadComplete(async ({ metadata, file }) => {
    console.log("✅ Upload terminé :", file.name, file.url);
  }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
