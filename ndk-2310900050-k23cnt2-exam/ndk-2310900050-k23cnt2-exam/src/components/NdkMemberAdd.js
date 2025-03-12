import React, { useState } from "react";

function NdkMemberAdd({ onAddMember }) {
  const [ndk_id, setId] = useState("");
  const [ndk_fullname, setFullname] = useState("");
  const [ndk_username, setUsername] = useState("");
  const [ndk_password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!ndk_id || !ndk_fullname || !ndk_username || !ndk_password) {
      alert("Vui lòng nhập đầy đủ thông tin");
      return;
    }
    onAddMember({ ndk_id, ndk_fullname, ndk_username, ndk_password });
    setId("");
    setFullname("");
    setUsername("");
    setPassword("");
  };

  return (
    <div className="mt-3">
      <h2>Thêm Thành Viên</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label>ID</label>
          <input type="text" className="form-control" value={ndk_id} onChange={(e) => setId(e.target.value)} />
        </div>
        <div className="mb-2">
          <label>Họ và tên</label>
          <input type="text" className="form-control" value={ndk_fullname} onChange={(e) => setFullname(e.target.value)} />
        </div>
        <div className="mb-2">
          <label>Username</label>
          <input type="text" className="form-control" value={ndk_username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="mb-2">
          <label>Password</label>
          <input type="password" className="form-control" value={ndk_password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Thêm</button>
      </form>
    </div>
  );
}

export default NdkMemberAdd;
