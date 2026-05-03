"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { User, Loader2, ArrowLeft } from "lucide-react";

export default function UpdateProfilePage() {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();

  const [name, setName] = useState(session?.user?.name || "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (isPending) {
    return (
      <div className="min-h-[60vh] flex justify-center items-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!session) {
    router.push("/login");
    return null;
  }

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const { error: updateError } = await authClient.updateUser({
        name: name,
      });

      if (updateError) {
        setError(updateError.message || "Failed to update profile.");
        setLoading(false);
      } else {
        router.push("/profile");
        router.refresh();
      }
    } catch (err) {
      setError("An unexpected error occurred.");
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-2xl">
      <Link href="/profile" className="btn btn-ghost btn-sm mb-6 px-0 hover:bg-transparent hover:text-primary">
        <ArrowLeft className="w-4 h-4 mr-1" /> Back to Profile
      </Link>

      <div className="card bg-base-100 shadow-xl border border-base-200">
        <div className="card-body p-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="avatar">
              <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <div className="bg-primary text-primary-content flex items-center justify-center h-full w-full text-2xl font-bold">
                  {session.user.name?.charAt(0).toUpperCase()}
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold">Update Profile</h2>
              <p className="text-base-content/60">Update your personal information</p>
            </div>
          </div>

          {error && (
            <div className="alert alert-error mb-6 rounded-xl text-sm py-3">
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleUpdate} className="space-y-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Full Name</span>
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-base-content/40" />
                <input 
                  type="text" 
                  className="input input-bordered w-full pl-10 focus:input-primary" 
                  required 
                  value={name || session.user.name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium text-base-content/50">Email Address (Cannot be changed)</span>
              </label>
              <input 
                type="email" 
                className="input input-bordered w-full bg-base-200/50 cursor-not-allowed text-base-content/50" 
                readOnly 
                value={session.user.email}
              />
            </div>

            <div className="flex justify-end gap-4 mt-8">
              <Link href="/profile" className="btn btn-ghost">Cancel</Link>
              <button 
                type="submit" 
                className="btn btn-primary shadow-lg shadow-primary/30"
                disabled={loading || name === session.user.name}
              >
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Save Changes"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
