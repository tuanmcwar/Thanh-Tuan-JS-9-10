function nhanVien() {
  this.taiKhoan = "";
  this.hoten = "";
  this.email = "";
  this.password = "";
  this.date = "";
  this.luongCoBan = 0;
  this.chucVu = "";
  this.gioLam = 0;
  this.tongLuong = function () {
    var luong = 0;
    if (this.chucVu == "Sếp") {
      luong = Number(this.luongCoBan * 3);
    } else if (this.chucVu == "Trưởng phòng") {
      luong = Number(this.luongCoBan * 2);
    } else if (this.chucVu == "Nhân viên") {
      luong = Number(this.luongCoBan * 1);
    }
    return luong;
  };
  //   this.xepLoai = function () {
  //     var xl = "";
  //     if (Number(this.gioLam) < 160) {
  //       xl = "Nhân viên trung bình";
  //     } else if (Number(this.gioLam) >= 160) {
  //       xl = "Nhân viên khá";
  //     } else if (Number(this.gioLam) >= 176) {
  //       xl = "Nhân viên giỏi";
  //     } else if (Number(this.gioLam) >= 192) {
  //       xl = "Nhân viên xuất sắc";
  //     }
  //     return xl;
  //   };
}
