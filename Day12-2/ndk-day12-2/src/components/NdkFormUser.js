import React, { useState } from 'react'

export default function NdkFormUser({ onNdkAddNew }) {

    const [id, setNdkId] = useState('')
    const [ndkFullName, setNdkFullName] = useState('')
    const [ndkUserName, setNdkUserName] = useState('')
    const [ndkPass, setNdkPass] = useState('')



    const ndkHandleSubmit = (event) => {
        event.preventDefault();
        console.log(id, ndkFullName, ndkUserName, ndkPass)

        onNdkAddNew({ id, ndkFullName, ndkUserName, ndkPass })
    }
    return (
        <div>
            <form>
                <p>Mã sinh viên:
                    <input type='text' name='id' value={id} onChange={(ev) => setNdkId(ev.target.value)} /> </p>
                <p>Họ và tên:
                    <input type='text' name='ndkFullName' value={ndkFullName} onChange={(ev) => setNdkFullName(ev.target.value)} /> </p>
                <p>Tài khoản:
                    <input type='text' name='ndkUserName' value={ndkUserName} onChange={(ev) => setNdkUserName(ev.target.value)} /> </p>
                <p>Mật khẩu:
                    <input type='password' name='ndkPass' value={ndkPass} onChange={(ev) => setNdkPass(ev.target.value)} /> </p>

                <p>
                    <button name='ndkSave' onClick={ndkHandleSubmit}>Save</button>
                </p>
            </form>
        </div>
    )
}