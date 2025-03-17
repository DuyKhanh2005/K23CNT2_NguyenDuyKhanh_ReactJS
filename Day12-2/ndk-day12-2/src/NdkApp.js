import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NdkNavNar from './components/NdkNavNar'
import NdkHome from './components/NdkHome'
import NdkAbout from './components/NdkAbout'
import NdkContact from './components/NdkContact'
import NdkListUser from './components/NdkListUser'
import NdkFormUser from './components/NdkFormUser'

export default function NdkApp() {

  const listUsers = [
    { id: "SV001", ndkFullName: "Trịnh Văn Chung", ndkUserName: "ChungChung", ndkPass: "123456a@" },
    { id: "SV002", ndkFullName: "Trịnh Quan Quang", ndkUserName: "QuanTrinh", ndkPass: "123456a@" },
    { id: "SV003", ndkFullName: "Nguyễn Quang A", ndkUserName: "QuangA", ndkPass: "123456a@" },
  ]

  const [ndkUsers, setNdkUsers] = useState(listUsers)

  // Hàm xử lý sự kiện thêm mới
  const ndkHandleAdd = (ndkParam) => {
    console.log("ndkHandleAdd:", ndkParam);
    setNdkUsers(prev => [...prev, ndkParam])
  }

  return (
    <div className='container border my-3'>
      <h1>React Router Dom - Demo - [Nguyễn Duy Khánh - K23CNT2]</h1>
      <hr />
      <Router>
        <NdkNavNar />
        <Routes>
          <Route path='/' element={<NdkHome />} />
          <Route path='/about' element={<NdkAbout />} />
          <Route path='/contact' element={<NdkContact />} />
          <Route path='/list-user' element={<NdkListUser ndkUsers={ndkUsers} />} />
          <Route path='/create-user' element={<NdkFormUser onNdkAddNew={ndkHandleAdd} />} />
        </Routes>
      </Router>
    </div>
  )
}
