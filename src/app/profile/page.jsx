import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { User, Mail, Calendar, Settings, BookOpen } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default async function ProfilePage() {
  const session = await auth.api.getSession({
    headers: await headers()
  });

  if (!session) {
    redirect("/login");
  }

  const { user } = session;

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="flex flex-col md:flex-row items-start gap-8">

        {/* Sidebar */}
        <div className="w-full md:w-1/3 space-y-6">
          <div className="card bg-base-100 shadow-xl border border-base-200">
            <div className="card-body items-center text-center">
              <div className="avatar mb-4">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <div className="bg-primary text-primary-content flex items-center justify-center h-full w-full text-3xl font-bold">
                    {/* {user.name?.charAt(0).toUpperCase()} */}
                    <Image width={50} height={50} src={user.image} alt="Profile" className="w-full h-full object-cover rounded-full" />
                  </div>
                </div>
              </div>
              <h2 className="card-title text-2xl">{user.name}</h2>
              <p className="text-base-content/60 flex items-center gap-2 mt-2">
                <Mail className="w-4 h-4" /> {user.email}
              </p>

              <div className="divider"></div>

              <div className="w-full space-y-2">
                <button className="btn btn-primary w-full text-left justify-start">
                  <User className="w-5 h-5 mr-2" /> Personal Info
                </button>
                <button className="btn btn-ghost w-full text-left justify-start text-base-content/70">
                  <BookOpen className="w-5 h-5 mr-2" /> My Learning
                </button>
                <button className="btn btn-ghost w-full text-left justify-start text-base-content/70">
                  <Settings className="w-5 h-5 mr-2" /> Account Settings
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full md:w-2/3 space-y-6">
          <div className="card bg-base-100 shadow-xl border border-base-200">
            <div className="card-body">
              <h3 className="text-2xl font-bold mb-6">Personal Information</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">Full Name</span>
                  </label>
                  <input type="text" value={user.name} className="input input-bordered w-full bg-base-200/50" readOnly />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">Email Address</span>
                  </label>
                  <input type="email" value={user.email} className="input input-bordered w-full bg-base-200/50" readOnly />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">Account Created</span>
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-base-content/40" />
                    <input
                      type="text"
                      value={new Date(user.createdAt).toLocaleDateString()}
                      className="input input-bordered w-full pl-10 bg-base-200/50"
                      readOnly
                    />
                  </div>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">Role</span>
                  </label>
                  <input type="text" value={user.role || "Student"} className="input input-bordered w-full bg-base-200/50" readOnly />
                </div>
              </div>

              <div className="mt-8 flex justify-end">
                <Link href="/profile/update" className="btn btn-primary">Update Profile</Link>
              </div>
            </div>
          </div>

          <div className="card bg-primary text-primary-content shadow-xl">
            <div className="card-body">
              <h3 className="card-title">Ready to learn?</h3>
              <p>Explore our courses and start learning today to boost your career.</p>
              <div className="card-actions justify-end mt-4">
                <a href="/courses" className="btn btn-outline text-primary-content hover:bg-primary-content hover:text-primary">
                  Browse Courses
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
