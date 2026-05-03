import courses from '../data/courses.json';

// Simulate network delay to demonstrate loading states
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getAllCourses() {
  await delay(1000); // 1s delay
  return courses;
}

export async function getCourseById(id) {
  await delay(500); // 0.5s delay
  return courses.find(course => course.id === id) || null;
}

export async function getPopularCourses() {
  await delay(800);
  // Return top 3 courses sorted by rating
  return [...courses].sort((a, b) => b.rating - a.rating).slice(0, 3);
}

export async function getCategories() {
  await delay(300);
  const categories = new Set(courses.map(c => c.category));
  return Array.from(categories);
}
