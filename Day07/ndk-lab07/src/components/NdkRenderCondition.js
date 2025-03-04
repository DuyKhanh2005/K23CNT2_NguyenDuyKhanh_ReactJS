import React, { Component } from 'react';
import NdkLoginControl from './NdkLoginControl';

class NdkRenderCondition extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
        }
    }
    // Hàm xử lý sự kiện login
    ndkHandleLogin = (ev) => {
        ev.preventDefault();
        this.setState({
            isLoggedIn: true
        })
    }
    // Hàm xử lý sự kiện logout
    ndkHandleLogout = (event) => {
        event.preventDefault();
        this.setState({
            isLoggedIn: false
        })
    }
    render() {
        return (
            <div className='alert alert-danger'>
                <NdkLoginControl isLoggedIn={this.state.isLoggedIn} />

                {
                    this.state.isLoggedIn ?
                        <button className='btn btn-danger' onClick={this.ndkHandleLogout} >Logout</button>
                        : <button className='btn btn-primary' onClick={this.ndkHandleLogin}>Login</button>
                }
            </div>
        );
    }
}

export default NdkRenderCondition;