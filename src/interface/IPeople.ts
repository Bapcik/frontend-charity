import { UploadFile } from "antd";

export interface IPeopleData {
  fullName: string;
  phone: number;
  cardNumber: string;
  title: string;
  appealDescription: string;
  image: UploadFile;
  sum: number;
}
