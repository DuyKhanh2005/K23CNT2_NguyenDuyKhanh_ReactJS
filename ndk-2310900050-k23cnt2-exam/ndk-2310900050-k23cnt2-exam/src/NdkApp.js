import React, { useState } from "react";
import NdkMemberList from "./components/NdkMemberList";
import NdkMemberAdd from "./components/NdkMemberAdd";

const initialMembers = [
  { ndk_id: "2310900050", ndk_fullname: "Nguyễn Duy Khánh", ndk_username: "ndkhanh", ndk_password: "password123" },
  { ndk_id: "2310900051", ndk_fullname: "Trần Văn Bình", ndk_username: "tranvanb", ndk_password: "password1111" },
  { ndk_id: "2310900052", ndk_fullname: "Lê Thị Cúc", ndk_username: "lethic", ndk_password: "password22222" },
];

function NdkApp() {
  const [members, setMembers] = useState(initialMembers);

  const addMember = (newMember) => {
    setMembers([...members, newMember]);
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center">Quản lý Thành viên</h1>
      <NdkMemberAdd onAddMember={addMember} />
      <NdkMemberList members={members} />
    </div>
  );
}

export default NdkApp;
