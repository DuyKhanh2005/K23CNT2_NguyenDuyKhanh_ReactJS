import React, { Component } from 'react'
import NdkEventForm1 from './components/NdkEventForm1'
import NdkEventForm2 from './components/NdkEventForm2'
import NdkEventForm3 from './components/NdkEventForm3'
import NdkEventForm4 from './components/NdkEventForm4'
import NdkEventForm5 from './components/NdkEventForm5'


export default class NdkApp extends Component {
  // Hàm xử lý dữ liệu từ form student
  ndkHandleSubmitForm = (param) => {
    console.log("Student:", param);

  }
  render() {
    return (
      <div className='container border my-3 bg-white'>
        <h1 className='text-center'>Event Form - Demo</h1>
        <hr />
        <NdkEventForm1 />
        <NdkEventForm2 />
        <NdkEventForm3 />
        <NdkEventForm4 />
        <NdkEventForm5 onNdkHandleSubmit={this.ndkHandleSubmitForm} />
      </div>
    )
  }
}