import React from 'react'
import { BrowserRouter as NdkRouter, Route, Routes } from 'react-router-dom'
import NdkNavBar from './components/NdkNavBar'
import NdkHome from './components/NdkHome'
import NdkEditUser from './components/NdkEditUser'
import NdkCreateUser from './components/NdkCreateUser'
import NdkListUser from './components/NdkListUser'


export default function NdkApp() {
  return (
    <div className='container border my-3 p-3'>
      <h1 className='alert alert-danger text-center'>K23CNT1 - Nguyễn Duy Khánh - 2310900050</h1>
      <hr />
      <NdkRouter>
        <NdkNavBar /> {/* Nằm trong Router */}
        <hr />
        <Routes>
          <Route path='/' element={<NdkHome />} />
          <Route path='/ndk-list-user' element={<NdkListUser />} />
          <Route path='/ndk-create-user' element={<NdkCreateUser />} />
          <Route path='/ndk-edit-user/:id' element={<NdkEditUser />} />
        </Routes>
      </NdkRouter>
    </div>
  )
}
