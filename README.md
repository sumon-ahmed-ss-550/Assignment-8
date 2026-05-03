# SkillSphere - Modern Online Learning Platform

Welcome to **SkillSphere**, a beautifully designed, modern online learning platform built to provide world-class courses for professionals. Learn at your own pace, anytime, anywhere.

## 🌐 Live URL
**[SkillSphere Live Demo](https://assignment-8-sigma-nine.vercel.app)** *(Replace with your actual deployment URL if different)*

## 🎯 Purpose
SkillSphere is designed to demonstrate a robust, modern full-stack application. It provides an intuitive and responsive UI for browsing courses, dynamic searching, secure authentication, and managing user profiles. It serves as an excellent foundation for e-learning platforms.

## ✨ Key Features
- **Modern User Interface**: Stunning, clean, and interactive UI built with Tailwind CSS v4 and DaisyUI v5, featuring micro-animations and hover effects.
- **Responsive Design**: Flawless experience across mobile, tablet, and desktop devices.
- **Authentication**: Secure email/password and Google OAuth login powered by Better Auth.
- **Course Discovery**: Browse trending courses or explore all courses with instant client-side search and category filtering.
- **Protected Routes**: Secure profile and course detail pages that require authentication.
- **Dynamic User Profiles**: Users can update their profile information and display custom avatars.
- **Server-Side Rendering & Suspense**: Fast data fetching with beautiful skeleton loaders during transit.

## 🛠️ Technology Stack & Packages

This project leverages the latest web technologies:

### Core Framework
- **[Next.js 16](https://nextjs.org/)** - App Router architecture for server and client components.
- **[React 19](https://react.dev/)** - The library for web and native user interfaces.

### Styling & UI
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first CSS framework (using the new CSS-first PostCSS setup).
- **[DaisyUI v5](https://daisyui.com/)** - The most popular component library for Tailwind CSS.
- **[Lucide React](https://lucide.dev/)** - Beautiful, consistent, and clean SVG icons.
- **clsx & tailwind-merge** - Utilities for conditional and dynamic tailwind class merging.

### Authentication & Database
- **[Better Auth](https://better-auth.com/)** - Comprehensive and secure authentication framework.
- **MongoDB** - Primary database using `mongodb` driver and `@better-auth/mongo-adapter`.
- *(Note: `better-sqlite3` was used during initial local prototyping)*

## 🚀 Getting Started

1. **Clone the repository** and install dependencies:
   ```bash
   npm install
   ```

2. **Configure Environment Variables**:
   Create a `.env` file in the root directory and add the following:
   ```env
   BETTER_AUTH_SECRET=your_super_secret_string
   BETTER_AUTH_URL=http://localhost:3000
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   MONGODB_URI=your_mongodb_connection_string
   
   # Optional: For Google Login
   CLIENT_ID=your_google_client_id
   CLIENT_SECRET=your_google_client_secret
   ```

3. **Run the Development Server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to [http://localhost:3000](http://localhost:3000).
