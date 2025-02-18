import React, { Component } from 'react'

export default class NdkClassComp extends Component {
    constructor(props) {
        super(props);
        // Khởi tạo State
        this.state = {
            fullName: "Duy Khánh",
            age: 20,
            phone: "0345865380"
        }
    }

    // Hàm xử lý sự kiện
    changeInfo = () => {
        // Cập nhật state
        this.setState({
            fullName: "Nguyễn Duy Khánh"
        });
    }

    render() {
        const user = this.props.renderUser;

        console.log('=================================');
        console.log(user);  // Kiểm tra đối tượng user
        console.log('=================================');

        return (
            <div className='alert alert-success'>
                <h2>Trình bày dữ liệu từ state</h2>
                <p>info state (fullName): {this.state.fullName}</p>
                <p>info state (age): {this.state.age}</p>
                <p>info state (phone): {this.state.phone}</p>
                <hr />
                <h3>Lấy dữ liệu từ props</h3>
                {/* Kiểm tra dữ liệu từ props */}
                <p>FullName: {user && user.fullName ? user.fullName : 'No data'}</p>
                <p>Age: {user && user.age ? user.age : 'No data'}</p>
                <p>Phone: {user && user.phone ? user.phone : 'No data'}</p>

                <button className='btn btn-primary' onClick={this.changeInfo}>Change</button>
            </div>
        )
    }
}

