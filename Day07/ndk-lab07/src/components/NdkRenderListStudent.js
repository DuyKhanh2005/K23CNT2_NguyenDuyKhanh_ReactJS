import React, { Component } from 'react';

class NdkRenderListStudent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ndkStudents: [
                { tcvId: "SV001", ndkName: "Nguyễn Duy Khánh", ndkAge: 45, ndkClass: "K23CNT2" },
                { tcvId: "SV002", ndkName: "Nguyễn Quang A", ndkAge: 22, ndkClass: "K23CNT2" },
                { tcvId: "SV003", ndkName: "Nguyễn Quang B", ndkAge: 21, ndkClass: "K23CNT2" },
                { tcvId: "SV004", ndkName: "Nguyễn Quang C", ndkAge: 23, ndkClass: "K23CNT2" },
            ],
        }
    }

    render() {
        // render data
        const ndkElement = this.state.ndkStudents.map((ndkItem, index) => {
            return (
                <tr>
                    <td>{index + 1}</td>
                    <td>{ndkItem.tcvId}</td>
                    <td>{ndkItem.ndkName}</td>
                    <td>{ndkItem.ndkAge}</td>
                    <td>{ndkItem.ndkClass}</td>
                    <td>
                        <button className='btn btn-primary mx-1'>Sửa</button>
                        <button className='btn btn-danger mx-1'>Xóa</button>
                    </td>
                </tr>
            )
        })
        return (
            <div className='card'>
                <div className='card-header'>
                    <h2>Danh sách sinh viên</h2>
                </div>
                <div className='card-body'>
                    <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>ndkID</th>
                                <th>ndkName</th>
                                <th>ndkAge</th>
                                <th>ndkClass</th>
                                <th>Chức năng</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ndkElement}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default NdkRenderListStudent;