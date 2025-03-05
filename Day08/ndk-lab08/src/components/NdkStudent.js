import React, { Component } from "react";

class NdkStudent extends Component {
    // Gọi hàm xem chi tiết sinh viên
    ndkHandleView = () => {
        this.props.onNdkHandleView(this.props.renderNdkStudent);
    };

    // Gọi hàm sửa sinh viên
    ndkHandleEdit = () => {
        this.props.onNdkHandleEdit(this.props.renderNdkStudent);
    };

    // Gọi hàm xóa sinh viên
    ndkHandleDelete = () => {
        this.props.onNdkHandleDelete(this.props.renderNdkStudent.ndkId);
    };

    render() {
        // Nhận dữ liệu sinh viên từ props
        const { renderNdkStudent, index } = this.props;

        return (
            <tr>
                <td>{index + 1}</td>
                <td>{renderNdkStudent.ndkId}</td>
                <td>{renderNdkStudent.ndkStudentName}</td>
                <td>{renderNdkStudent.ndkAge}</td>
                <td>{renderNdkStudent.ndkGender}</td>
                <td>
                    <div className="template-demo">
                        <button type="button" className="btn btn-danger btn-icon-text" onClick={this.ndkHandleView}>
                            Xem
                        </button>
                        <button type="button" className="btn btn-warning btn-icon-text" onClick={this.ndkHandleEdit}>
                            Sửa
                        </button>
                        <button type="button" className="btn btn-success btn-icon-text" onClick={this.ndkHandleDelete}>
                            Xóa
                        </button>
                    </div>
                </td>
            </tr>
        );
    }
}

export default NdkStudent;
