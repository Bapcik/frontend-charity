import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "./config/axiosInstanse.ts";

export const usePublishCharity = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => {
      return axiosInstance.put(`/charity/${id}`);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["getAllCharity"] });
    },
  });
};
