import React, { Component } from 'react'

export default class NdkCompInfor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Information: "Trình bày thông tin cá nhân",
        };
    }
    render() {
        return (
            <div>
                <p>{this.state.Information}</p>
                <p>Họ Và Tên: {this.props.ndkname}</p>
                <p>Mã Sinh Viên: {this.props.ndkmsv}</p>
                <p>Ngày Sinh: {this.props.ndkngaysinh}</p>
                <p>Điện Thoại: {this.props.ndkdienthoai}</p>
                <p>Tên Lớp: {this.props.ndktenlop}</p>
            </div>

        )
    }
}
