import { useState } from "react";
import axios from "axios";

const API_URL = "https://67da139035c87309f52ad943.mockapi.io/k23cnt2_nguyenduykhanh/ndk_users";

const NdkAddUser = ({ onUserAdded }) => {
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = { ndkFullname: fullname, ndkEmail: email, ndkPhone: phone };

        axios.post(API_URL, newUser)
            .then(() => {
                onUserAdded();
                setFullname("");
                setEmail("");
                setPhone("");
            })
            .catch((error) => console.error("Lỗi khi thêm user:", error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Thêm User</h2>
            <label>Họ và Tên:</label>
            <input type="text" value={fullname} onChange={(e) => setFullname(e.target.value)} required />

            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

            <label>Số Điện Thoại:</label>
            <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required />

            <button type="submit" className="add-btn">Thêm</button>
        </form>
    );
};

export default NdkAddUser;
