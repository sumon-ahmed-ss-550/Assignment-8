import Link from "next/link";
import { Clock, Star, BarChart } from "lucide-react";

export default function CourseCard({ course }) {
  return (
    <Link href={`/courses/${course.id}`} className="block group">
      <div className="card bg-base-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full border border-base-200 overflow-hidden">
        <figure className="relative h-48 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={course.image} 
            alt={course.title} 
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 left-3">
            <span className="badge badge-primary font-semibold shadow-md">{course.category}</span>
          </div>
        </figure>
        <div className="card-body p-5">
          <h2 className="card-title text-lg font-bold line-clamp-2 leading-tight group-hover:text-primary transition-colors">
            {course.title}
          </h2>
          <p className="text-sm text-base-content/70 mt-1">{course.instructor}</p>
          
          <div className="flex items-center gap-4 mt-4 text-sm font-medium text-base-content/80">
            <div className="flex items-center gap-1.5">
              <Star className="w-4 h-4 text-warning fill-warning" />
              <span>{course.rating}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <BarChart className="w-4 h-4" />
              <span>{course.level}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
