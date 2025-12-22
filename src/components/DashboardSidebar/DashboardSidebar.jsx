import { Link, NavLink } from "react-router";
import useRole from "../../hooks/useRole";
import Loading from "../../pages/Shared/Loading";
import { FaBox, FaClipboardList, FaHome, FaUser } from "react-icons/fa";
import { FaBarsProgress } from "react-icons/fa6";
import { MdGroup, MdInventory, MdRequestPage } from "react-icons/md";

export default function DashboardSidebar() {
  const { role, roleLoading } = useRole();

  if (roleLoading) return <Loading />;

  // ACTIVE STYLE for DaisyUI
  const activeClass = "bg-accent text-white font-semibold rounded-lg";

  return (
    <aside className="w-64 bg-base-100 shadow-md min-h-screen h-full">
      {/* Title */}
      <div className="p-4 text-2xl font-bold border-b text-primary">
        <Link className="flex items-center gap-2" to={"/dashboard"}>
          <img className="w-10 h-10" src="/logo.png" />
          Dashboard
        </Link>
      </div>

      <ul className="menu w-full p-4 text-lg">
        {/* HOME BUTTON */}
        <li>
          <NavLink
            to="/"
            className={`({ isActive }) => (isActive ? activeClass : "") `}
          >
            <FaHome />
            Home
          </NavLink>
        </li>

        {/* EMPLOYEE SIDEBAR */}
        {role === "employee" && (
          <>
            <li>
              <NavLink
                to="/dashboard/employee/my-assets"
                className={({ isActive }) => (isActive ? activeClass : "")}
              >
                <FaBarsProgress className="mr-2 text-xl" />
                My Assets
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/dashboard/employee/request-asset"
                className={({ isActive }) => (isActive ? activeClass : "")}
              >
                <FaClipboardList className="mr-2 text-xl" />
                Request Asset
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/dashboard/employee/my-team"
                className={({ isActive }) => (isActive ? activeClass : "")}
              >
                <MdGroup className="mr-2 text-xl" />
                My Team
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/dashboard/employee/profile"
                className={({ isActive }) => (isActive ? activeClass : "")}
              >
                <FaUser className="mr-2 text-xl" />
                Profile
              </NavLink>
            </li>
          </>
        )}

        {/* HR SIDEBAR */}
        {role === "hr" && (
          <>
            <li>
              <NavLink
                to="/dashboard/hr/assets"
                className={({ isActive }) => (isActive ? activeClass : "")}
              >
                <FaBarsProgress className="mr-2 text-xl" />
                Asset List
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/dashboard/hr/add-asset"
                className={({ isActive }) => (isActive ? activeClass : "")}
              >
                <MdInventory className="mr-2 text-xl" />
                Add Asset
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/dashboard/hr/requests"
                className={({ isActive }) => (isActive ? activeClass : "")}
              >
                <MdRequestPage className="mr-2 text-xl" />
                All Requests
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/dashboard/hr/employees"
                className={({ isActive }) => (isActive ? activeClass : "")}
              >
                <FaBarsProgress className="mr-2 text-xl" />
                Employee List
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/dashboard/hr/upgrade"
                className={({ isActive }) => (isActive ? activeClass : "")}
              >
                <FaBox className="mr-2 text-xl" />
                Upgrade Package
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/dashboard/hr/profile"
                className={({ isActive }) => (isActive ? activeClass : "")}
              >
                <FaUser />
                Profile
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </aside>
  );
}
