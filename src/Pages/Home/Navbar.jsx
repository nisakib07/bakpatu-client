import { Link, NavLink } from "react-router-dom";
import Wrapper from "../../components/Wrapper";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-3 ${
              isActive
                ? " text-[#fba507] hover:underline hover:bg-white font-semibold text-lg"
                : "text-black font-semibold text-lg"
            } p-2 rounded-lg `
          }>
          হোম
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/aboutUs"
          className={({ isActive }) =>
            `flex items-center gap-3 ${
              isActive
                ? "text-[#fba507] hover:underline hover:bg-white font-semibold text-lg"
                : "text-black font-semibold text-lg"
            } p-2 rounded-lg `
          }>
          এবাউট আস
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contactUs"
          className={({ isActive }) =>
            `flex items-center gap-3 ${
              isActive
                ? "text-[#fba507] hover:underline hover:bg-white font-semibold text-lg"
                : "text-black font-semibold text-lg"
            } p-2 rounded-lg`
          }>
          কন্টাক্ট আস
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="border-b-2 border-[#fba507]">
      <Wrapper>
        <div className="navbar bg-base-100 flex justify-between ">
          <div className="">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                {navLinks}
              </ul>
            </div>
            <div className="text-3xl font-bold">
              <Link to="/">BakPatu</Link>
            </div>
          </div>
          <div className=" hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navLinks}</ul>
          </div>
          <div className="text-xl bg-first px-4 py-2 rounded-lg text-white font-semibold">
            <Link to="/login">Login</Link>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Navbar;
