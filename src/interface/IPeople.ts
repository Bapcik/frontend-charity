import { UploadFile } from "antd";

export interface IPeopleData {
  fullName: string;
  phone: number;
  card: string;
  title: string;
  description: string;
  image: UploadFile;
  raiseMoney: number;
  video: string;
}
