import React, { Component } from "react";

class NdkForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ndkId: "",
            ndkStudentName: "",
            ndkAge: "",
            ndkGender: "Nam",
            ndkBirthday: "",
            ndkBirthPlace: "",
            ndkAddress: "",
        };
    }

    // Cập nhật state khi props thay đổi (nếu người dùng nhấn "Xem" hoặc "Sửa")
    componentDidUpdate(prevProps) {
        if (this.props.renderNdkStudent && this.props.renderNdkStudent !== prevProps.renderNdkStudent) {
            this.setState({ ...this.props.renderNdkStudent });
        }
    }

    // Xử lý thay đổi giá trị trong form
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    // Gửi dữ liệu lên App khi nhấn "Lưu"
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onNdkHandleSave(this.state);
        this.setState({
            ndkId: "",
            ndkStudentName: "",
            ndkAge: "",
            ndkGender: "Nam",
            ndkBirthday: "",
            ndkBirthPlace: "",
            ndkAddress: "",
        });
    };

    render() {
        return (
            <div className="card">
                <div className="card-header bg-primary text-white">
                    <h5>{this.state.ndkId ? "Cập nhật thông tin sinh viên" : "Thêm mới sinh viên"}</h5>
                </div>
                <div className="card-body">
                    <form onSubmit={this.handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Mã Sinh Viên</label>
                            <input
                                type="text"
                                className="form-control"
                                name="ndkId"
                                value={this.state.ndkId}
                                onChange={this.handleChange}
                                disabled={this.state.ndkId} // Không cho phép chỉnh sửa mã sinh viên
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Họ Tên</label>
                            <input
                                type="text"
                                className="form-control"
                                name="ndkStudentName"
                                value={this.state.ndkStudentName}
                                onChange={this.handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Tuổi</label>
                            <input
                                type="number"
                                className="form-control"
                                name="ndkAge"
                                value={this.state.ndkAge}
                                onChange={this.handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Giới Tính</label>
                            <select className="form-control" name="ndkGender" value={this.state.ndkGender} onChange={this.handleChange}>
                                <option value="Nam">Nam</option>
                                <option value="Nữ">Nữ</option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Ngày Sinh</label>
                            <input
                                type="date"
                                className="form-control"
                                name="ndkBirthday"
                                value={this.state.ndkBirthday}
                                onChange={this.handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Quê Quán</label>
                            <input
                                type="text"
                                className="form-control"
                                name="ndkBirthPlace"
                                value={this.state.ndkBirthPlace}
                                onChange={this.handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Địa Chỉ</label>
                            <input
                                type="text"
                                className="form-control"
                                name="ndkAddress"
                                value={this.state.ndkAddress}
                                onChange={this.handleChange}
                                required
                            />
                        </div>

                        <button type="submit" className="btn btn-success">
                            {this.state.ndkId ? "Cập nhật" : "Thêm mới"}
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default NdkForm;
