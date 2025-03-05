import React, { Component } from "react";

class NdkForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ndkId: props.renderNdkStudent?.ndkId || "",
            ndkStudentName: props.renderNdkStudent?.ndkStudentName || "",
            ndkAge: props.renderNdkStudent?.ndkAge || "",
            ndkGender: props.renderNdkStudent?.ndkGender || "Nam",
            ndkBirthday: props.renderNdkStudent?.ndkBirthday || "",
            ndkBirthPlace: props.renderNdkStudent?.ndkBirthPlace || "HN",
            ndkAddress: props.renderNdkStudent?.ndkAddress || "",
        };
    }

    // Cập nhật dữ liệu khi nhập
    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    // Xử lý khi nhấn Submit
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onNdkHandleSave(this.state);
    };

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">Thông tin sinh viên</h3>
                    <form className="form-sample" onSubmit={this.handleSubmit}>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Mã sinh viên</label>
                            <div className="col-sm-9">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="ndkId"
                                    value={this.state.ndkId}
                                    onChange={this.handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Tên sinh viên</label>
                            <div className="col-sm-9">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="ndkStudentName"
                                    value={this.state.ndkStudentName}
                                    onChange={this.handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Tuổi</label>
                            <div className="col-sm-9">
                                <input
                                    type="number"
                                    className="form-control"
                                    name="ndkAge"
                                    value={this.state.ndkAge}
                                    onChange={this.handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Giới tính</label>
                            <div className="col-sm-9">
                                <select
                                    className="form-control"
                                    name="ndkGender"
                                    value={this.state.ndkGender}
                                    onChange={this.handleChange}
                                >
                                    <option value="Nam">Nam</option>
                                    <option value="Nữ">Nữ</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Ngày sinh</label>
                            <div className="col-sm-9">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="ndkBirthday"
                                    value={this.state.ndkBirthday}
                                    onChange={this.handleChange}
                                    placeholder="dd/mm/yyyy"
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Nơi sinh</label>
                            <div className="col-sm-9">
                                <select
                                    className="form-control"
                                    name="ndkBirthPlace"
                                    value={this.state.ndkBirthPlace}
                                    onChange={this.handleChange}
                                >
                                    <option value="HN">Hà Nội</option>
                                    <option value="TpHCM">TP. Hồ Chí Minh</option>
                                    <option value="DN">Đà Nẵng</option>
                                    <option value="QN">Quảng Ninh</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Địa chỉ</label>
                            <div className="col-sm-9">
                                <textarea
                                    className="form-control"
                                    name="ndkAddress"
                                    value={this.state.ndkAddress}
                                    onChange={this.handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary me-2">
                            💾 Lưu
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default NdkForm;
