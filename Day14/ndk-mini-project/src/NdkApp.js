import { Routes, Route, Link } from "react-router-dom";
import NdkListUsers from "./components/NdkListUsers";
import NdkAddUser from "./components/NdkAddUser";

const NdkApp = () => {
  return (
    <div>
      <nav>
        <Link to="/">Trang chủ</Link> | <Link to="/users">Danh sách User</Link> | <Link to="/add-user">Thêm User</Link>
      </nav>
      <h1>Nguyễn Duy Khánh - Mini Project</h1>

      <Routes>
        <Route path="/users" element={<NdkListUsers />} />
        <Route path="/add-user" element={<NdkAddUser />} />
      </Routes>
    </div>
  );
};

export default NdkApp;
