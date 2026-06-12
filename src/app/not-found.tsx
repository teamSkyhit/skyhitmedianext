import Link from "next/link";
import Image from "next/image";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FFF6F3] flex flex-col items-center justify-center text-center px-6 py-24">
      <div className="max-w-md w-full bg-white p-8 md:p-12 rounded-3xl shadow-xl border-secondary border-t-8 flex flex-col items-center">
        {/* Logo */}
        <Link href="/" className="mb-8">
          <Image
            src="/images/header-skyhit-logo-desktop.webp"
            alt="Skyhit Media Logo"
            width={172}
            height={64}
            className="h-16 w-auto"
            preload
          />
        </Link>

        {/* Giant 404 text */}
        <h1 className="font-headline text-7xl md:text-8xl font-bold text-primary mb-4">404</h1>

        {/* Message */}
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8 text-sm md:text-base">
          Sorry, the page you are looking for doesn&apos;t exist or has been moved to a new URL.
        </p>

        {/* Home Button */}
        <Link
          href="/"
          className="bg-secondary text-white px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 hover:bg-[#7D4E28] transition duration-300 shadow-md"
        >
          <Home size={18} />
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
