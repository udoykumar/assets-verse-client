import { Link } from "react-router";
import useAuth from "../../hooks/useAuth";
import useRole from "../../hooks/useRole";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
export default function Footer() {
  const { user } = useAuth();
  const { role } = useRole();

  const publicLinks = (
    <>
      <li>
        <Link to="/" className="hover:text-primary">
          Home
        </Link>
      </li>
      <li>
        <Link to="/login" className="hover:text-primary">
          Login
        </Link>
      </li>
      <li>
        <Link to="/register-employee" className="hover:text-primary">
          Join as Employee
        </Link>
      </li>
      <li>
        <Link to="/register-hr" className="hover:text-primary">
          Join as HR Manager
        </Link>
      </li>
    </>
  );

  const employeeLinks = (
    <>
      <li>
        <Link to="/dashboard" className="hover:text-primary">
          Dashboard
        </Link>
      </li>
      <li>
        <Link to="/dashboard/employee/my-assets" className="hover:text-primary">
          My Assets
        </Link>
      </li>
      <li>
        <Link
          to="/dashboard/employee/request-asset"
          className="hover:text-primary"
        >
          Request Asset
        </Link>
      </li>
      <li>
        <Link to="/dashboard/employee/my-team" className="hover:text-primary">
          My Team
        </Link>
      </li>
    </>
  );

  const hrLinks = (
    <>
      <li>
        <Link to="/dashboard" className="hover:text-primary">
          Dashboard
        </Link>
      </li>
      <li>
        <Link to="/dashboard/hr/assets" className="hover:text-primary">
          Asset List
        </Link>
      </li>
      <li>
        <Link to="/dashboard/hr/add-asset" className="hover:text-primary">
          Add Asset
        </Link>
      </li>
      <li>
        <Link to="/dashboard/hr/requests" className="hover:text-primary">
          All Requests
        </Link>
      </li>
      <li>
        <Link to="dashboard/hr/upgrade" className="hover:text-primary">
          Upgrade Package
        </Link>
      </li>
    </>
  );

  return (
    <footer className="relative overflow-hidden bg-black text-white">
      {/* Gradient Overlays (NO CLICK BLOCK) */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-[#0b1d2d]/70 to-black/40 pointer-events-none"></div>

      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px]
    bg-gradient-to-r from-blue-500/20 to-cyan-400/10 rounded-full blur-3xl pointer-events-none"
      ></div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h2 className="text-xl font-bold mb-3">AssetVerse</h2>
            <p className="text-sm leading-relaxed">
              A smart and secure asset management platform helping businesses
              track, assign, and manage assets efficiently.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {!user && publicLinks}
              {user && role === "employee" && employeeLinks}
              {user && role === "hr" && hrLinks}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>Email: support@assetverse.com</li>
              <li>Phone: +1 234 567 890</li>
              <li>Address: New York, USA</li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Follow Us</h3>
            <div className="flex items-center space-x-2">
              <a className="text-2xl bg-[#0a86f2] rounded-full p-2 hover:scale-110 transition">
                <FaFacebookF />
              </a>
              <a className="text-2xl bg-[#fa3f88] rounded-full p-2 hover:scale-110 transition">
                <FaInstagram />
              </a>
              <a className="text-2xl bg-[#0c67c2] rounded-full p-2 hover:scale-110 transition">
                <FaLinkedin />
              </a>
              <a className="text-2xl bg-[#190131] rounded-full p-2 hover:scale-110 transition">
                <FaXTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center mt-10 pt-6 border-t text-sm">
          © {new Date().getFullYear()} AssetVerse — All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
