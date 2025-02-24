import React, { Component } from 'react';
import NdkFuncEvent1 from './components/NdkFuncCompEvent1';
import NdkClassCompEvent1 from './components/NdkClassCompEvent1';
import NdkFuncEventProps from './components/NdkFuncCompEventProps';
import NdkClassCompEventProps from './components/NdkClassCompEventProps';
import NdkClassCompEventState from './components/NdkClassCompEventState';
import NdkClassCompEventPostData from './components/NdkClassCompEventPostData';

export default class NdkApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ndkNoiDung: "Nội dung mặc định",
    };
  }

  vtdHandleDataToApp = (data) => {
    this.setState({ ndkNoiDung: data });
  };

  render() {
    return (
      <div className="container border mt-3">
        <h1 className="text-center alert alert-info my-2">
          K23CNT2 - Nguyễn Duy Khánh - Event and Form
        </h1>

        <div>
          <h2>Function Components - Event</h2>
          <NdkFuncEvent1 />
        </div>

        <hr />

        <div>
          <h2>Class Component - Event</h2>
          <NdkClassCompEvent1 />
        </div>

        <hr />

        <div>
          <h2>Function Components - Event; props</h2>
          <NdkFuncEventProps ndkRenderName="Nguyễn Duy Khánh" />
        </div>

        <hr />

        <div>
          <h2>Class Components - Event; props</h2>
          <NdkClassCompEventProps ndkRenderTitle="Welcome to Duy Khánh" />
        </div>

        <hr />

        <div>
          <h2>Class Component - State</h2>
          <NdkClassCompEventState />
        </div>

        <hr />

        <div>
          <h1>{this.state.ndkNoiDung}</h1>
          <h2>Class Component - Event; Post Data to app</h2>
          <NdkClassCompEventPostData onNdkDataToApp={this.ndkHandleDataToApp} />
        </div>
      </div>
    );
  }
}
