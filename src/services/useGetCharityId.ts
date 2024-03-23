import { useQuery } from "@tanstack/react-query";
import axiosInstance from "./config/axiosInstanse.ts";
import { ICardPeople } from "../interface/ICardPeople.ts";

export const useGetCharityId = (id: string) => {
  return useQuery({
    queryKey: ["getOneUserCharity"],
    queryFn: async () => {
      const response = await axiosInstance.get<ICardPeople>(`/charity/${id}`);
      return response.data;
    },
  });
};


