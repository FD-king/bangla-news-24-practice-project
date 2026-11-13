import Link from "next/link";
import { connection } from "next/server";

const Footer = async () => {
  await connection();
  return (
    <footer className="mt-16 border-t border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
        {/* Logo / Brand */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-gray-900"
        >
          News<span className="text-red-600">BD</span>
        </Link>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
          <Link href="/" className="transition hover:text-red-600">
            Home
          </Link>
          <Link
            href="/category/national"
            className="transition hover:text-red-600"
          >
            National
          </Link>
          <Link
            href="/category/international"
            className="transition hover:text-red-600"
          >
            International
          </Link>
        </nav>

        {/* Copyright */}
        <p className="text-center text-xs text-gray-400">
          © {new Date().getFullYear()} NewsBD. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
