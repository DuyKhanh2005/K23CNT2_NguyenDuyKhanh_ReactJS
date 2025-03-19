import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NdkThemSanPham({ onAddProduct }) {
    const [ndkId, setNdkId] = useState('');
    const [ndkNameProduct, setNdkNameProduct] = useState('');
    const [ndkQuantity, setNdkQuantity] = useState('');
    const [ndkPrice, setNdkPrice] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const newProduct = {
            ndkId,
            ndkNameProduct,
            ndkQuantity: parseInt(ndkQuantity),
            ndkPrice: parseInt(ndkPrice),
        };

        onAddProduct(newProduct);  // Gọi hàm thêm sản phẩm
        navigate('/san-pham');     // Quay lại trang sản phẩm sau khi thêm
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Thêm Sản Phẩm Mới</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="ndkId" className="form-label">ID Sản Phẩm</label>
                    <input
                        type="text"
                        className="form-control"
                        id="ndkId"
                        value={ndkId}
                        onChange={(e) => setNdkId(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="ndkNameProduct" className="form-label">Tên Sản Phẩm</label>
                    <input
                        type="text"
                        className="form-control"
                        id="ndkNameProduct"
                        value={ndkNameProduct}
                        onChange={(e) => setNdkNameProduct(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="ndkQuantity" className="form-label">Số Lượng</label>
                    <input
                        type="number"
                        className="form-control"
                        id="ndkQuantity"
                        value={ndkQuantity}
                        onChange={(e) => setNdkQuantity(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="ndkPrice" className="form-label">Giá</label>
                    <input
                        type="number"
                        className="form-control"
                        id="ndkPrice"
                        value={ndkPrice}
                        onChange={(e) => setNdkPrice(e.target.value)}
                        required
                    />
                </div>

                <div className="text-center">
                    <button type="submit" className="btn btn-success mt-4">Thêm Sản Phẩm</button>
                </div>
            </form>
        </div>
    );
}