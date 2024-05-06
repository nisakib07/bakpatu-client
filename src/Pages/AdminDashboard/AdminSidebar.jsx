import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { MdOutlineDashboard } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";
import { SiGoogleclassroom } from "react-icons/si";
import { PiStudentFill } from "react-icons/pi";
import { TbTransactionEuro } from "react-icons/tb";

const AdminSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div>
      {isCollapsed ? (
        <div
          className={`bg-[#203c4b] min-h-screen ${
            isCollapsed && "translate-x-0"
          } transition-all duration-500 ease-linear`}>
          <button
            onClick={toggleSidebar}
            className="text-white text-lg font-semibold px-5">
            →
          </button>

          <ul className="flex flex-col items-center">
            <li>
              <NavLink
                to="/bpbpAdmin/home"
                className={({ isActive }) =>
                  `flex items-center gap-3 ${
                    isActive ? "bg-first text-white" : "text-white"
                  } p-2 rounded-lg`
                }>
                <IoHome></IoHome>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/bpbpadmin/dashboard"
                className={({ isActive }) =>
                  `flex items-center gap-3 ${
                    isActive ? "bg-first text-white" : "text-white"
                  } p-2 rounded-lg`
                }>
                <MdOutlineDashboard></MdOutlineDashboard>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/bpbpadmin/teachers"
                className={({ isActive }) =>
                  `flex items-center gap-3 ${
                    isActive ? "bg-first text-white" : "text-white"
                  } p-2 rounded-lg`
                }>
                <GiTeacher></GiTeacher>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/bpbpadmin/courses"
                className={({ isActive }) =>
                  `flex items-center gap-3 ${
                    isActive ? "bg-first text-white" : "text-white"
                  } p-2 rounded-lg`
                }>
                <SiGoogleclassroom></SiGoogleclassroom>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/bpbpadmin/students"
                className={({ isActive }) =>
                  `flex items-center gap-3 ${
                    isActive ? "bg-first text-white" : "text-white"
                  } p-2 rounded-lg`
                }>
                <PiStudentFill></PiStudentFill>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/bpbpadmin/transactions"
                className={({ isActive }) =>
                  `flex items-center gap-3 ${
                    isActive ? "bg-first text-white" : "text-white"
                  } p-2 rounded-lg`
                }>
                <TbTransactionEuro></TbTransactionEuro>
              </NavLink>
            </li>
          </ul>
        </div>
      ) : (
        <div
          className={`bg-[#203c4b] min-h-screen overflow-y-auto px-5 ${
            isCollapsed ? "-translate-x-full" : "-translate-x-0"
          } transition-all duration-500 ease-linear`}>
          {/* Collapsed button */}
          <div className="flex items-center mt-5 px-2 gap-5">
            <h1 className="text-white text-xl font-bold">Bakpatu</h1>
            <button
              onClick={toggleSidebar}
              className="text-white text-lg font-semibold">
              ←
            </button>
          </div>

          {/* Sidebar content */}
          <ul>
            <li>
              <NavLink
                to="/bpbpAdmin/home"
                className={({ isActive }) =>
                  `flex items-center gap-3 ${
                    isActive ? "bg-first text-white" : "text-white"
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
                    isActive ? "bg-first text-white" : "text-white"
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
                    isActive ? "bg-first text-white" : "text-white"
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
                    isActive ? "bg-first text-white" : "text-white"
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
                    isActive ? "bg-first text-white" : "text-white"
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
                    isActive ? "bg-first text-white" : "text-white"
                  } p-2 rounded-lg`
                }>
                Transactions
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default AdminSidebar;
