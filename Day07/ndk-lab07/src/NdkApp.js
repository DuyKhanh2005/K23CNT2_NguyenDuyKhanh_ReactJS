import React, { Component } from 'react';
import NdkRenderCondition from './components/NdkRenderCondition';
import NdkRenderList from './components/NdkRenderList';
import NdkRenderListStudent from './components/NdkRenderListStudent';

class NdkApp extends Component {
  render() {
    return (
      <div className='container border mt-3'>
        <h1>Nguyễn Duy Khánh - Lesson07 - Render condition - Render List Key</h1>
        <NdkRenderCondition />

        <NdkRenderList />

        <NdkRenderListStudent />
      </div>
    );
  }
}

export default NdkApp;