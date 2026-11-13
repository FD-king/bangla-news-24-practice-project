import INewsDetailPageType from "@/app/types/newsDetailPageType";

const NewsDetailsPage = async ({
  params,
}: {
  params: Promise<{ newsDetailsID: string }>;
}) => {
  // Fetch article data
  const { newsDetailsID } = await params;

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/article/${newsDetailsID}`,
  );

  if (!res.ok) {
    throw new Error("Failed to fetch news details");
  }

  const data = await res.json();
  const detailNewsData: INewsDetailPageType = data.data;

  // Extract description paragraphs
  const descriptionText = detailNewsData.description.blocks
    .flatMap((block) => block.model.blocks)
    .map((block) => block.model.text)
    .filter(Boolean)
    .join(" ");

  // Format publication date
  const publishedDate = new Date(detailNewsData.firstPublished).toLocaleString(
    "bn-BD",
    {
      timeZone: "Asia/Dhaka",
      dateStyle: "full",
      timeStyle: "short",
    },
  );

  return (
    <main className="min-h-screen bg-white px-4 py-8 text-black sm:px-6">
      <article className="mx-auto max-w-4xl">
        {/* Article Header */}
        <header className="border-b border-gray-200 pb-6">
          {/* Title */}
          <h1 className="mb-5 text-3xl font-bold leading-[1.5] tracking-tight sm:text-4xl">
            {detailNewsData.title}
          </h1>

          {/* Description */}
          <p className="text-base leading-8 text-gray-600 sm:text-lg">
            {descriptionText}
          </p>

          {/* Article Metadata */}
          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500">
            <span>{publishedDate}</span>

            <span className="hidden text-gray-300 sm:inline">|</span>

            <span>{detailNewsData.wordCount} শব্দ</span>
          </div>
        </header>

        {/* Featured Image */}
        {/* {detailNewsData.imageUrl && (
          <figure className="mt-6">
            <img
              src={detailNewsData.imageUrl}
              alt={detailNewsData.title}
              className="h-auto w-full rounded-md object-contain"
            />
          </figure>
        )} */}

        {/* Article Body */}
        <div className="mx-auto mt-8 max-w-3xl">
          {detailNewsData.body.map((content, index) => {
            // Image Content
            if (content.type === "image") {
              return (
                <figure key={index} className="my-8">
                  <img
                    src={content.url}
                    alt={content.altText || detailNewsData.title}
                    className="h-auto w-full rounded-md object-contain"
                  />

                  {content.caption && (
                    <figcaption className="mt-2 text-sm leading-6 text-gray-500">
                      {content.caption}
                    </figcaption>
                  )}

                  {content.copyrightHolder && (
                    <p className="mt-1 text-xs text-gray-400">
                      ছবি: {content.copyrightHolder}
                    </p>
                  )}
                </figure>
              );
            }

            // Subheading Content
            if (content.type === "subheading") {
              return (
                <h2
                  key={index}
                  className="mb-4 mt-10 text-2xl font-bold leading-relaxed"
                >
                  {content.text}
                </h2>
              );
            }

            // Paragraph Content
            if (content.type === "text") {
              return (
                <p
                  key={index}
                  className="mb-6 text-base leading-[2] text-gray-800 sm:text-lg"
                >
                  {content.text}
                </p>
              );
            }

            return null;
          })}
        </div>

        {/* Article Footer */}
        <footer className="mx-auto mt-10 max-w-3xl border-t border-gray-200 pt-6">
          {/* Source */}
          <p className="text-sm text-gray-500">
            সূত্র: {detailNewsData.source}
          </p>

          {/* Tags */}
          {detailNewsData.tags.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {detailNewsData.tags.map((tag, index) => (
                <span
                  key={index}
                  className="rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </footer>
      </article>
    </main>
  );
};

export default NewsDetailsPage;
