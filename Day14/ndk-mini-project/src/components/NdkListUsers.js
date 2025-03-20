import { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../api/mockapi";
import { Link } from "react-router-dom";

const NdkListUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            const data = await getUsers();
            setUsers(data);
            setLoading(false);
        };
        fetchUsers();
    }, []);

    const handleDelete = async (id) => {
        await deleteUser(id);
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    };

    return (
        <div>
            <h2>Danh sách User</h2>
            {loading ? <p>Đang tải dữ liệu...</p> : users.length === 0 ? <p>Không có dữ liệu</p> :
                <table border="1">
                    <thead>
                        <tr>
                            <th>Họ và tên</th>
                            <th>Email</th>
                            <th>Điện thoại</th>
                            <th>Hoạt động</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.ndk_name}</td>
                                <td>{user.ndk_email}</td>
                                <td>{user.ndk_phone}</td>
                                <td>{user.ndk_active ? "Hoạt động" : "Bị khóa"}</td>
                                <td>
                                    <Link to={`/edit-user/${user.id}`}>Sửa</Link>
                                    <button onClick={() => handleDelete(user.id)}>Xóa</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            }
        </div>
    );
};

export default NdkListUsers;
