import { getCourseById } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Clock, Star, BarChart, ChevronLeft, PlayCircle, FileText, Award } from "lucide-react";
import { Suspense } from "react";
import SkeletonLoader from "@/components/SkeletonLoader";

export default async function CourseDetailsPage({ params }) {
  // Await the params object in Next.js 16 app router dynamic routes
  const { id } = await params;
  
  return (
    <Suspense fallback={
      <div className="container mx-auto px-4 py-12 flex justify-center">
        <div className="w-full max-w-4xl animate-pulse">
           <div className="h-8 bg-base-300 w-32 rounded mb-8"></div>
           <div className="h-[400px] bg-base-300 w-full rounded-3xl mb-8"></div>
           <div className="h-10 bg-base-300 w-3/4 rounded mb-4"></div>
           <div className="h-4 bg-base-300 w-1/2 rounded mb-8"></div>
        </div>
      </div>
    }>
      <CourseContent id={id} />
    </Suspense>
  );
}

async function CourseContent({ id }) {
  const course = await getCourseById(id);

  if (!course) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <Link href="/courses" className="btn btn-ghost btn-sm mb-8 px-0 hover:bg-transparent hover:text-primary">
        <ChevronLeft className="w-4 h-4 mr-1" /> Back to courses
      </Link>

      <div className="bg-base-100 rounded-3xl overflow-hidden shadow-2xl border border-base-200">
        <div className="relative h-[300px] md:h-[400px] w-full group">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={course.image}
            alt={course.title}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="btn btn-circle btn-lg btn-primary shadow-xl scale-110">
              <PlayCircle className="w-8 h-8 ml-1" />
            </button>
          </div>
          <div className="absolute top-6 left-6">
            <span className="badge badge-primary badge-lg shadow-lg font-bold">{course.category}</span>
          </div>
        </div>

        <div className="p-8 md:p-12">
          <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold mb-4">{course.title}</h1>
              <p className="text-xl text-base-content/70 font-medium">Instructor: {course.instructor}</p>
            </div>
            <div className="flex flex-col gap-2 bg-base-200/50 p-4 rounded-2xl w-full md:w-auto min-w-[200px]">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-warning font-bold">
                  <Star className="w-5 h-5 fill-warning" /> {course.rating}
                </div>
                <span className="text-base-content/50 text-sm">(2.4k reviews)</span>
              </div>
              <div className="divider my-0"></div>
              <div className="flex items-center gap-2 font-medium">
                <Clock className="w-5 h-5 text-primary" /> {course.duration}
              </div>
              <div className="flex items-center gap-2 font-medium">
                <BarChart className="w-5 h-5 text-secondary" /> {course.level}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-4">About This Course</h2>
              <p className="text-lg leading-relaxed text-base-content/80 mb-8 whitespace-pre-line">
                {course.description}
                {"\n\n"}
                This comprehensive course is designed to take you from fundamentals to advanced concepts. You will build real-world projects and gain practical experience.
              </p>
              
              <h3 className="text-xl font-bold mb-4">What you will learn</h3>
              <ul className="space-y-3">
                {[1, 2, 3, 4].map((i) => (
                  <li key={i} className="flex items-start gap-3 text-base-content/80">
                    <CheckCircle2 className="w-6 h-6 text-success shrink-0" />
                    <span>Master the core concepts and advanced techniques needed for professional {course.category.toLowerCase()} development.</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-base-200/30 border border-base-200 p-6 rounded-2xl h-fit sticky top-24">
              <h3 className="font-bold text-lg mb-4">Course Content</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg text-primary"><PlayCircle className="w-5 h-5"/></div>
                  <div>
                    <p className="font-medium">120 Lessons</p>
                    <p className="text-sm text-base-content/60">On-demand video</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-secondary/10 p-2 rounded-lg text-secondary"><FileText className="w-5 h-5"/></div>
                  <div>
                    <p className="font-medium">45 Assignments</p>
                    <p className="text-sm text-base-content/60">Practical exercises</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-accent/10 p-2 rounded-lg text-accent"><Award className="w-5 h-5"/></div>
                  <div>
                    <p className="font-medium">Certificate</p>
                    <p className="text-sm text-base-content/60">Upon completion</p>
                  </div>
                </li>
              </ul>
              <button className="btn btn-primary w-full btn-lg shadow-lg shadow-primary/20">Enroll Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
