import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function NdkCreateUser() {
    const ndkUser = {
        id: 0,
        'ndk_name': '',
        'ndk_email': '',
        'ndk_phone': '',
        'ndk_active': true
    }

    const [ndk_user, setNdk_User] = useState(ndkUser);
    const ndkApi = "https://67e0d0c958cc6bf78522fe6b.mockapi.io/ndk-k23cnt2-2310900050/ndk_users"
    const navigate = useNavigate();

    const ndkHandlSubmit = (ev) => {
        ev.preventDefault();
        console.log(ndk_user);
        axios
            .post(ndkApi, ndk_user)
            .then(() => {
                navigate('/ndk-list-user')
            })
            .catch((error) => console.log('Lỗi khi thêm user.'));

    }
    return (
        <div>
            <h2>Thêm mới user</h2>
            <form>
                <div className="mb-3 row">
                    <label htmlFor="ndk_name" className="col-sm-2 col-form-label">FullName</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="ndk_name"
                            name="ndk_name"
                            value={ndk_user.ndk_name}
                            onChange={(ev) => setNdk_User({ ...ndk_user, ndk_name: ev.target.value })}
                        />
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="ndk_email" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="ndk_email"
                            name="ndk_email"
                            value={ndk_user.ndk_email}
                            onChange={(ev) => setNdk_User({ ...ndk_user, ndk_email: ev.target.value })}

                        />
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="ndk_phone" className="col-sm-2 col-form-label">Phone</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="ndk_phone"
                            name="ndk_phone"
                            value={ndk_user.ndk_phone}
                            onChange={(ev) => setNdk_User({ ...ndk_user, ndk_phone: ev.target.value })}
                        />
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="ndk_active" className="col-sm-2 col-form-label">Active</label>
                    <div className="col-sm-10">
                        <input type="radio" id="ndk_active_true" className="mx-3"
                            onChange={(ev) => setNdk_User({ ...ndk_user, ndk_active: ev.target.value })}
                            value={true}
                            name="ndk_active" />
                        <label htmlFor="ndk_active_true">Hoạt động</label>
                        <input type="radio" id="ndk_active_false" className="mx-3"
                            onChange={(ev) => setNdk_User({ ...ndk_user, ndk_active: ev.target.value })}
                            value={false}
                            name="ndk_active" />
                        <label htmlFor="ndk_active_false">Tạm khóa</label>
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="" className="col-sm-2 col-form-label"></label>
                    <div className="col-sm-10">
                        <button className="btn btn-primary mx-2 px-3" name="btnNdkCreate"
                            onClick={ndkHandlSubmit}
                        >Create</button>
                        <button className="btn btn-secondary mx-2 px-3" name="btnNdkBack">Back</button>
                    </div>
                </div>
            </form>
        </div>
    );
}