document.querySelector("#btnThem").onclick = function () {
  document.querySelector("#tknv").disabled = false;
  document.querySelector("#btnCapNhat").disabled = true;
  document.querySelector("#btnThemNV").disabled = false;
};
// function loadTable() {
//   var maNvTruoc = [];
//   var maNV = "";
//   for (var i = 0; i < mangNhanVien.length; i++) {
//     maNvTruoc.push(mangNhanVien[i].taiKhoan);
//   }
//   console.log("ádasdasdasd", maNvTruoc);
//   return maNvTruoc;
//   //
// }
document.querySelector("#btnDong").onclick = function () {
  location.reload();
  //   document.getElementById("form").reload();
};
// function checkValidation() {
//   var val = document.querySelectorAll(".error1");
//   var errorr = 0;
//   for (var i = 0; i < val.length; i++) {
//     if (val[i].innerHTML !== "") {
//       errorr++;
//     }
//     console.log(errorr);
//     if (errorr > 0) {
//       document.querySelector("#btnThemNV").disabled = true;
//     } else {
//       document.querySelector("#btnThemNV").disabled = false;
//     }
//   }
// }
var mangNhanVien = [];
document.querySelector("#btnThemNV").onclick = function () {
  let d = new Date();
  let day = d.getDate();
  console.log(day);
  var nv = new nhanVien();

  console.log("nhanhvien", nv);

  nv.taiKhoan = document.querySelector("#tknv").value;
  nv.hoten = document.querySelector("#name").value;
  nv.email = document.querySelector("#email").value;
  nv.password = document.querySelector("#password").value;
  nv.date = document.querySelector("#datepicker").value;
  nv.luongCoBan = document.querySelector("#luongCB").value;
  nv.chucVu = document.querySelector("#chucvu").value;
  console.log("chưc vun ", nv.chucVu.innerHTML);
  nv.gioLam = document.querySelector("#gioLam").value;
  console.log("ngày", nv.date);
  var ngay = nv.date.slice(3, 5);

  if (
    nv.taiKhoan === "" ||
    nv.hoten === "" ||
    nv.email === "" ||
    nv.password === "" ||
    nv.luongCoBan === "" ||
    nv.chucVu === "" ||
    nv.gioLam === ""
  ) {
    checkValidationID();
    checkValidationName();
    checkValidationEmail();
    checkValidationPasswords();
    checkValidationDate();
    checkValidationLuong();
    checkValidationChucvu();
    checkValidationGioLam();

    // kiemTraRongOnblur("#tknv", ".danger-id", "Tài khoản");

    // kiemTraRongOnblur("#name", ".danger-name", "Họ và tên");
    // kiemTraRongOnblur("#email", ".danger-email", "Email");
    // kiemTraRongOnblur("#password", ".danger-password", "Password");
    // // kiemTraNgay("#datepicker", ".danger-date", "Ngày làm");
    // kiemTraRongOnblur("#luongCB", ".danger-wage", "Lương cơ bản");
    // kiemTraRongOnblur("#chucvu", ".danger-permission", "Chức vụ");
    // kiemTraRongOnblur("#gioLam", ".danger-time", "Giờ làm");
    if (nv.taiKhoan !== "") {
      console.log("ngày", nv.taiKhoan);
      var maNvTruoc = [];
      var maNV = "";

      for (var i = 0; i < mangNhanVien.length; i++) {
        maNvTruoc.push(mangNhanVien[i].taiKhoan);
      }
      console.log("ngàyM", maNvTruoc);
      var count = 0;
      for (var i = 0; i < maNvTruoc.length; i++) {
        if (maNvTruoc[i] === nv.taiKhoan) {
          count++;
        }
      }
      console.log("count", count);
      if (count >= 1) {
        document.querySelector(".danger-id").innerHTML =
          "Tài khoản đã tồn tại trên hệ thống";
      }
      //   if (nv.taiKhoan !== "") {
    }
  } else if (
    checkValidationID() == true &&
    checkValidationName() == true &&
    checkValidationEmail() == true &&
    checkValidationPasswords() == true &&
    checkValidationGioLam() == true &&
    checkValidationLuong() == true
  ) {
    mangNhanVien.push(nv);
    renderNhanVien(mangNhanVien);
    luuLocalStorage();
  }
  //     console.log("ngày", nv.taiKhoan);
  //     var maNvTruoc = [];
  //     var maNV = "";

  //     for (var i = 0; i < mangNhanVien.length; i++) {
  //       maNvTruoc.push(mangNhanVien[i].taiKhoan);
  //     }
  //     console.log("ngàyM", maNvTruoc);
  //     var count = 0;
  //     for (var i = 0; i < maNvTruoc.length; i++) {
  //       if (maNvTruoc[i] === nv.taiKhoan) {
  //         count++;
  //       }
  //     }
  //     console.log("count", count);
  //     if (count >= 1) {
  //       document.querySelector(".danger-id").innerHTML =
  //         "Tài khoản đã tồn tại trên hệ thống";
  //     } else {
  //       mangNhanVien.push(nv);
  //       document.getElementById("form").reset();
  //     }
  //   }
  // var iCapNhat = -1;
  // for (var i = 0; i < mangNhanVien.length; i++) {
  //   var nVien = mangNhanVien[i];
  //   if (nVien.taiKhoan === taiKhoan) {
  //     iCapNhat = i;
  //   }
  // }
  // nVien = mangNhanVien[iCapNhat];
  // console.log("mảng trước", nv.taiKhoan);

  // document.querySelector("#btnThemNV").disabled = false;

  //   console.log("mảng là ", mangNhanVien);

  //   var trNhanVien = document.createElement("tr");
  //   var tdTaiKhoan = document.createElement("td");
  //   tdTaiKhoan.innerHTML = nv.taiKhoan;
  //   trNhanVien.appendChild(tdTaiKhoan);
  //   var tdHoTen = document.createElement("td");
  //   tdHoTen.innerHTML = nv.hoten;
  //   trNhanVien.appendChild(tdHoTen);
  //   var tdEmail = document.createElement("td");
  //   tdEmail.innerHTML = nv.email;

  //   trNhanVien.appendChild(tdEmail);
  //   var tdNgayLam = document.createElement("td");
  //   tdNgayLam.innerHTML = nv.date;

  //   trNhanVien.appendChild(tdNgayLam);
  //   var tdChucVu = document.createElement("td");
  //   tdChucVu.innerHTML = nv.chucVu;

  //   trNhanVien.appendChild(tdChucVu);
  //   document.querySelector("#tableDanhSach").appendChild(trNhanVien);
};
function renderNhanVien(arrnv) {
  var html = "";
  for (var i = 0; i < arrnv.length; i++) {
    var nv = arrnv[i];
    nv.tongLuong = function () {
      var luong = 0;
      if (this.chucVu == 1) {
        luong = Number(this.luongCoBan * 3);
      } else if (this.chucVu == 2) {
        luong = Number(this.luongCoBan * 2);
      } else if (this.chucVu == 3) {
        luong = Number(this.luongCoBan * 1);
      }
      return luong;
    };
    nv.xepLoai1 = function () {
      var xl = "";
      if (this.gioLam > 200 && this.gioLam < 80) {
        return false;
      } else if (this.gioLam <= 200 && this.gioLam >= 192) {
        xl = "Nhân viên xuất sắc";
      } else if (this.gioLam < 192 && this.gioLam >= 176) {
        xl = "Nhân viên giỏi";
      } else if (this.gioLam < 176 && this.gioLam >= 160) {
        xl = "Nhân viên khá";
      } else if (this.gioLam < 160 && this.gioLam >= 80) {
        xl = "Nhân viên trung bình";
      }
      return xl;
    };

    console.log(typeof this.gioLam);

    nv.chucVu1 = function () {
      var cVu = "";
      if (Number(this.chucVu) === 1) {
        cVu = "Sếp";
      } else if (Number(this.chucVu) === 2) {
        cVu = "Trưởng phòng";
      } else if (Number(this.chucVu) === 3) {
        cVu = "Nhân viên";
      }
      return cVu;
    };
    // console.log(typeof nv.chucVu);
    html += `<tr>
    <td>${nv.taiKhoan}</td>
    <td>${nv.hoten}</td>
    <td>${nv.email}</td>
    <td>${nv.date}</td>
    <td>${nv.chucVu1()}</td>
    <td>${nv.tongLuong()}</td>
    <td>${nv.xepLoai1()}</td>

   <td class="d-flex">
  
                    <i class="btn btn-danger fa-solid fa-trash mr-1" onclick="xoaNhanVien('${
                      nv.taiKhoan
                    }')"></i>
                    <i class="btn btn-primary fa-solid fa-pen-to-square" data-toggle="modal"
                    data-target="#myModal" onclick="chinhSua('${
                      nv.taiKhoan
                    }')"></i>
                </td>

    </tr>`;
  }
  document.querySelector("#tableDanhSach").innerHTML = html;
  return html;
}

function xoaNhanVien(taiKhoan) {
  var indexDel = mangNhanVien.findIndex(
    (nhanVien) => nhanVien.taiKhoan === taiKhoan
  );
  if (indexDel !== -1) {
    mangNhanVien.splice(indexDel, 1);
  }

  luuLocalStorage();
  renderNhanVien(mangNhanVien);
}
function chinhSua(taiKhoan) {
  document.querySelector("#btnThemNV").disabled = true;
  document.querySelector("#btnCapNhat").disabled = false;

  var iCapNhat = -1;
  for (var i = 0; i < mangNhanVien.length; i++) {
    var nVien = mangNhanVien[i];
    if (nVien.taiKhoan === taiKhoan) {
      iCapNhat = i;
    }
  }

  nVien = mangNhanVien[iCapNhat];
  document.querySelector("#tknv").disabled = true;

  document.querySelector("#tknv").value = nVien.taiKhoan;
  document.querySelector("#name").value = nVien.hoten;
  document.querySelector("#email").value = nVien.email;
  document.querySelector("#password").value = nVien.password;
  document.querySelector("#datepicker").value = nVien.date;
  document.querySelector("#luongCB").value = nVien.luongCoBan;
  document.querySelector("#chucvu").value = nVien.chucVu;
  document.querySelector("#gioLam").value = nVien.gioLam;

  document.querySelector("#btnCapNhat").onclick = function () {
    var nv = new nhanVien();
    nv.taiKhoan = document.querySelector("#tknv").value;

    nv.hoten = document.querySelector("#name").value;
    nv.email = document.querySelector("#email").value;
    nv.password = document.querySelector("#password").value;
    nv.date = document.querySelector("#datepicker").value;
    nv.luongCoBan = document.querySelector("#luongCB").value;
    nv.chucVu = document.querySelector("#chucvu").value;
    nv.gioLam = document.querySelector("#gioLam").value;
    // var iCapNhat = -1;
    // for (var i = 0; i < mangNhanVien.length; i++) {
    //   var nVien = mangNhanVien[i];
    //   if (nVien.taiKhoan === taiKhoan) {
    //     iCapNhat = i;
    //   }
    // }

    mangNhanVien[iCapNhat].taiKhoan = nv.taiKhoan;
    mangNhanVien[iCapNhat].hoten = nv.hoten;
    mangNhanVien[iCapNhat].email = nv.email;
    mangNhanVien[iCapNhat].password = nv.password;
    mangNhanVien[iCapNhat].date = nv.date;
    mangNhanVien[iCapNhat].luongCoBan = nv.luongCoBan;
    mangNhanVien[iCapNhat].chucVu = nv.chucVu;
    mangNhanVien[iCapNhat].gioLam = nv.gioLam;
    console.log("ádsadasd", mangNhanVien[iCapNhat]);
    luuLocalStorage();
    renderNhanVien(mangNhanVien);
    document.querySelector("#tknv").disabled = true;

    document.querySelector("#btnThemNV").disabled = true;
    // document.getElementById("form").reset();
  };
}
function luuLocalStorage() {
  var stringNhanVien = JSON.stringify(mangNhanVien);
  localStorage.setItem("duLieuLuu", stringNhanVien);
}
function layLocalStorage() {
  if (localStorage.getItem("duLieuLuu")) {
    var stringNhanViens = localStorage.getItem("duLieuLuu");

    mangNhanVien = JSON.parse(stringNhanViens);
    // console.log("helo", mangNhanVien);

    renderNhanVien(mangNhanVien);
  }
}
window.onload = function () {
  layLocalStorage();
};

// document.querySelector("#tknv").onblur = function () {
//   var maNV = document.querySelector("#tknv").value;
//   if (maNV.length > 0) {
//     kiemTraDoDai(maNV, ".danger-id", "Tài khoản", 4, 6);
//     if (kiemTraDoDai(maNV, ".danger-id", "Tài khoản", 4, 6) == true) {
//       kiemTraTatCaSo(maNV, ".danger-id", "Tài khoản");
//     }
//   } else kiemTraRongOnblur("#tknv", ".danger-id", "Tài khoản");
// };
// document.querySelector("#tknv").onfocus = function () {
//   focusElement(".danger-id");
// };
function checkValidationID() {
  var maNV = document.querySelector("#tknv").value;
  if (maNV.length > 0) {
    kiemTraDoDai(maNV, ".danger-id", "Tài khoản", 4, 6);
    if (kiemTraDoDai(maNV, ".danger-id", "Tài khoản", 4, 6) == true) {
      kiemTraTatCaSo(maNV, ".danger-id", "Tài khoản");
    }
    return true;
  } else {
    kiemTraRongOnblur("#tknv", ".danger-id", "Tài khoản");
    return false;
  }
}
document.querySelector("#tknv").onfocus = function () {
  focusElement(".danger-id");
};

document.querySelector("#name").onblur = function () {
  checkValidationName();
};
function checkValidationName() {
  var name = document.querySelector("#name").value;
  if (name.length > 0) {
    kiemTraTatChu(name, ".danger-name", "Họ và tên");
    return true;
  } else {
    kiemTraRongOnblur("#name", ".danger-name", "Họ và tên");
    return false;
  }
}
document.querySelector("#name").onfocus = function () {
  focusElement(".danger-name");
};
document.querySelector("#email").onblur = function () {
  checkValidationEmail();
};
function checkValidationEmail() {
  var email = document.querySelector("#email").value;
  if (email.length > 0) {
    kiemTraEmail(email, ".danger-email", "Email");
    return true;
  } else {
    kiemTraRongOnblur("#email", ".danger-email", "Email");
    return false;
  }
}
document.querySelector("#email").onfocus = function () {
  focusElement(".danger-email");
};
document.querySelector("#password").onblur = function () {
  checkValidationPasswords();
};
function checkValidationPasswords() {
  var password = document.querySelector("#password").value;
  if (password.length > 6) {
    kiemTraDoDai(password, ".danger-password", "Password", 6, 10);
    if (kiemTraDoDai(password, ".danger-password", "Password", 6, 10) == true) {
      checkPassword(password, ".danger-password", "Password");
    }
    return true;
  } else {
    kiemTraRongOnblur("#password", ".danger-password", "Password");
    return false;
  }
}
document.querySelector("#password").onfocus = function () {
  focusElement(".danger-password");
};
document.querySelector("#datepicker").onblur = function () {
  checkValidationDate();
};
function checkValidationDate() {
  var date = document.querySelector("#datepicker").value;
  if (date.length > 0) {
    kiemTraNgay(date, ".danger-date", "Ngày làm");
  } else {
    kiemTraRongOnblur("#datepicker", ".danger-date", "Ngày làm");
  }
}
document.querySelector("#datepicker").onfocus = function () {
  focusElement(".danger-date");
};

document.querySelector("#luongCB").onblur = function () {
  checkValidationLuong();
};
function checkValidationLuong() {
  var luong = Number(document.querySelector("#luongCB").value);

  if (luong < 1000000 || luong > 20000000) {
    document.querySelector(".danger-wage").innerHTML =
      "Lương cơ bản không đúng !";
    return false;
  } else if ((luong.length = 0)) {
    kiemTraRongOnblur("#luongCB", ".danger-wage", "Lương cơ bản");
  } else {
    return true;
  }
}
document.querySelector("#luongCB").onfocus = function () {
  focusElement(".danger-wage");
};
document.querySelector("#chucvu").onblur = function () {
  checkValidationChucvu();
};
function checkValidationChucvu() {
  var chucvu = document.querySelector("#chucvu").value;
  //   console.log("chưc", chucvu);
  if (chucvu == 1 && chucvu == 2 && chucvu == 3) {
    document.querySelector(".danger-permission").innerHTML = "";
  } else {
    kiemTraRongOnblur("#chucvu", ".danger-permission", "Chức vụ");
  }
}
document.querySelector("#chucvu").onfocus = function () {
  focusElement(".danger-permission");
};
document.querySelector("#gioLam").onblur = function () {
  checkValidationGioLam();
};
function checkValidationGioLam() {
  var gioLam = Number(document.querySelector("#gioLam").value);
  if (gioLam < 80 || gioLam > 200) {
    document.querySelector(".danger-time").innerHTML = "Giờ làm không đúng !";
    return false;
  } else if ((gioLam.length = 0)) {
    kiemTraRongOnblur("#gioLam", ".danger-time", "Giờ làm");
  } else {
    return true;
  }
}
document.querySelector("#gioLam").onfocus = function () {
  focusElement(".danger-time");
};

function searchNhanVien(value) {
  var idSearch = Number(document.querySelector("#searchName").value);
  //
  console.log("mang đầu ", mangNhanVien);
  var maNvTruoc = [];
  var seachXuatsac = [];
  var seachGioi = [];
  var seachKha = [];
  var seachTrungBinh = [];

  for (var i = 0; i < mangNhanVien.length; i++) {
    console.log("xep loai", mangNhanVien[i].gioLam);

    if (mangNhanVien[i].gioLam >= 192) {
      seachXuatsac.push(mangNhanVien[i]);
    } else if (mangNhanVien[i].gioLam < 192 && mangNhanVien[i].gioLam > 176) {
      seachGioi.push(mangNhanVien[i]);
    } else if (mangNhanVien[i].gioLam <= 176 && mangNhanVien[i].gioLam >= 160) {
      seachKha.push(mangNhanVien[i]);
    } else if (mangNhanVien[i].gioLam < 160) {
      seachTrungBinh.push(mangNhanVien[i]);
    }
  }
  console.log("TB", seachTrungBinh);
  if (idSearch === 1) {
    renderNhanVien(seachXuatsac);
  } else if (idSearch === 2) {
    renderNhanVien(seachGioi);
  } else if (idSearch === 3) {
    renderNhanVien(seachKha);
  } else if (idSearch === 4) {
    renderNhanVien(seachTrungBinh);
  }

  // console.log("count", seach);
  console.log("ádasdsad", idSearch);
}
document.querySelector("#btnTimNV").onclick = function () {
  searchNhanVien();
};
