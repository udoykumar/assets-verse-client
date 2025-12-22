import { Link } from "react-router";
import useAuth from "../../hooks/useAuth";
import Loading from "../../pages/Shared/Loading";
import { useEffect, useRef, useState } from "react";
import { FaBars, FaBox, FaClipboardList, FaHome, FaUser } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useRole from "../../hooks/useRole";
import { FaAddressCard } from "react-icons/fa";
import {
  MdGroup,
  MdInventory,
  MdRequestPage,
  MdSpaceDashboard,
} from "react-icons/md";
import { FaBarsProgress } from "react-icons/fa6";

export default function Navbar() {
  const { user, logOut } = useAuth();

  const { role, roleLoading } = useRole();

  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const axiosSecure = useAxiosSecure();

  const { data: profile = {}, isLoading } = useQuery({
    queryKey: ["hr-profile", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${user.email}`);
      return res.data;
    },
  });

  // CLOSE DROPDOWN WHEN CLICK OUTSIDE
  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (roleLoading) {
    return <Loading />;
  }

  if (isLoading && user) return <Loading />;

  // ===================== NAV LINKS ===================== //

  const employeeLinksDesktop = (
    <>
      <Link className="hover:text-primary flex items-center" to="/dashboard">
        <MdSpaceDashboard className="mr-2 text-xl" />
        Dashboard
      </Link>
      <Link
        className="hover:text-primary flex items-center"
        to="/dashboard/employee/my-assets"
      >
        <FaBarsProgress className="mr-2 text-xl" />
        My Assets
      </Link>
      <Link
        className="hover:text-primary flex items-center"
        to="/dashboard/employee/request-asset"
      >
        <FaClipboardList className="mr-2 text-xl" />
        Request Asset
      </Link>
      <Link
        className="hover:text-primary flex items-center "
        to="/dashboard/employee/my-team"
      >
        <MdGroup className="mr-2 text-xl" />
        My Team
      </Link>
      <Link
        className="hover:shadow hover:shadow-primary w-fit rounded-full"
        to="/dashboard/employee/profile"
        title="Profile"
      >
        <img className="w-10 h-10 rounded-full" src={profile.photoURL} alt="" />
      </Link>
    </>
  );

  const employeeLinksMobile = (
    <>
      <Link className="hover:text-primary flex items-center" to="/dashboard">
        <MdSpaceDashboard className="mr-2 text-xl" />
        Dashboard
      </Link>
      <Link
        className="hover:text-primary flex items-center"
        to="/dashboard/employee/my-assets"
      >
        <FaBarsProgress className="mr-2 text-xl" />
        My Assets
      </Link>
      <Link
        className="hover:text-primary flex items-center"
        to="/dashboard/employee/request-asset"
      >
        <FaClipboardList className="mr-2 text-xl" />
        Request Asset
      </Link>
      <Link
        className="hover:text-primary flex items-center "
        to="/dashboard/employee/my-team"
      >
        <MdGroup className="mr-2 text-xl" />
        My Team
      </Link>

      <Link
        className="hover:text-primary flex items-center"
        to="/dashboard/employee/profile"
      >
        <FaUser className="mr-2 text-xl" />
        My Profile
      </Link>
    </>
  );

  const hrLinksDesktop = (
    <>
      <Link className="hover:text-primary flex items-center" to="/dashboard">
        <MdSpaceDashboard className="mr-2 text-xl" />
        Dashboard
      </Link>
      <Link
        className="hover:text-primary flex items-center"
        to="/dashboard/hr/assets"
      >
        <FaBarsProgress className="mr-2 text-xl" />
        Asset List
      </Link>
      <Link
        className="hover:text-primary flex items-center"
        to="/dashboard/hr/add-asset"
      >
        <MdInventory className="mr-2 text-xl" />
        Add Asset
      </Link>
      <Link
        className="hover:text-primary flex items-center"
        to="/dashboard/hr/requests"
      >
        <FaClipboardList className="mr-2 text-xl" />
        All Requests
      </Link>
      <Link
        className="hover:text-primary flex items-center"
        to="/dashboard/hr/employees"
      >
        <FaBarsProgress className="mr-2 text-xl" />
        Employee List
      </Link>
      <Link
        className="hover:text-primary flex items-center"
        to="/dashboard/hr/upgrade"
      >
        <FaBox className="mr-2 text-xl" />
        Upgrade Package
      </Link>
      <Link
        className="hover:shadow hover:shadow-primary w-fit rounded-full"
        to="/dashboard/hr/profile"
      >
        <img
          className="w-10 h-10 rounded-full"
          src={profile.photoURL || profile.companyLogo}
          alt=""
        />
      </Link>
    </>
  );

  const hrLinksMobile = (
    <>
      <Link className="hover:text-primary flex items-center" to="/dashboard">
        <MdSpaceDashboard className="mr-2 text-xl" />
        Dashboard
      </Link>
      <Link
        className="hover:text-primary flex items-center"
        to="/dashboard/hr/assets"
      >
        <FaBarsProgress className="mr-2 text-xl" />
        Asset List
      </Link>
      <Link
        className="hover:text-primary flex items-center"
        to="/dashboard/hr/add-asset"
      >
        <MdInventory className="mr-2 text-xl" />
        Add Asset
      </Link>
      <Link
        className="hover:text-primary flex items-center"
        to="/dashboard/hr/requests"
      >
        <FaClipboardList className="mr-2 text-xl" />
        All Requests
      </Link>
      <Link
        className="hover:text-primary flex items-center"
        to="/dashboard/hr/employees"
      >
        <FaBarsProgress className="mr-2 text-xl" />
        Employee List
      </Link>
      <Link
        className="hover:text-primary flex items-center"
        to="/dashboard/hr/upgrade"
      >
        <FaBox className="mr-2 text-xl" />
        Upgrade Package
      </Link>

      <Link
        className="hover:text-primary flex items-center"
        to="/dashboard/hr/profile"
      >
        <FaUser className="mr-2 text-xl" />
        HR Profile
      </Link>
    </>
  );

  const publicLinks = (
    <>
      <Link className="hover:text-primary flex items-center" to="/">
        <FaHome className="mr-2 text-2xl" />
        Home
      </Link>
      <Link
        className="hover:text-primary flex items-center"
        to="/register-employee"
      >
        <FaAddressCard className="mr-2 text-2xl" />
        Join as Employee
      </Link>
      <Link className="hover:text-primary flex items-center" to="/register-hr">
        <FaAddressCard className="mr-2 text-2xl" />
        Join as HR Manager
      </Link>
      <Link to="/login" className="btn btn-primary btn-sm">
        Login
      </Link>
    </>
  );

  // =================== RENDER =================== //

  return (
    <div className="fixed top-0 right-0 left-0 z-10 bg-base-100 shadow">
      <div className="navbar  px-6 md:px-12 relative container mx-auto">
        {/* LOGO */}
        <div className="flex-1">
          <Link
            to="/"
            className="text-2xl font-bold flex items-center gap-2 w-fit"
          >
            <img className="w-10 h-10" src="./logo.png" alt="" />
            AssetVerse
          </Link>
        </div>

        {/* DESKTOP LINKS */}
        <div className="hidden lg:flex gap-6 items-center">
          {!user && publicLinks}
          {user && role === "employee" && employeeLinksDesktop}
          {user && role === "hr" && hrLinksDesktop}

          {user && (
            <button onClick={logOut} className="btn btn-error btn-sm">
              Logout
            </button>
          )}
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="lg:hidden" ref={menuRef}>
          <button
            className="text-2xl cursor-pointer hover:bg-base-200 p-2 rounded"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FaBars />
          </button>

          {/* MOBILE DROPDOWN */}
          {menuOpen && (
            <div className="absolute right-4 top-16 w-60 bg-base-100 shadow-lg rounded-lg p-4 flex flex-col gap-3 z-50">
              {!user && publicLinks}

              {user && role === "employee" && employeeLinksMobile}
              {user && role === "hr" && hrLinksMobile}

              {user && (
                <button onClick={logOut} className="btn btn-error btn-sm mt-2">
                  Logout
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
