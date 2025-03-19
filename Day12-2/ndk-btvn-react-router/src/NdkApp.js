import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import NdkNavNar from './components/NdkNavNar';
import NdkHome from './components/NdkHome';
import NdkGioiThieu from './components/NdkGioiThieu';
import NdkSanPham from './components/NdkSanPham';
import NdkTinTuc from './components/NdkTinTuc';
import NdkLienHe from './components/NdkLienHe';
import NdkThemSanPham from './components/NdkThemSanPham';  // Import NdkThemSanPham

export default function NdkApp() {
  // Danh sách sản phẩm ban đầu
  const [ndkSanPhams, setNdkSanPhams] = useState([
    { ndkId: 'SP001', ndkNameProduct: 'Xe Audi', ndkQuantity: 2, ndkPrice: 3850000000 },
    { ndkId: 'SP002', ndkNameProduct: 'Audi Q7', ndkQuantity: 1, ndkPrice: 3590000000 },
    { ndkId: 'SP003', ndkNameProduct: 'lamborghini', ndkQuantity: 0, ndkPrice: 18999200000 }
  ]);

  // Hàm thêm sản phẩm mới
  const ndkHandleAddProduct = (product) => {
    setNdkSanPhams((prev) => [...prev, product]);
  };

  return (
    <div className="container border my-5 rounded shadow-lg p-4 bg-light">
      <h1 className="text-center text-primary mb-4">
        <span className="text-warning">React Router DOM</span> - BTVN -{' '}
        <span className="text-danger">[Nguyễn Duy Khánh - K23CNT2]</span>
      </h1>
      <hr />
      <Router>
        <NdkNavNar />
        <div className="bg-secondary p-3 rounded mb-4 shadow text-white">
          <Routes>
            <Route path="/" element={<NdkHome />} />
            <Route path="/gioi-thieu" element={<NdkGioiThieu />} />
            <Route path="/san-pham" element={<NdkSanPham ndkSanPhams={ndkSanPhams} />} />
            <Route path="/them-san-pham" element={<NdkThemSanPham onAddProduct={ndkHandleAddProduct} />} />
            <Route path="/tin-tuc" element={<NdkTinTuc />} />
            <Route path="/lien-he" element={<NdkLienHe />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}