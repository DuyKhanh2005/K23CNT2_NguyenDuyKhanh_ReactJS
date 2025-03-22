import { NavLink } from "react-router-dom";
import "../App.css";

const NdkNavBar = () => {
    return (
        <nav className="navbar">
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
                🏠 Trang chủ
            </NavLink>
            <NavLink to="/list-user" className={({ isActive }) => (isActive ? "active" : "")}>
                📋 Danh sách User
            </NavLink>
            <NavLink to="/create-user" className={({ isActive }) => (isActive ? "active" : "")}>
                ➕ Thêm User
            </NavLink>
        </nav>
    );
};

export default NdkNavBar;
