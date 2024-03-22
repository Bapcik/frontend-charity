import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "./config/axiosInstanse.ts";
import { message } from "antd";

export const usePostCharity = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async (data: FormData) => {
      const response = await axiosInstance.post(`charity/new`, data);

      return response.data;
    },
    onSuccess: async () => {
      navigate("/");
      message.success("Вы успешно отправили заявку!");
    },
    onError: () => {
      message.error("Заполните все поля!");
    },
  });
};
