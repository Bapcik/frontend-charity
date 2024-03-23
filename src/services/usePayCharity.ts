import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "./config/axiosInstanse.ts";
import { message } from "antd";

interface IPay {
  id: string | undefined;
  sum: string;
}
export const usePayCharity = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async (data: IPay) => {
      const response = await axiosInstance.post(`charity/${data.id}`, data);
      return response.data;
    },
    onSuccess: async () => {
      navigate("/");
      message.success("Вы успешно пожертвовали!");
    },
  });
};
