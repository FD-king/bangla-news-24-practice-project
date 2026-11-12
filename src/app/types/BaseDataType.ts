import IMainNewsDataType from "./MainNewsDataType";

export default interface IBaseData {
  success: boolean;
  count: number;
  cachedAt: string;
  data: IMainNewsDataType[];
}
