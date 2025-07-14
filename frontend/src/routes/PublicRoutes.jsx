import AdminRoute from "./AdminRoute";
import Campaigns from "../pages/admin/campaigns/Campaigns";
import Contacts from "../pages/admin/contacts/Contacts";
import Conversations from "../pages/admin/conversations/Conversations";
import Dashboard from "../pages/admin/dashboard/Dashboard";
import Login from "../pages/Login";
import Page404 from "../errors/404";
import Pipeline from "../pages/admin/pipeline/Pipeline";
import Register from "../pages/Register";
import { Navigate, Route, Routes } from "react-router-dom";

const PublicRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<AdminRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/pipeline" element={<Pipeline />} />
          <Route path="/conversations" element={<Conversations />} />
          <Route path="/campaigns" element={<Campaigns />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/404" element={<Page404 />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </>
  );
};

export default PublicRoutes;
