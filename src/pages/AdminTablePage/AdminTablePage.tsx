import { AdminTable } from "../../components/AdminTable/AdminTable";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const AdminTablePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) navigate("/admin");
  }, []);
  return (
    <div>
      <AdminTable />
    </div>
  );
};
