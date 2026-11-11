export default interface ITypeOfArticlesInMainNewsData {
  id: string;
  title: string;
  description: string;
  link: string;
  imageUrl: string;
  imageAlt: string;
  category: string;
  type: string;
  isLive: boolean;
  firstPublished: null | string;
  lastPublished: null | string;
  source: string;
}
