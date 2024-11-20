"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="border-t border-white/5 py-3">
      <div className="flex items-center justify-center gap-6">
        <Link
          href="/"
          className={`text-xs transition-colors duration-200 ${
            pathname === "/" ? "text-white" : "text-gray-400 hover:text-white"
          }`}
        >
          Home
        </Link>
        <div className="h-0.5 w-0.5 rounded-full bg-gray-500"></div>
        <Link
          href="/about"
          className={`text-xs transition-colors duration-200 ${
            pathname === "/about"
              ? "text-white"
              : "text-gray-400 hover:text-white"
          }`}
        >
          About
        </Link>
        <div className="h-0.5 w-0.5 rounded-full bg-gray-500"></div>
        <Link
          href="/contact-us"
          className={`text-xs transition-colors duration-200 ${
            pathname === "/contact-us"
              ? "text-white"
              : "text-gray-400 hover:text-white"
          }`}
        >
          Contact Us
        </Link>
      </div>
    </footer>
  );
}
