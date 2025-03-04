import React from 'react'

export default function NdkRenderList() {
    const ndkNames = ["Khánh", "Đạt", "Tuấn", "Thông"];

    // Hiển thị giá trị của mảng
    const ndkElementName = ndkNames.map((item) => {
        return <li>{item}</li>
    })
    return (
        <div>
            <h2>Danh sách các siêu anh hùng Truyền Thuyết
            </h2>
            {ndkElementName}
        </div>
    )
}