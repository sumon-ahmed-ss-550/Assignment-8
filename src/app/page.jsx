import Link from "next/link";
import CourseCard from "@/components/CourseCard";
import { getPopularCourses } from "@/lib/data";
import { ArrowRight, CheckCircle2, TrendingUp, Users, Clock, Target, PenTool, Code2 } from "lucide-react";
import { Suspense } from "react";
import SkeletonLoader from "@/components/SkeletonLoader";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-base-200 py-24 sm:py-32">
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] dark:bg-bottom dark:border-b dark:border-slate-100/5"></div>
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-8 animate-bounce">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            <span className="text-sm font-semibold">New courses added this week!</span>
          </div>
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-8">
            Master your future with <br className="hidden sm:block"/>
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">SkillSphere</span>
          </h1>
          <p className="text-xl sm:text-2xl text-base-content/80 max-w-2xl mb-10 leading-relaxed">
            Unlock your potential with world-class courses designed for modern professionals. Learn at your own pace, anytime, anywhere.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/courses" className="btn btn-primary btn-lg shadow-xl shadow-primary/30 hover-scale">
              Explore Courses <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link href="/register" className="btn btn-outline btn-lg hover-scale">
              Start for Free
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card bg-base-100 border border-base-200 hover:border-primary/50 transition-colors p-6 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-3">Expert Instructors</h3>
            <p className="text-base-content/70">Learn from industry leaders who bring real-world experience to your screen.</p>
          </div>
          <div className="card bg-base-100 border border-base-200 hover:border-secondary/50 transition-colors p-6 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center mb-6">
              <TrendingUp className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-3">Learn at your pace</h3>
            <p className="text-base-content/70">Access courses anytime, anywhere. Pause and resume where you left off.</p>
          </div>
          <div className="card bg-base-100 border border-base-200 hover:border-accent/50 transition-colors p-6 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mb-6">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-3">Join Community</h3>
            <p className="text-base-content/70">Connect with thousands of learners. Share ideas, collaborate and grow together.</p>
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2">Popular Courses</h2>
            <p className="text-base-content/70">Our most highly-rated courses selected for you.</p>
          </div>
          <Link href="/courses" className="btn btn-ghost hidden sm:flex">
            View All
          </Link>
        </div>
        
        <Suspense fallback={
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkeletonLoader /><SkeletonLoader /><SkeletonLoader />
          </div>
        }>
          <PopularCoursesList />
        </Suspense>
        
        <div className="mt-8 text-center sm:hidden">
          <Link href="/courses" className="btn btn-outline w-full">
            View All Courses
          </Link>
        </div>
      </section>

      {/* Learning Tips Section */}
      <section className="bg-base-200/50 py-20 border-y border-base-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Learning Tips</h2>
            <p className="text-base-content/70 max-w-2xl mx-auto text-lg">Master your learning journey with these proven strategies for success.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card bg-base-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-base-200">
              <div className="card-body items-center text-center p-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <Clock className="w-8 h-8" />
                </div>
                <h3 className="card-title text-xl font-bold">Time Management</h3>
                <p className="text-base-content/70 mt-2">Allocate specific blocks of time for focused learning and stick to your schedule.</p>
              </div>
            </div>
            
            <div className="card bg-base-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-base-200">
              <div className="card-body items-center text-center p-6">
                <div className="w-16 h-16 rounded-full bg-secondary/10 text-secondary flex items-center justify-center mb-4">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="card-title text-xl font-bold">Consistent Practice</h3>
                <p className="text-base-content/70 mt-2">Small, daily learning sessions are far more effective than occasional cramming.</p>
              </div>
            </div>
            
            <div className="card bg-base-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-base-200">
              <div className="card-body items-center text-center p-6">
                <div className="w-16 h-16 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-4">
                  <PenTool className="w-8 h-8" />
                </div>
                <h3 className="card-title text-xl font-bold">Take Notes</h3>
                <p className="text-base-content/70 mt-2">Write down key concepts in your own words to improve retention and understanding.</p>
              </div>
            </div>
            
            <div className="card bg-base-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-base-200">
              <div className="card-body items-center text-center p-6">
                <div className="w-16 h-16 rounded-full bg-info/10 text-info flex items-center justify-center mb-4">
                  <Code2 className="w-8 h-8" />
                </div>
                <h3 className="card-title text-xl font-bold">Build Projects</h3>
                <p className="text-base-content/70 mt-2">Apply what you learn immediately by building real-world projects and portfolios.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Instructors Section */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Top Instructors</h2>
          <p className="text-base-content/70 max-w-2xl mx-auto text-lg">Learn from industry experts with years of real-world experience.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card bg-base-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-base-200">
            <div className="card-body items-center text-center p-6">
              <div className="avatar mb-4">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://i.pravatar.cc/150?img=5" alt="Dr. Angela Yu" className="object-cover w-full h-full" />
                </div>
              </div>
              <h3 className="card-title text-xl font-bold">Dr. Angela Yu</h3>
              <span className="text-primary font-medium text-sm mb-2">Web Development</span>
              <p className="text-base-content/70 text-sm">Lead instructor at the London App Brewery, teaching millions to code and build successful careers.</p>
            </div>
          </div>
          
          <div className="card bg-base-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-base-200">
            <div className="card-body items-center text-center p-6">
              <div className="avatar mb-4">
                <div className="w-24 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://i.pravatar.cc/150?img=11" alt="Andrew Ng" className="object-cover w-full h-full" />
                </div>
              </div>
              <h3 className="card-title text-xl font-bold">Andrew Ng</h3>
              <span className="text-secondary font-medium text-sm mb-2">Data Science & AI</span>
              <p className="text-base-content/70 text-sm">Pioneer in machine learning and online education. Founder of DeepLearning.AI.</p>
            </div>
          </div>
          
          <div className="card bg-base-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-base-200">
            <div className="card-body items-center text-center p-6">
              <div className="avatar mb-4">
                <div className="w-24 rounded-full ring ring-accent ring-offset-base-100 ring-offset-2 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://i.pravatar.cc/150?img=68" alt="Gary Simon" className="object-cover w-full h-full" />
                </div>
              </div>
              <h3 className="card-title text-xl font-bold">Gary Simon</h3>
              <span className="text-accent font-medium text-sm mb-2">UI/UX Design</span>
              <p className="text-base-content/70 text-sm">Full-stack designer with over 20 years of experience creating stunning user interfaces.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

async function PopularCoursesList() {
  const courses = await getPopularCourses();
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map(course => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}
