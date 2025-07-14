import AdminFooter from "./AdminFooter";
import AdminHeader from "./AdminHeader";
import AdminNavBar from "./AdminNavBar";
import AdminSideBar from "./AdminSideBar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeItem } from "../../../helpers/persistenceStorage";
import { handleLogout } from "../../../redux/slices/auth";

const AdminLayout = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const handelUserLogout = () => {
    removeItem("token");
    dispatch(handleLogout());
    navigate("/");
  };

  return (
    <>
      <AdminHeader user={user} handelUserLogout={handelUserLogout} />
      <AdminNavBar user={user} handelUserLogout={handelUserLogout} />
      <AdminSideBar />
      <main>{children}</main>
      <AdminFooter />
    </>
  );
};

export default AdminLayout;
