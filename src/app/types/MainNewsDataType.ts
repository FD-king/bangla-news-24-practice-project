import ITypeOfArticlesInMainNewsData from "./TypeOfArticlesInMainNewsData";

export default interface IMainNewsDataType {
  title: string;
  curationId: string;
  curationType: string;
  link: null | string;
  count: number;
  articles: ITypeOfArticlesInMainNewsData[];
}
