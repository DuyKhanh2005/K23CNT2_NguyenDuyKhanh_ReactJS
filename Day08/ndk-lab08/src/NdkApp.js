import React, { Component } from "react";
import NdkControl from "./components/NdkControl";
import NdkStudentList from "./components/NdkStudentList";
import NdkForm from "./components/NdkForm";

class NdkApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ndkStudents: [
        { ndkId: "SV001", ndkStudentName: "Nguyễn Duy Khánh", ndkAge: 20, ndkGender: "Nam", ndkBirthday: "13/01/2005", ndkBirthPlace: "HN", ndkAddress: "Tòa VCN, 25 Vũ Ngọc Phan" },
        { ndkId: "SV002", ndkStudentName: "Nguyễn Huy Thông", ndkAge: 20, ndkGender: "Nam", ndkBirthday: "25/05/2005", ndkBirthPlace: "HP", ndkAddress: "Trung Quốc" },
        { ndkId: "SV003", ndkStudentName: "Phạm Tuấn Anh", ndkAge: 20, ndkGender: "Nam", ndkBirthday: "25/05/2005", ndkBirthPlace: "TpHCM", ndkAddress: "Trung Quốc" },
        { ndkId: "SV004", ndkStudentName: "Phạm Thị Quỳnh Hương", ndkAge: 20, ndkGender: "Nữ", ndkBirthday: "01/01/2005", ndkBirthPlace: "TpHCM", ndkAddress: "Hồ Chí Minh" },
      ],
      ndkStudent: "", // Sinh viên đang được chỉnh sửa
      searchKeyword: "", // Từ khóa tìm kiếm
    };
  }

  // Xem thông tin sinh viên
  ndkHandleView = (ndkStudent) => {
    this.setState({ ndkStudent });
  };

  // Xóa sinh viên
  ndkHandleDelete = (ndkId) => {
    const ndkStudents = this.state.ndkStudents.filter(student => student.ndkId !== ndkId);
    this.setState({ ndkStudents });
  };

  // Thêm hoặc cập nhật sinh viên
  ndkHandleSave = (ndkStudent) => {
    const { ndkStudents } = this.state;
    const index = ndkStudents.findIndex(student => student.ndkId === ndkStudent.ndkId);

    if (index !== -1) {
      // Cập nhật thông tin sinh viên
      ndkStudents[index] = ndkStudent;
    } else {
      // Thêm mới sinh viên
      ndkStudents.push(ndkStudent);
    }

    this.setState({
      ndkStudents,
      ndkStudent: null // Reset form sau khi lưu
    });
  };

  // Xử lý tìm kiếm theo mã sinh viên
  onNdkHandleSearch = (keyword) => {
    this.setState({ searchKeyword: keyword });
  };

  // Lọc danh sách sinh viên theo mã sinh viên
  getFilteredStudents = () => {
    const { ndkStudents, searchKeyword } = this.state;
    return ndkStudents.filter((student) =>
      student.ndkId.toLowerCase().includes(searchKeyword.toLowerCase())
    );
  };

  render() {
    return (
      <div>
        <h1 className="text-center">
          Nguyễn Duy Khánh - K23CNT3 - Mini Project1
        </h1>
        <section className="container-fluid mt-3">
          <div className="row">
            {/* Danh sách sinh viên */}
            <div className="col-lg-7 grid-margin stretch-card">
              <div className="card">
                <NdkControl onNdkHandleSearch={this.onNdkHandleSearch} />
                <NdkStudentList
                  renderNdkStudents={this.getFilteredStudents()}
                  onNdkHandleView={this.ndkHandleView}
                  onNdkHandleDelete={this.ndkHandleDelete}
                />
              </div>
            </div>

            {/* Form thêm/sửa sinh viên */}
            <div className="col-5 grid-margin">
              <NdkForm
                renderNdkStudent={this.state.ndkStudent}
                onNdkHandleSave={this.ndkHandleSave}
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default NdkApp;
