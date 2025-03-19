import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function NdkReadApiLocal() {
    // khởi tạo state
    const [ndkListUser, setNdkListUser] = useState([])
    // đọc dữ liệu từ api local  và set cho ndkListUser
    const apiUrl = "http://localhost:3001/users"
    // Lấy danh sách từ apiUrl
    useEffect(() => {
        axios
            .get(apiUrl)
            .then((ndkResponse) => {
                setNdkListUser(ndkResponse.data)
            })
            .catch((error) => {
                console.log("Lỗi");
            })
    }, [])

    return (
        <div>
            <h2>Đọc dữ liệu từ API Local</h2>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>FullName</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        ndkListUser.map((ndkItem, index) => {
                            return (
                                <tr>
                                    <td>{ndkItem.fullName}</td>
                                    <td>{ndkItem.age}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}