// Thêm mới dữ liệu 

import React, { useState } from 'react'
import axios from 'axios'
export default function NdkCreateMockAPI() {
    // khởi tạo state
    const [ndkFullName, setNdkFullName] = useState('')
    const [ndkAge, setNdkAge] = useState(0)
    const [ndkActive, setNdkActive] = useState(true)

    // api post
    const ndkCreateUserApi = "https://67d8d4aa00348dd3e2a85ce1.mockapi.io/k23cnt1_trinhvanchung/ndk_users";

    // khi submit form
    const ndkHandleSubmit = (event) => {
        event.preventDefault();
        console.log("ndkActive:", ndkActive);
        let ndkNewUser = { ndkFullName, ndkAge, ndkActive };
        console.log(ndkNewUser);

        // ghi dữ liệu vào api
        axios
            .post(ndkCreateUserApi, ndkNewUser)
            .then((ndk_response) => {

            })

    }
    return (
        <div className='alert alert-info'>
            <h2>Thêm mới users</h2>
            <hr />
            <form>
                <div className=' mb-1'>
                    <label for="ndkFullName">Full Name</label>
                    <input type='text' name='ndkFullName' id="ndkFullName"
                        value={ndkFullName}
                        onChange={(ev) => setNdkFullName(ev.target.value)} />
                </div>
                <div className=' mb-1'>
                    <label for="ndkAge">Age</label>
                    <input type='number' name='ndkAge' id="ndkAge"
                        value={ndkAge}
                        onChange={(ev) => setNdkAge(ev.target.value)} />
                </div>
                <div className=' mb-1'>
                    <label for="ndkActive">Active</label>
                    <input type='radio' name='ndkActive' id="ndkActive_hd" value={'true'}
                        onChange={(ev) => setNdkActive(ev.target.value)} />
                    <label for="ndkActive_hd"> Hoạt động</label>
                    <input type='radio' name='ndkActive' id="ndkActive_kh" value={'false'}
                        onChange={(ev) => setNdkActive(ev.target.value)} />
                    <label for="ndkActive_kh"> Khóa</label>
                </div>
                <button onClick={ndkHandleSubmit}>Create</button>
            </form>
        </div>
    )
}