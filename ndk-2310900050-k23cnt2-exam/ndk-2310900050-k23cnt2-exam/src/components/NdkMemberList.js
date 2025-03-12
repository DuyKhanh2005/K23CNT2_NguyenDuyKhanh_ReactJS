import React, { useState } from "react";

const NdkMemberList = () => {
    const [members, setMembers] = useState([
        { id: 1, name: "Nguyễn Văn A", age: 20 },
        { id: 2, name: "Trần Thị B", age: 21 },
        { id: 3, name: "Lê Văn C", age: 22 },
    ]);

    const [editingMember, setEditingMember] = useState(null);
    const [editName, setEditName] = useState("");
    const [editAge, setEditAge] = useState("");

    // Xử lý thêm sinh viên mới
    const addMember = (name, age) => {
        if (!name.trim() || !age.trim()) return; // Chặn nhập trống
        const newMember = {
            id: Date.now(), // Tạo ID duy nhất
            name,
            age: parseInt(age),
        };
        setMembers([...members, newMember]);
    };

    // Xử lý chỉnh sửa sinh viên
    const editMember = (member) => {
        setEditingMember(member.id);
        setEditName(member.name);
        setEditAge(member.age);
    };

    const saveEdit = () => {
        if (!editName.trim() || !editAge.trim()) return; // Chặn lưu trống
        setMembers(
            members.map((member) =>
                member.id === editingMember ? { ...member, name: editName, age: editAge } : member
            )
        );
        setEditingMember(null);
    };

    // Xử lý xóa sinh viên
    const deleteMember = (id) => {
        if (window.confirm("Bạn có chắc chắn muốn xóa sinh viên này không?")) {
            setMembers(members.filter((member) => member.id !== id));
        }
    };

    return (
        <div className="container">
            <h1>Danh Sách Sinh Viên</h1>
            <NdkMemberAdd addMember={addMember} />
            <ul className="list-group">
                {members.map((member) => (
                    <li key={member.id} className="list-group-item">
                        {editingMember === member.id ? (
                            <>
                                <input value={editName} onChange={(e) => setEditName(e.target.value)} />
                                <input value={editAge} onChange={(e) => setEditAge(e.target.value)} type="number" />
                                <button className="save-btn" onClick={saveEdit}>Lưu</button>
                            </>
                        ) : (
                            <>
                                <span>{member.name} - {member.age} tuổi</span>
                                <div>
                                    <button className="edit-btn" onClick={() => editMember(member)}>Sửa</button>
                                    <button className="delete-btn" onClick={() => deleteMember(member.id)}>Xóa</button>
                                </div>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

// Component thêm sinh viên
const NdkMemberAdd = ({ addMember }) => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    const handleAdd = () => {
        addMember(name, age);
        setName("");
        setAge("");
    };

    return (
        <div className="form-group">
            <input
                type="text"
                placeholder="Nhập tên sinh viên"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="number"
                placeholder="Nhập tuổi"
                value={age}
                onChange={(e) => setAge(e.target.value)}
            />
            <button className="add-btn" onClick={handleAdd}>Thêm</button>
        </div>
    );
};

export default NdkMemberList;
