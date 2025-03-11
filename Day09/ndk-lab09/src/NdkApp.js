import React from 'react'
import NdkUseState from './components/NdkUseState'
import NdkUseStateListObject from './components/NdkUseStateListObject'
import NdkUseEffect1 from './components/NdkUseEffect1'

export default function NdkApp() {
  return (
    <div className='container border mt-3'>
      <h1>React Hook</h1>
      <NdkUseState />
      <hr />
      <NdkUseStateListObject />
      <hr />
      <NdkUseEffect1 />
    </div>
  )
}