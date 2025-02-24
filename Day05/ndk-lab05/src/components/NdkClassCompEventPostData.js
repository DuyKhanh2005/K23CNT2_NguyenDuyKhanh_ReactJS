import React, { Component } from 'react'

export default class NdkClassCompEventPostData extends Component {
    constructor(props) {
        super(props);

    }
    // hàm sử lý sự kiện
    ndkHandleClick = () => {
        // Chuyển dự liêu lên app thông qua props
        this.props.onNdkDataToApp("Lesson05 Event; Dữ liệu từ conponents con  - VtdClassCompEventPostData ")
    }
    render() {
        return (
            <div className='alert alert-danger'>
                <button className='btn btn-primary'
                    onClick={this.vtdHandleClick}> Button 1 - Chuyển dữ liệu lên App</button>
            </div>
        )
    }
}