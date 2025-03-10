import React, { Component } from 'react';

class NdkControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchKeyword: "",
      editingStudent: null, // Lưu sinh viên đang chỉnh sửa
    };
  }

  // Cập nhật từ khóa tìm kiếm khi nhập vào ô input
  handleSearchChange = (event) => {
    const keyword = event.target.value;
    this.setState({ searchKeyword: keyword });
    this.props.onNdkHandleSearch(keyword); // Gửi lên NdkApp.js
  };

  // Xử lý khi nhấn nút "Sửa"
  handleEditStudent = (student) => {
    this.setState({ editingStudent: student }); // Cập nhật state để hiển thị form sửa
  };

  // Cập nhật giá trị trong form chỉnh sửa
  handleEditChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      editingStudent: {
        ...prevState.editingStudent,
        [name]: value,
      },
    }));
  };

  // Gửi dữ liệu cập nhật lên component cha (NdkApp)
  handleUpdateStudent = () => {
    if (this.state.editingStudent) {
      this.props.onNdkHandleUpdate(this.state.editingStudent);
      this.setState({ editingStudent: null }); // Reset form sau khi cập nhật
    }
  };

  render() {
    return (
      <div className="card-header">
        <div className="row">
          {/* Thêm mới sinh viên */}
          <div className="col-3">
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.props.onNdkHandleAddNew} // Kích hoạt sự kiện thêm mới
            >
              Thêm mới sinh viên
            </button>
          </div>

          {/* Ô tìm kiếm */}
          <div className="col-6">
            <form className="search-form">
              <i className="icon-search" />
              <input
                type="search"
                className="form-control"
                placeholder="Nhập mã sinh viên..."
                value={this.state.searchKeyword}
                onChange={this.handleSearchChange}
              />
              <button type="button" className="btn btn-primary">
                Tìm kiếm
              </button>
            </form>
          </div>

          {/* Sắp xếp danh sách (chưa có logic) */}
          <div className="col-3">
            <select className="form-control">
              <option value="">Sắp xếp</option>
              <option value="name_asc">Tên A-Z</option>
              <option value="name_desc">Tên Z-A</option>
            </select>
          </div>
        </div>

        {/* Hiển thị form chỉnh sửa nếu có sinh viên đang sửa */}
        {this.state.editingStudent && (
          <div className="edit-form mt-3">
            <h4>Chỉnh sửa sinh viên</h4>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Nhập tên sinh viên..."
              value={this.state.editingStudent.name}
              onChange={this.handleEditChange}
            />
            <button className="btn btn-success mt-2" onClick={this.handleUpdateStudent}>
              Cập nhật
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default NdkControl;
