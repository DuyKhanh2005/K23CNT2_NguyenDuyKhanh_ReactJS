import React from 'react'
import NdkReadApiLocal from './components/NdkReadApiLocal'
import NdkReadMockAPI from './components/NdkReadMockAPI'
import NdkCreateMockAPI from './components/NdkCreateMockAPI'

export default function NdkApp() {
  return (
    <div className='container border my-3 p-3'>
      <h1> ReactJS - API - Nguyễn Duy Khánh </h1>
      <hr />
      <NdkReadApiLocal />
      <hr />
      <h2>Đọc dữ liệu từ MockAPi (mockapi.io)</h2>
      <NdkReadMockAPI />

      <NdkCreateMockAPI />
    </div>
  )
}