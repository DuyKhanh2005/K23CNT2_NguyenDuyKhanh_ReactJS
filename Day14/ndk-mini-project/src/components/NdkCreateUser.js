import { useState } from "react";
import { createUser } from "../api/mockapi";
import { useNavigate } from "react-router-dom";
import "../App.css"; // Import CSS để làm đẹp

const NdkCreateUser = () => {
    const [user, setUser] = useState({
        ndk_name: "",
        ndk_email: "",
        ndk_phone: "",
        ndk_active: false
    });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setUser({ ...user, [name]: type === "checkbox" ? checked : value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        // Kiểm tra dữ liệu đầu vào
        if (!user.ndk_name.trim()) {
            setError("Họ và tên không được để trống.");
            return;
        }
        if (!/^\S+@\S+\.\S+$/.test(user.ndk_email)) {
            setError("Email không hợp lệ.");
            return;
        }
        if (!/^\d{10}$/.test(user.ndk_phone)) {
            setError("Số điện thoại phải có đúng 10 chữ số.");
            return;
        }

        setLoading(true);
        try {
            await createUser(user);
            navigate("/list-user"); // Điều hướng về danh sách user sau khi thêm thành công
        } catch (error) {
            setError("Lỗi khi thêm user, vui lòng thử lại.");
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="form-container">
            <h2>Thêm mới User</h2>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    name="ndk_name"
                    placeholder="Họ và tên"
                    onChange={handleChange}
                    required
                />

                <input
                    name="ndk_email"
                    type="email"
                    placeholder="Email"
                    onChange={handleChange}
                    required
                />

                <input
                    name="ndk_phone"
                    placeholder="Điện thoại"
                    onChange={handleChange}
                    required
                />

                <label className="checkbox-container">
                    <input type="checkbox" name="ndk_active" onChange={handleChange} />
                    Hoạt động
                </label>

                <button type="submit" disabled={loading}>
                    {loading ? "Đang tạo..." : "Tạo mới"}
                </button>
            </form>
        </div>
    );
};

export default NdkCreateUser;
