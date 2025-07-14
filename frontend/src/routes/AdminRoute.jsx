import AdminLayout from "../pages/admin/layouts/AdminLayout";
import { Navigate, Outlet } from "react-router-dom";
import { getItem } from "../helpers/persistenceStorage";

export default function AdminRoute() {
  const isLoggedIn = getItem("token");

  console.log('"From AdminRoutes Private Routes" token', isLoggedIn);
  return (
    <>
      {!!isLoggedIn ? (
        <AdminLayout>
          <Outlet />
        </AdminLayout>
      ) : (
        <Navigate to="/login" replace />
      )}
    </>
  );
}
