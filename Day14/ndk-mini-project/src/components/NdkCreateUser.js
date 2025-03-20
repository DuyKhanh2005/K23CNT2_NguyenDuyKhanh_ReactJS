import { useState } from "react";
import { createUser } from "../api/mockapi";
import { useNavigate } from "react-router-dom";

const NdkCreateUser = () => {
    const [user, setUser] = useState({ ndk_name: "", ndk_email: "", ndk_phone: "", ndk_active: false });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setUser({ ...user, [name]: type === "checkbox" ? checked : value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createUser(user).then(() => navigate("/list-user"));
    };

    return (
        <div>
            <h2>Thêm mới User</h2>
            <form onSubmit={handleSubmit}>
                <input name="ndk_name" placeholder="Họ và tên" onChange={handleChange} required />
                <input name="ndk_email" type="email" placeholder="Email" onChange={handleChange} required />
                <input name="ndk_phone" placeholder="Điện thoại" onChange={handleChange} required />
                <label>
                    <input type="checkbox" name="ndk_active" onChange={handleChange} />
                    Hoạt động
                </label>
                <button type="submit">Tạo mới</button>
            </form>
        </div>
    );
};

export default NdkCreateUser;
