import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-gray-800 min-h-screen overflow-y-auto">
      <Link to="/">
        <div className="text-white text-lg font-semibold p-4">BakPatu</div>
      </Link>
      <ul>
        <li>
          <NavLink
            to="/bpbpAdmin/home"
            className={({ isActive }) =>
              `flex items-center gap-3 ${
                isActive ? "bg-blue-600 text-white" : "text-white"
              } p-2 rounded-lg`
            }>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/bpbpadmin/dashboard"
            className={({ isActive }) =>
              `flex items-center gap-3 ${
                isActive ? "bg-blue-600 text-white" : "text-white"
              } p-2 rounded-lg`
            }>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/bpbpadmin/teachers"
            className={({ isActive }) =>
              `flex items-center gap-3 ${
                isActive ? "bg-blue-600 text-white" : "text-white"
              } p-2 rounded-lg`
            }>
            Teachers
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/bpbpadmin/courses"
            className={({ isActive }) =>
              `flex items-center gap-3 ${
                isActive ? "bg-blue-600 text-white" : "text-white"
              } p-2 rounded-lg`
            }>
            Courses
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/bpbpadmin/students"
            className={({ isActive }) =>
              `flex items-center gap-3 ${
                isActive ? "bg-blue-600 text-white" : "text-white"
              } p-2 rounded-lg`
            }>
            Students
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/bpbpadmin/transactions"
            className={({ isActive }) =>
              `flex items-center gap-3 ${
                isActive ? "bg-blue-600 text-white" : "text-white"
              } p-2 rounded-lg`
            }>
            Transactions
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
