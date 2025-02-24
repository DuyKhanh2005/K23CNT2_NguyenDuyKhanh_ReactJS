import React, { Component } from 'react'

export default class NdkClassCompEventProps extends Component {

  //hàm xử lí sự kiện
  ndkEventHandleClick1 = () => {
    alert("Hello...." + this.props.ndkRenderTitle );
  }
  render() {
    return (
      <div className='alert alert-danger'>
        <button className='btn btn-primary' onClick={this.ndkEventHandleClick1}> Button 1</button>
      </div>
    )
  }
}
