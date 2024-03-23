import { useMutation } from "@tanstack/react-query";
import axiosInstance from "./config/axiosInstanse.ts";
import { IAuth } from "../interface/IAuth.ts";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

export const useAdminLogin = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async (credentials: IAuth) => {
      const response = await axiosInstance.post(`auth/admin`, {
        ...credentials,
      });

      return response.data;
    },
    onSuccess: async (data) => {
      localStorage.setItem("accessToken", data.accessToken);
      navigate("/admin/table/");
    },
    onError: () => {
      message.error("Не верный данные");
    },
  });
};
