import { useQuery } from "@tanstack/react-query";
import axiosInstance from "./config/axiosInstanse.ts";
import { ICardPeople } from "../interface/ICardPeople.ts";

export const useGetAllCharity = () => {
  return useQuery({
    queryKey: ["getOnePsychologist"],
    queryFn: async () => {
      const response = await axiosInstance.get<ICardPeople[]>(`charity`);
      return response.data;
    },
  });
};
