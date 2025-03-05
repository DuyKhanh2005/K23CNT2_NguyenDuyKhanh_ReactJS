import React from "react";

const NdkStudentList = ({ renderNdkStudents, onNdkHandleView, onNdkHandleDelete }) => {
    // Xác nhận trước khi xóa sinh viên
    const handleDelete = (ndkId) => {
        if (window.confirm("Bạn có chắc muốn xóa sinh viên này không?")) {
            onNdkHandleDelete(ndkId);
        }
    };

    return (
        <div className="table-responsive">
            <table className="table table-bordered table-hover">
                <thead className="table-dark text-center">
                    <tr>
                        <th>#</th>
                        <th>Mã SV</th>
                        <th>Họ Tên</th>
                        <th>Tuổi</th>
                        <th>Giới Tính</th>
                        <th>Ngày Sinh</th>
                        <th>Quê Quán</th>
                        <th>Hành Động</th>
                    </tr>
                </thead>
                <tbody>
                    {renderNdkStudents.length > 0 ? (
                        renderNdkStudents.map((student, index) => (
                            <tr key={student.ndkId}>
                                <td className="text-center">{index + 1}</td>
                                <td className="text-center">{student.ndkId}</td>
                                <td>{student.ndkStudentName}</td>
                                <td className="text-center">{student.ndkAge}</td>
                                <td className="text-center">{student.ndkGender}</td>
                                <td className="text-center">{student.ndkBirthday}</td>
                                <td>{student.ndkBirthPlace}</td>
                                <td className="text-center">
                                    <button className="btn btn-info btn-sm me-2" onClick={() => onNdkHandleView(student)}>
                                        👁️ Xem
                                    </button>
                                    <button className="btn btn-warning btn-sm me-2" onClick={() => onNdkHandleView(student)}>
                                        ✏ Sửa
                                    </button>
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => handleDelete(student.ndkId)}
                                    >
                                        ❌ Xóa
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="8" className="text-center text-muted">
                                Không có sinh viên nào!
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default NdkStudentList;
