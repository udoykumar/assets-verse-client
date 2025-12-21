// import { useQuery } from "@tanstack/react-query";
// import useAuth from "./useAuth";
// import useAxiosSecure from "./useAxiosSecure";

// const useRole = () => {
//   const { user } = useAuth();
//   const axiosSecure = useAxiosSecure();

//   const { isLoading: roleLoading, data: role = "employee" } = useQuery({
//     queryKey: ["user-role", user?.email],
//     enabled: !!user?.email,
//     queryFn: async () => {
//       const res = await axiosSecure.get(`/users/${user?.email}/role`);
//       return res.data?.role ?? "employee";
//     },
//   });

//   return { role, roleLoading };
// };

// export default useRole;
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useRole = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: role, isLoading: roleLoading } = useQuery({
    queryKey: ["user-role", user?.email],
    enabled: !loading && !!user?.email, // 🔥 auth sync fix
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${user.email}/role`);
      return res.data?.role; // ❌ default remove
    },
  });

  return { role, roleLoading };
};

export default useRole;
