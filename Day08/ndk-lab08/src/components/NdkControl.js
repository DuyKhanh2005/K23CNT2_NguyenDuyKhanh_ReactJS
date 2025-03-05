import React, { Component } from 'react';

class NdkControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchKeyword: "",
    };
  }

  // Cập nhật từ khóa tìm kiếm khi nhập vào ô input
  handleSearchChange = (event) => {
    const keyword = event.target.value;
    this.setState({ searchKeyword: keyword });
    this.props.onNdkHandleSearch(keyword); // Gửi lên NdkApp.js
  };

  render() {
    return (
      <div className="card-header">
        <div className="row">
          {/* Thêm mới sinh viên */}
          <div className="col-3">
            <button
              type="button"
              className="btn btn-primary btn-icon-text"
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
                onChange={this.handleSearchChange} // Gọi hàm khi nhập dữ liệu
              />
              <button type="button" className="btn btn-primary btn-icon-text">
                Tìm kiếm
              </button>
            </form>
          </div>

          {/* Sắp xếp danh sách (chưa có logic) */}
          <div className="col-3 d-flex align-items-center">
            <select className="form-control">
              <option value="">Sắp xếp</option>
              <option value="name_asc">Tên A-Z</option>
              <option value="name_desc">Tên Z-A</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}

export default NdkControl;
