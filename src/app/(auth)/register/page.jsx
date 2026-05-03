"use client";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Mail, Lock, User, Loader2, UserPlus } from "lucide-react";

export default function RegisterPage() {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();


  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = new FormData(e.currentTarget)
    const formData = Object.fromEntries(form.entries());
    try {

      const res = await authClient.signUp.email({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        image: formData.image,
      })
      router.push("/login")

    } catch (error) {
      console.log(error)
      setError(error.message)
    }

  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4">
      <div className="card w-full max-w-md bg-base-100 shadow-2xl border border-base-200">
        <div className="card-body p-8">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 text-secondary mb-4">
              <UserPlus className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold">Create Account</h2>
            <p className="text-base-content/60 mt-2">Join SkillSphere and start learning</p>
          </div>

          {error && (
            <div className="alert alert-error mb-4 rounded-xl text-sm py-3">
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleRegister} className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Full Name</span>
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-base-content/40" />
                <input
                  type="text"
                  placeholder="John Doe"
                  className="input input-bordered w-full pl-10 focus:input-secondary"
                  required
                  name="name"

                />
              </div>
            </div>



            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-base-content/40" />
                <input
                  type="email"
                  placeholder="name@example.com"
                  className="input input-bordered w-full pl-10 focus:input-secondary"
                  required
                  name="email"

                />
              </div>
            </div>


            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Image URL</span>
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-base-content/40" />
                <input
                  type="text"
                  placeholder="https://example.com/image.jpg"
                  className="input input-bordered w-full pl-10 focus:input-secondary"
                  required
                  name="image"

                />
              </div>
            </div>


            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-base-content/40" />
                <input
                  type="password"
                  placeholder="••••••••"
                  className="input input-bordered w-full pl-10 focus:input-secondary"
                  required
                  name="password"


                />
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-secondary w-full mt-2 shadow-lg shadow-secondary/30 text-white"
              disabled={loading}
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Sign Up"}
            </button>
          </form>

          <p className="text-center text-sm mt-6 text-base-content/70">
            Already have an account? <Link href="/login" className="link link-secondary font-medium">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
