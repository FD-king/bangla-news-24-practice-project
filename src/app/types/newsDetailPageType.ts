export default interface INewsDetailPageType {
  id: string;
  title: string;
  description: {
    blocks: {
      type: string;
      model: {
        blocks: {
          type: string;
          model: {
            text: string;
            blocks: {
              type: string;
              model: Record<string, never>;
            }[];
          };
        }[];
      };
    }[];
  };
  link: string;
  firstPublished: string;
  lastPublished: string;
  byline: unknown[];
  topics: {
    id: string;
    name: string;
  }[];
  tags: string[];
  imageUrl: string;
  body: (
    | {
        type: "image";
        url: string;
        width: number;
        height: number;
        caption: string;
        altText: string;
        copyrightHolder: string;
      }
    | {
        type: "text" | "subheading";
        text: string;
      }
  )[];
  text: string;
  wordCount: number;
  source: string;
  sourceUrl: string;
}
