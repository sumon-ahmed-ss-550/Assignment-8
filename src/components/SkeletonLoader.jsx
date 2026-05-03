export default function SkeletonLoader() {
  return (
    <div className="card bg-base-100 shadow-sm h-full border border-base-200 animate-pulse">
      <div className="h-48 bg-base-300 w-full rounded-t-2xl"></div>
      <div className="card-body p-5">
        <div className="h-6 bg-base-300 rounded w-3/4 mb-2"></div>
        <div className="h-6 bg-base-300 rounded w-1/2 mb-4"></div>
        <div className="h-4 bg-base-300 rounded w-1/3 mb-6"></div>
        
        <div className="flex gap-4 mt-auto">
          <div className="h-4 bg-base-300 rounded w-12"></div>
          <div className="h-4 bg-base-300 rounded w-16"></div>
          <div className="h-4 bg-base-300 rounded w-16"></div>
        </div>
      </div>
    </div>
  );
}
