"use client";
import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
      <Loader2 className="w-12 h-12 animate-spin text-primary" />
      <h2 className="text-xl font-semibold animate-pulse text-base-content/70">Loading content...</h2>
    </div>
  );
}
