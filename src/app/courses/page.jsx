import { getAllCourses, getCategories } from "@/lib/data";
import CoursesClient from "./CoursesClient";
import SkeletonLoader from "@/components/SkeletonLoader";
import { Suspense } from "react";

// Server Component
export default async function CoursesPage() {
  return (
    <Suspense fallback={
      <div className="container mx-auto px-4 py-12">
         <div className="h-10 bg-base-300 rounded w-64 mb-10 animate-pulse"></div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <SkeletonLoader /><SkeletonLoader /><SkeletonLoader /><SkeletonLoader />
         </div>
      </div>
    }>
      <CoursesDataLoader />
    </Suspense>
  );
}

async function CoursesDataLoader() {
  const [courses, categories] = await Promise.all([
    getAllCourses(),
    getCategories()
  ]);

  return <CoursesClient initialCourses={courses} categories={categories} />;
}
