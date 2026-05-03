"use client";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { BookOpen, LogOut, User as UserIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();

  const handleSignOut = async () => {
    await authClient.signOut();
    router.push("/login");
  };

  return (
    <div className="navbar bg-base-100/80 backdrop-blur-md sticky top-0 z-50 border-b border-base-200">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/courses">Courses</Link></li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl font-bold flex items-center gap-2">
          <BookOpen className="text-primary w-6 h-6" />
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">SkillSphere</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/courses">Courses</Link></li>
        </ul>
      </div>
      <div className="navbar-end gap-2">
        {isPending ? (
          <span className="loading loading-spinner loading-sm"></span>
        ) : session ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar placeholder">
              <div className="bg-primary text-primary-content rounded-full w-10">
                <span className="text-xl">{session.user.name?.charAt(0).toUpperCase()}</span>
              </div>
            </div>
            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
              <li className="px-4 py-2 font-semibold border-b border-base-200 mb-2">
                Hi, {session.user.name}
              </li>
              <li>
                <Link href="/profile" className="flex items-center gap-2">
                  <UserIcon className="w-4 h-4" /> Profile
                </Link>
              </li>
              <li>
                <button onClick={handleSignOut} className="flex items-center gap-2 text-error">
                  <LogOut className="w-4 h-4" /> Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <>
            <Link href="/login" className="btn btn-ghost">Login</Link>
            <Link href="/register" className="btn btn-primary text-white shadow-lg shadow-primary/30">Sign Up</Link>
          </>
        )}
      </div>
    </div>
  );
}
