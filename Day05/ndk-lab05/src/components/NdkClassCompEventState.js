import React, { Component } from 'react'

export default class NdkClassCompEventState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ndkFullName: "Nguyễn Duy Khánh",
            ndkAge: 20,
        }
    }

    // Hàm xử lý sự kiện
    ndkEventhandleClick1 = () => {
        // Lấy sự kiện trọng sate
        alert('FullName=' + this.state.ndkFullName + '\n Age' + this.state.ndkAge)

    }
    render() {
        return (
            <div className='alert alert-danger'>
                <button className='btn btn-primary' onClick={this.ndkEventHandleClick1}>Button 1 - Dữ liệu trong State</button>
                
            </div>
        )
    }
}
