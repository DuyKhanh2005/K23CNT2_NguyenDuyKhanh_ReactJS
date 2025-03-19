import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function NdkReadMockAPI() {
    // khởi tạo state 
    const [ndkListUser, setNdkListUser] = useState([])
    // api
    const ndkApiOnline = "https://67da139035c87309f52ad943.mockapi.io/k23cnt2_nguyenduykhanh/ndk_users"
    // Đọc dữ liệu từ api bằng axios
    useEffect(() => {
        axios
            .get(ndkApiOnline)
            .then((ndk_response) => {
                setNdkListUser(ndk_response.data)
            })
            .catch((error) => {
                console.log("Lỗi phát sinh");
            })
    }, [])

    // view data
    const ndkElementUser = ndkListUser.map((ndk_item, index) => {
        return (
            <tr>
                <td>{ndk_item.ndkId}</td>
                <td>{ndk_item.ndkFullName}</td>
                <td>{ndk_item.ndkAge}</td>
                <td>{ndk_item.ndkActive ? 'Hoạt động' : 'Khóa'}</td>
                <td>
                    <button>Sửa</button>
                    <button>Xóa</button>
                </td>
            </tr>
        )
    })
    return (
        <div className='alert alert-danger'>
            <h2>Danh sách</h2>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>FullName</th>
                        <th>Age</th>
                        <th>Active</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        ndkElementUser
                    }
                </tbody>
            </table>
        </div>
    )
}