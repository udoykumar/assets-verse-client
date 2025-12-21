// import useRole from "../hooks/useRole";
// import Loading from "../pages/Shared/Loading";
// import EmployeeDashboard from "../pages/Dashboard/Employee/EmployeeDashboard/EmployeeDashboard";
// import HRDashboard from "../pages/Dashboard/HR/HRDashboard/HRDashboard";

// export default function RoleBasedDashboard() {
//   const { role, roleLoading } = useRole();

//   if (roleLoading) return <Loading />;

//   if (role === "hr") return <HRDashboard />;
//   return <EmployeeDashboard />;
// }

import useRole from "../hooks/useRole";
import useAuth from "../hooks/useAuth";
import Loading from "../pages/Shared/Loading";
import EmployeeDashboard from "../pages/Dashboard/Employee/EmployeeDashboard/EmployeeDashboard";
import HRDashboard from "../pages/Dashboard/HR/HRDashboard/HRDashboard";

export default function RoleBasedDashboard() {
  const { user, loading } = useAuth();
  const { role, roleLoading } = useRole();

  if (loading || roleLoading) {
    return <Loading />;
  }

  if (!user) {
    return null; // or <Navigate to="/login" />
  }

  if (role === "hr") {
    return <HRDashboard />;
  }

  if (role === "employee") {
    return <EmployeeDashboard />;
  }

  // fallback safety
  return null;
}
