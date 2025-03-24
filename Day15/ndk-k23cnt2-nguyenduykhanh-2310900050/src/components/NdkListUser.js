import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function NdkListUser() {
    // state
    const [ndkListUser, setNdkListUser] = useState([])
    const ndkApi = "https://67e0d0c958cc6bf78522fe6b.mockapi.io/ndk-k23cnt2-2310900050/ndk_users"

    useEffect(() => {
        axios.get(ndkApi)
            .then(ndk_response => {
                // Xử lý dữ liệu trả về từ API
                console.log(ndk_response.data); // Dữ liệu từ API
                setNdkListUser(ndk_response.data)
            })
            .catch(error => {
                // Xử lý lỗi
                console.error('Có lỗi xảy ra:', error);
            });
    }, [])



    const ndkHandleDelete = async (ndkId) => {
        if (window.confirm('Bạn có muốn xóa không?')) {
            await axios.delete(ndkApi + "/" + ndkId);

            let ndkListUserDelete = ndkListUser.filter(x => x.id != ndkId);
            setNdkListUser(ndkListUserDelete);
        }
    }
    const navigate = useNavigate();
    const ndkHandleUpdate = (ndkId) => {
        navigate(`/ndk-edit-user/${ndkId}`);
    }
    return (
        <div>
            <h2>Danh sách user</h2>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>User Id</th>
                        <th>FullName</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Active</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* // hiển thị danh sách user */}
                    {
                        ndkListUser.map((ndkUserItem, index) => {
                            return (
                                <tr>
                                    <td>{ndkUserItem.id}</td>
                                    <td>{ndkUserItem.ndk_name}</td>
                                    <td>{ndkUserItem.ndk_email}</td>
                                    <td>{ndkUserItem.ndk_phone}</td>
                                    <td>
                                        {ndkUserItem.ndk_active ?
                                            <span className='badge text-bg-success'>Hoạt động</span>
                                            : <span className='badge text-bg-danger'>Tạm khóa</span>}
                                    </td>
                                    <td>
                                        <button onClick={() => ndkHandleUpdate(ndkUserItem.id)}>Edit</button>
                                        <button onClick={(ev) => ndkHandleDelete(ndkUserItem.id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}