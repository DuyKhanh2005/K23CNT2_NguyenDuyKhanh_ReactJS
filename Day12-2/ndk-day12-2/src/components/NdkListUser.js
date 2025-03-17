import React from 'react'

export default function NdkListUser({ renderNdkUsers }) {

    const ndkElements = renderNdkUsers.map((ndkItem, index) => {
        return (
            <>
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{ndkItem.id}</td>
                    <td>{ndkItem.ndkFullName}</td>
                    <td>{ndkItem.ndkUserName}</td>
                    <td>{ndkItem.ndkPass}</td>
                </tr>
            </>)
    })
    return (
        <div>
            <h2>Danh sách tài khoản</h2>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>ID</th>
                        <th>FullName</th>
                        <th>UserName</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {ndkElements}
                </tbody>
            </table>
        </div>
    )
}