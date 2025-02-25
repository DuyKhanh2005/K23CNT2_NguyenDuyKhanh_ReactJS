import React, { Component } from 'react'

export default class NdkEventForm2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ndkCourse: 'CSS3'
        }
    }
    ndkHandleChage = (event) => {
        this.setState({
            ndkCourse: event.target.value
        })
    }
    ndkHandleSubmit = (ev) => {
        alert('Khóa Học Đã Chọn Khi Submit:' + this.state.ndkCourse)
        ev.preventDefault()
    }
    render() {
        return (
            <div className='alert alert-danger'>
                <h2>Form Select</h2>
                <form onSubmit={this.ndkHandleSubmit}>
                    <label>
                        Chọn khóa học:
                        <select name='ndkCourse' id='ndkCourse'
                            value={this.state.ndkCourse} onChange={this.ndkHandleChage}>
                            <option value={"HTML3"}>HTML3</option>
                            <option value="CSS3">CSS3</option>
                            <option value="JS">JavaScript</option>
                            <option value="reactjs">ReactJS</option>
                            <option value="BOOTRAP5">BOOTRAP5</option>
                        </select>
                    </label>
                    <button className='btn btn-primary'>Click Here</button>
                </form>
            </div>
        )
    }
}