import { useState, useEffect } from "react";
import { getUserById, updateUser } from "../api/mockapi";
import { useNavigate, useParams } from "react-router-dom";

const NdkEditUser = () => {
    const [user, setUser] = useState({ ndk_name: "", ndk_email: "", ndk_phone: "", ndk_active: false });
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        getUserById(id).then((response) => setUser(response.data));
    }, [id]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setUser({ ...user, [name]: type === "checkbox" ? checked : value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateUser(id, user).then(() => navigate("/list-user"));
    };

    return (
        <div>
            <h2>Sửa thông tin User</h2>
            <form onSubmit={handleSubmit}>
                <input name="ndk_name" value={user.ndk_name} onChange={handleChange} required />
                <input name="ndk_email" type="email" value={user.ndk_email} onChange={handleChange} required />
                <input name="ndk_phone" value={user.ndk_phone} onChange={handleChange} required />
                <label>
                    <input type="checkbox" name="ndk_active" checked={user.ndk_active} onChange={handleChange} />
                    Hoạt động
                </label>
                <button type="submit">Cập nhật</button>
            </form>
        </div>
    );
};

export default NdkEditUser;
