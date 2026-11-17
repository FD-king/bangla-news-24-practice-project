import Link from "next/link";
import { FaArrowLeft, FaRegNewspaper } from "react-icons/fa6";

const NotFoundPage = () => {
  return (
    <main className="flex min-h-[80vh] items-center justify-center bg-white px-6 py-16">
      <div className="mx-auto w-full max-w-2xl text-center">
        {/* Icon */}
        <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-red-50 text-red-600">
          <FaRegNewspaper size={36} />
        </div>

        {/* 404 */}
        <h1 className="text-8xl font-black tracking-tighter text-gray-900 sm:text-9xl">
          404<span className="text-red-600">.</span>
        </h1>

        {/* Text */}
        <div className="mt-6">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-600">
            Page Not Found
          </p>

          <h2 className="mt-3 text-2xl font-bold text-gray-900 sm:text-3xl">
            Looks like this story is missing!
          </h2>

          <p className="mx-auto mt-4 max-w-md text-base leading-7 text-gray-500">
            The page you{"'"}re looking for may have been removed, renamed, or
            is temporarily unavailable. Let{"'"}s get you back to the latest
            headlines.
          </p>
        </div>

        {/* Button */}
        <div className="mt-9 flex justify-center">
          <Link
            href="/"
            className="group flex items-center gap-3 rounded-full bg-red-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-red-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-red-700"
          >
            <FaArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
            Back to Homepage
          </Link>
        </div>

        {/* Bottom decoration */}
        <div className="mx-auto mt-16 max-w-sm border-t border-gray-200 pt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-400">
            News<span className="text-red-600">BD</span> · Stay Informed
          </p>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;
