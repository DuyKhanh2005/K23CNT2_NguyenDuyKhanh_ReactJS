import { useState } from "react";
import { createUser } from "../api/mockapi";
import { useNavigate } from "react-router-dom";

const NdkAddUser = () => {
    const [ndkName, setNdkName] = useState("");
    const [ndkEmail, setNdkEmail] = useState("");
    const [ndkPhone, setNdkPhone] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newUser = { ndk_name: ndkName, ndk_email: ndkEmail, ndk_phone: ndkPhone };
        await createUser(newUser);
        navigate("/users");
    };

    return (
        <div>
            <h2>Thêm User</h2>
            <form onSubmit={handleSubmit}>
                <label>Họ và tên:</label>
                <input type="text" value={ndkName} onChange={(e) => setNdkName(e.target.value)} required />
                <br />
                <label>Email:</label>
                <input type="email" value={ndkEmail} onChange={(e) => setNdkEmail(e.target.value)} required />
                <br />
                <label>Điện thoại:</label>
                <input type="text" value={ndkPhone} onChange={(e) => setNdkPhone(e.target.value)} required />
                <br />
                <button type="submit">Thêm</button>
            </form>
        </div>
    );
};

export default NdkAddUser;
