import { Outlet } from "react-router-dom";
import AdminDrawer from "./AdminDrawer/AdminDrawer";

const AdminDashboard = () => {
  return (
    <div className="flex gap-4">
      <AdminDrawer></AdminDrawer>

      <div className="w-full">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default AdminDashboard;
