import React, { useState } from 'react';

export default function NdkUseStateListObject() {
    // Danh sách sinh viên ban đầu
    const listStudent = [
        { ndkId: 1, ndkName: "Nguyễn Duy Khánh", ndkAge: 20 },
        { ndkId: 2, ndkName: "Nguyễn Duy Khang", ndkAge: 22 },
        { ndkId: 3, ndkName: "Nguyễn Duy Nam", ndkAge: 25 },
        { ndkId: 4, ndkName: "Nguyễn Duy Bắc", ndkAge: 30 }
    ];

    // State quản lý danh sách sinh viên
    const [NdkStudents, setNdkStudents] = useState(listStudent);

    // Xử lý sửa thông tin sinh viên
    const handleEdit = (student) => {
        const newName = prompt('Nhập tên mới:', student.ndkName);
        const newAge = prompt('Nhập tuổi mới:', student.ndkAge);

        if (newName && newAge) {
            // Cập nhật danh sách sinh viên
            setNdkStudents(prevStudents =>
                prevStudents.map(s =>
                    s.ndkId === student.ndkId ? { ...s, ndkName: newName, ndkAge: parseInt(newAge) } : s
                )
            );
        }
    };

    // Xử lý xóa sinh viên khỏi danh sách
    const handleDelete = (studentId) => {
        if (window.confirm("Bạn có chắc chắn muốn xóa sinh viên này?")) {
            setNdkStudents(NdkStudents.filter(student => student.ndkId !== studentId));
        }
    };

    return (
        <div className="container mt-4">
            <h2 className="text-center">Danh Sách Sinh Viên</h2>
            <table className="table table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Tên</th>
                        <th>Tuổi</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {NdkStudents.map((student, index) => (
                        <tr key={index}>
                            <td>{student.ndkId}</td>
                            <td>{student.ndkName}</td>
                            <td>{student.ndkAge}</td>
                            <td>
                                <button className="btn btn-success mx-2" onClick={() => handleEdit(student)}>Sửa</button>
                                <button className="btn btn-danger mx-2" onClick={() => handleDelete(student.ndkId)}>Xóa</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
