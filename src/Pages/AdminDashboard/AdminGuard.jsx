import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Navigate } from "react-router-dom";

const AdminGuard = ({ children }) => {
  const token = localStorage.getItem("token");

  const { data: isAdmin, isLoading } = useQuery({
    queryKey: ["isAdmin"],
    queryFn: async () => {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const res = await axios.get(
        "https://test1.bakpatu.com/api/v1/admin/",
        config
      );

      return res.data;
    },
  });

  if (!isAdmin) {
    return <Navigate to="/adminLogin" replace />;
  }

  return <>{children}</>;
};

export default AdminGuard;
