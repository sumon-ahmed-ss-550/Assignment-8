"use client";
import { useEffect } from "react";
import { AlertCircle } from "lucide-react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-error/10 text-error p-8 rounded-2xl border border-error/20 flex flex-col items-center text-center shadow-lg">
        <AlertCircle className="w-16 h-16 mb-4" />
        <h2 className="text-2xl font-bold mb-2">Something went wrong!</h2>
        <p className="mb-6 opacity-80">{error.message || "An unexpected error occurred."}</p>
        <button
          className="btn btn-error"
          onClick={() => reset()}
        >
          Try again
        </button>
      </div>
    </div>
  );
}
