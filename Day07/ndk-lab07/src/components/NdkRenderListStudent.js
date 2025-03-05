import React, { Component } from 'react';

class NdkRenderListStudent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ndkStudents: [
                { tcvId: "NTU001", ndkName: "Trịnh Văn Chung", ndkAge: 46, ndkClass: "K23CNT2" },
                { tcvId: "NTU002", ndkName: "Nguyễn Quang A", ndkAge: 22, ndkClass: "K23CNT2" },
                { tcvId: "NTU003", ndkName: "Nguyễn Quang B", ndkAge: 21, ndkClass: "K23CNT2" },
                { tcvId: "NTU004", ndkName: "Nguyễn Quang C", ndkAge: 23, ndkClass: "K23CNT2" },
            ],
        }
    }
    render() {
        let ndkElement = this.state.ndkStudents.map((ndkItem, index) => {
            return (
                <tr>
                    <td>{index + 1}</td>
                    <td>{ndkItem.tcvId}</td>
                    <td>{ndkItem.ndkName}</td>
                    <td>{ndkItem.ndkAge}</td>
                    <td>{ndkItem.ndkClass}</td>
                    <td>
                        <button>Sửa</button>
                        <button>Xóa</button>
                    </td>
                </tr>
            )
        })
        return (
            <div className='alert alert-info'>
                <h2>Danh sách sinh viên</h2>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>ndkId</th>
                            <th>ndkName</th>
                            <th>ndkAge</th>
                            <th>ndkClass</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ndkElement}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default NdkRenderListStudent;