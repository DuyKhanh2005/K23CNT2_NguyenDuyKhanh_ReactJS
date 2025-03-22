import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "https://67da139035c87309f52ad943.mockapi.io/k23cnt2_nguyenduykhanh/ndk_users";

const NdkEditUser = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState({
        ndkFullname: "",
        ndkEmail: "",
        ndkPhone: "",
    });

    useEffect(() => {
        axios.get(`${API_URL}/${id}`)
            .then((response) => setUser(response.data))
            .catch((error) => console.error("Lỗi khi lấy user:", error));
    }, [id]);

    // Hàm cập nhật user
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`${API_URL}/${id}`, user);
            alert("Cập nhật thành công!");
            navigate("/users");
        } catch (error) {
            console.error("Lỗi khi cập nhật user:", error);
        }
    };

    return (
        <div>
            <h2>Chỉnh sửa User</h2>
            <form onSubmit={handleSubmit}>
                <label>Họ và Tên:</label>
                <input
                    type="text"
                    value={user.ndkFullname}
                    onChange={(e) => setUser({ ...user, ndkFullname: e.target.value })}
                    required
                />

                <label>Email:</label>
                <input
                    type="email"
                    value={user.ndkEmail}
                    onChange={(e) => setUser({ ...user, ndkEmail: e.target.value })}
                    required
                />

                <label>Số Điện Thoại:</label>
                <input
                    type="text"
                    value={user.ndkPhone}
                    onChange={(e) => setUser({ ...user, ndkPhone: e.target.value })}
                    required
                />

                <button type="submit">💾 Lưu</button>
            </form>
        </div>
    );
};

export default NdkEditUser;
