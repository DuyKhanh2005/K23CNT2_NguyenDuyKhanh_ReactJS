import { Routes, Route, Link } from "react-router-dom";
import NdkListUsers from "./components/NdkListUsers";
import NdkAddUser from "./components/NdkAddUser";
import NdkEditUser from "./components/NdkEditUser"; // Import chức năng sửa user
import "./App.css";

const NdkApp = () => {
  return (
    <div className="app-container">
      {/* Navbar với hiệu ứng đẹp */}
      <nav className="navbar">
        <Link to="/" className="nav-link">🏠 Trang chủ</Link>
        <Link to="/users" className="nav-link">📋 Danh sách User</Link>
        <Link to="/add-user" className="nav-link">➕ Thêm User</Link>
      </nav>

      {/* Tiêu đề chính */}
      <h1 className="app-title">🚀 Nguyễn Duy Khánh - Mini Project 🚀</h1>

      <Routes>
        <Route path="/users" element={<NdkListUsers />} />
        <Route path="/add-user" element={<NdkAddUser />} />
        <Route path="/edit-user/:id" element={<NdkEditUser />} /> {/* Route sửa user */}
      </Routes>
    </div>
  );
};

export default NdkApp;
