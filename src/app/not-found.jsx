import Link from 'next/link';
import { Compass, Home, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[70vh] px-6 py-24 text-center overflow-hidden">
      
      {/* Background decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[500px] -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-[100px] rounded-full animate-pulse opacity-50" style={{ animationDuration: '4s' }}></div>
      </div>

      <div className="relative z-10">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-base-200/50 backdrop-blur-xl rounded-3xl border border-base-content/10 shadow-xl shadow-base-content/5">
            <Search className="w-12 h-12 text-primary" />
          </div>
        </div>
        
        <h1 className="text-7xl sm:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-primary via-secondary to-accent">
          404
        </h1>
        
        <h2 className="mt-8 text-3xl sm:text-5xl font-bold text-base-content tracking-tight">
          Lost in the learning universe?
        </h2>
        
        <p className="mt-6 text-lg sm:text-xl text-base-content/70 max-w-xl mx-auto leading-relaxed">
          We can't seem to find the page you're looking for. It might have been moved, deleted, or perhaps it never existed in our course catalog.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center">
          <Link 
            href="/" 
            className="btn btn-primary btn-lg rounded-full px-8 hover-scale flex items-center gap-2 w-full sm:w-auto shadow-lg shadow-primary/30"
          >
            <Home className="w-5 h-5" />
            Return Home
          </Link>
          <Link 
            href="/courses" 
            className="btn btn-outline btn-lg rounded-full px-8 hover-scale flex items-center gap-2 w-full sm:w-auto border-2"
          >
            <Compass className="w-5 h-5" />
            Browse Courses
          </Link>
        </div>
      </div>

      {/* Floating abstract decorative elements */}
      <div className="hidden lg:block absolute left-[15%] top-[20%] opacity-40 animate-bounce" style={{ animationDuration: '5s' }}>
        <div className="w-16 h-16 rounded-2xl border-4 border-primary rotate-12 backdrop-blur-sm"></div>
      </div>
      <div className="hidden lg:block absolute right-[15%] bottom-[20%] opacity-40 animate-bounce" style={{ animationDuration: '6s', animationDelay: '1s' }}>
        <div className="w-12 h-12 rounded-full border-4 border-secondary border-dashed animate-spin" style={{ animationDuration: '10s' }}></div>
      </div>
      <div className="hidden lg:block absolute right-[25%] top-[30%] opacity-30 animate-pulse" style={{ animationDuration: '4s' }}>
        <Compass className="w-10 h-10 text-accent rotate-45" />
      </div>
    </div>
  );
}
