import React, { Component } from 'react';
import NdkLoginComp from './NdkLoginComp';
import NdkLogoutComp from './NdkLogoutComp';

class NdkLoginControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    }
  }
  // Hàm xử lý sự kiện login
  ndkHandleLogin = (event) => {
    event.preventDefault();
    this.setState({
      isLoggedIn: true,
    })
  }
  render() {
    let { isLoggedIn } = this.state
    let ndkElement = isLoggedIn ? <NdkLoginComp /> : <NdkLogoutComp />
    return (
      <div className='alert alert-danger'>
        {ndkElement}
        {
          isLoggedIn ?
            <button onClick={() => this.setState({ isLoggedIn: false })}>Logout</button>
            : <button onClick={this.ndkHandleLogin}>Login</button>
        }
      </div>
    );
  }
}

export default NdkLoginControl;