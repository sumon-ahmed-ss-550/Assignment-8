import Link from "next/link";
import { BookOpen, Mail, MessageCircle, Share2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-10 bg-base-200 text-base-content border-t border-base-300 w-full">

      <aside>
        <BookOpen className="w-10 h-10 text-primary" />
        <p className="font-bold text-xl mt-2">
          SkillSphere<br />
          <span className="text-sm font-normal text-base-content/70">Elevating minds since 2026</span>
        </p>
      </aside>

      <nav>
        <h6 className="footer-title">Platform</h6>
        <Link href="/courses" className="link link-hover">All Courses</Link>
        <Link href="/" className="link link-hover">Trending</Link>
        <Link href="/login" className="link link-hover">Login</Link>
      </nav>

      <nav>
        <h6 className="footer-title">Company</h6>
        <Link href="#" className="link link-hover">About us</Link>
        <Link href="#" className="link link-hover">Contact</Link>
        <Link href="#" className="link link-hover">Careers</Link>
      </nav>

      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="flex gap-4">
          <a href="#" className="text-base-content hover:text-primary transition-colors"><Mail className="w-6 h-6" /></a>
          <a href="#" className="text-base-content hover:text-primary transition-colors"><MessageCircle className="w-6 h-6" /></a>
          <a href="#" className="text-base-content hover:text-primary transition-colors"><Share2 className="w-6 h-6" /></a>
        </div>
      </nav>

    </footer>
  );
}
