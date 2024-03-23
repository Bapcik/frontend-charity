import axiosInstance from "./config/axiosInstanse.ts";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteCharity = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => {
      return axiosInstance.delete(`/charity/${id}`);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["getAllCharity"] });
    },
  });
};
