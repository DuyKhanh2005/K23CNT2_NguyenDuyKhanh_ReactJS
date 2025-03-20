import { Link } from "react-router-dom";

const NdkNavBar = () => {
    return (
        <nav>
            <Link to="/">Trang chủ</Link> |
            <Link to="/list-user">Danh sách User</Link> |
            <Link to="/create-user">Thêm User</Link>
        </nav>
    );
};

export default NdkNavBar;
