"use client";

import { useState } from "react";
import CourseCard from "@/components/CourseCard";
import { Search } from "lucide-react";

export default function CoursesClient({ initialCourses, categories }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCourses = initialCourses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
        <div>
          <h1 className="text-4xl font-bold mb-2">Explore Courses</h1>
          <p className="text-base-content/70 text-lg">Find the perfect course to advance your career.</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-base-content/50 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search courses..." 
              className="input input-bordered w-full pl-10 bg-base-200/50 focus:bg-base-100"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <select 
            className="select select-bordered w-full sm:w-48 bg-base-200/50 focus:bg-base-100"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="All">All Categories</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>

      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-base-200 rounded-3xl border border-base-300 border-dashed">
          <div className="text-5xl mb-4">🔍</div>
          <h3 className="text-2xl font-bold mb-2">No courses found</h3>
          <p className="text-base-content/70">Try adjusting your search term or category filter.</p>
          <button 
            className="btn btn-primary mt-6"
            onClick={() => { setSearchTerm(""); setSelectedCategory("All"); }}
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}
