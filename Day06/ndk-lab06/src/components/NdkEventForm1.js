import React, { Component } from 'react'

export default class NdkEventForm1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ndkStudentName: "Duy Khánh"
        }
    }
    // Hàm sử lý sự kiện khi dữ liệu trên textbox ndkStudentName thay đổi
    ndkHandleChage = (event) => {
        // cập nhập setstate
        this.setState({
            ndkStudentName: event.target.value
        })
    }
    // khi submit dỏm, lấy dữ liệu và hiển thị
    ndkHandleSubmit = (ev) => {
        alert('Hello:' + ' ' + this.state.ndkStudentName)
        ev.preventDefault()
    }
    render() {
        return (
            <div className='alert alert-info'>
                <h2>Form input</h2>
                <form onSubmit={this.ndkHandleSubmit}>
                    <label htmlFor='ndkStudentName'>
                        <input type='text' name='ndkStudentName' id='ndkStudentName' value={this.state.ndkStudentName}
                            onChange={this.ndkHandleChage} />
                    </label>
                    <button className='btn btn-primary'>Click Here</button>
                </form>
            </div>
        )
    }
}