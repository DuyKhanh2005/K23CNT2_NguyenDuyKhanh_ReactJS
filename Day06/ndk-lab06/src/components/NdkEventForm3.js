import React, { Component } from 'react'

export default class NdkEventForm3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ndkGioiTinh: "Nam"
        }
    }
    ndkHanleChange = (event) => {
        this.setState({
            ndkGioiTinh: event.target.value
        })
    }

    // Hmaf xử lý sự kiện submit form
    ndkHandleSubmit = (event) => {
        event.preventDefault()
        alert('Giới tính của bạn là:' + this.state.ndkGioiTinh)
    }
    render() {
        return (
            <div className='alert alert-success'>
                <h2>Form Input - Radio</h2>
                <form>
                    <div>
                        <label htmlFor=''>Giới tính:</label>
                        <input type='radio' name='ndkGioiTinh' id='ndkNam' className='mx-2'
                            value="Nam" checked={this.state.ndkGioiTinh === 'Nam'} onChange={this.ndkHanleChange} />
                        <label htmlFor='ndkNam'>Nam</label>
                        <input type='radio' name='ndkGioiTinh' id='ndkNu' className='mx-2'
                            value="Nữ" checked={this.state.ndkGioiTinh === 'Nữ'} onChange={this.ndkHanleChange} />
                        <label htmlFor='ndkNu'>Nữ</label>
                        <input type='radio' name='ndkGioiTinh' id='ndkKhac' className='mx-2'
                            value="Khác" checked={this.state.ndkGioiTinh === 'Khác'} onChange={this.ndkHanleChange} />
                        <label htmlFor='ndkKhac'>Khác</label>

                    </div>
                    <button onClick={this.ndkHandleSubmit} className='btn btn-success mt-3'> SubMit </button>
                </form>
            </div>
        )
    }
}