import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const API_URL = "https://67da139035c87309f52ad943.mockapi.io/k23cnt2_nguyenduykhanh/ndk_users";

const NdkListUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get(API_URL)
            .then((response) => {
                setUsers(response.data);
            })
            .catch((error) => console.error("Lỗi khi lấy dữ liệu:", error));
    }, []);

    // Hàm xóa user
    const handleDelete = async (id) => {
        if (window.confirm("Bạn có chắc chắn muốn xóa người dùng này?")) {
            try {
                await axios.delete(`${API_URL}/${id}`);
                setUsers(users.filter(user => user.id !== id));
            } catch (error) {
                console.error("Lỗi khi xóa user:", error);
            }
        }
    };

    return (
        <div>
            <h2>Danh sách Users</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Họ và Tên</th>
                        <th>Email</th>
                        <th>Số Điện Thoại</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {users.length > 0 ? (
                        users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.ndkFullname || user.ndk_name}</td>
                                <td>{user.ndkEmail || user.ndk_email}</td>
                                <td>{user.ndkPhone || user.ndk_phone}</td>
                                <td>
                                    <Link to={`/edit-user/${user.id}`} className="edit-btn">✏️ Sửa</Link>
                                    <button onClick={() => handleDelete(user.id)} className="delete-btn">🗑️ Xóa</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5">Không có user nào!</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default NdkListUsers;
