import { Skeleton } from "@heroui/react";

const Loading = () => {
  return (
    <main className="min-h-screen bg-white px-4 py-10 sm:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-8 border-b border-gray-200 pb-5">
          <Skeleton className="h-4 w-32 rounded-md" />
          <Skeleton className="mt-4 h-9 w-64 rounded-md" />
        </div>

        {/* Featured News */}
        <div className="mb-12 grid gap-8 md:grid-cols-2">
          <Skeleton className="h-64 w-full rounded-xl sm:h-80" />

          <div className="flex flex-col justify-center gap-4">
            <Skeleton className="h-5 w-28 rounded-md" />
            <Skeleton className="h-9 w-full rounded-md" />
            <Skeleton className="h-9 w-4/5 rounded-md" />
            <Skeleton className="h-4 w-full rounded-md" />
            <Skeleton className="h-4 w-full rounded-md" />
            <Skeleton className="h-4 w-2/3 rounded-md" />
          </div>
        </div>

        {/* News Grid */}
        <div className="mb-6 flex items-center justify-between">
          <Skeleton className="h-7 w-40 rounded-md" />
          <Skeleton className="h-5 w-20 rounded-md" />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl border border-gray-100 p-3"
            >
              <Skeleton className="h-48 w-full rounded-lg" />

              <div className="space-y-3 p-2 pt-4">
                <Skeleton className="h-4 w-24 rounded-md" />
                <Skeleton className="h-6 w-full rounded-md" />
                <Skeleton className="h-6 w-4/5 rounded-md" />
                <Skeleton className="h-4 w-full rounded-md" />
                <Skeleton className="h-4 w-2/3 rounded-md" />
              </div>
            </div>
          ))}
        </div>

        {/* Loading Indicator */}
        <div className="mt-12 flex items-center justify-center gap-3">
          <span className="h-2 w-2 animate-bounce rounded-full bg-red-600" />
          <span className="h-2 w-2 animate-bounce rounded-full bg-red-600 [animation-delay:150ms]" />
          <span className="h-2 w-2 animate-bounce rounded-full bg-red-600 [animation-delay:300ms]" />
          <p className="ml-2 text-sm font-medium text-gray-500">
            Loading latest news...
          </p>
        </div>
      </div>
    </main>
  );
};

export default Loading;
