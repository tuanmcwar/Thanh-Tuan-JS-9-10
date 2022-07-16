/**
 * Hàm nhận vào 2 tham số và trả về kết quả true hoặc false. True khi hợp lệ và false khi không hợp lệ
 * @param {*} value Giá trị đầu vào
 * @param {*} selectorError Nơi in ra lỗi
 * @param {*} name là text hiển thị ra tên trường bị lỗi
 */
function kiemTraRong(value, selectorError, name) {
  //.trim(): Loại bỏ khoảng trống đầu và cuối của chuỗi
  //      abc     => abc
  if (value.trim() !== "") {
    document.querySelector(selectorError).innerHTML = "";
    return true;
  }
  document.querySelector(selectorError).innerHTML =
    name + " không được bỏ trống !";
  return false;
}

function kiemTraTatChu(value, selectorError, name) {
  var regexLetter = /^[A-Z a-z]+$/;
  if (regexLetter.test(value)) {
    document.querySelector(selectorError).innerHTML = "";
    return true;
  }
  document.querySelector(selectorError).innerHTML =
    name + " tất cả phải là chữ !";
  return false;
}

//regex ... javascript
function kiemTraTatCaSo(value, selectorError, name) {
  var regexLetter = /^[0-9]+$/;
  if (regexLetter.test(value)) {
    document.querySelector(selectorError).innerHTML = "";
    return true;
  }
  document.querySelector(selectorError).innerHTML =
    name + " tất cả phải là số !";
  return false;
}

function kiemTraEmail(value, selectorError, name) {
  var regexEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\ [[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regexEmail.test(value)) {
    document.querySelector(selectorError).innerHTML = "";
    return true;
  }
  document.querySelector(selectorError).innerHTML =
    name + " không đúng định dạng !";
  return false;
}
function checkPassword(value, selectorError, name) {
  var regexEmail =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/;
  if (regexEmail.test(value)) {
    document.querySelector(selectorError).innerHTML = "";
    return true;
  }
  document.querySelector(selectorError).innerHTML =
    name + " không đúng định dạng !";
  return false;
}
// MM/DD/YYYY
function kiemTraNgay(value, selectorError, name) {
  var regexDate = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;

  if (regexDate.test(value)) {
    document.querySelector(selectorError).innerHTML = "";
    return true;
  }
  document.querySelector(selectorError).innerHTML =
    name + " không đúng định dạng ngày !";
  return false;
}

function kiemTraDoDai(value, selectorError, name, minLength, maxLength) {
  var lengthValue = value.length;
  if (lengthValue > maxLength || lengthValue < minLength) {
    document.querySelector(selectorError).innerHTML =
      name + " phải từ " + minLength + " đến " + maxLength + " kí tự";
    return false;
  }
  document.querySelector(selectorError).innerHTML = "";
  return true;
}

function kiemTraGiaTri(value, selectorError, name, minValue, maxValue) {
  value = Number(value);
  if (value > maxValue || value < minValue) {
    document.querySelector(selectorError).innerHTML =
      name + " từ " + minValue + " đến " + maxValue;
    return false;
  }
  document.querySelector(selectorError).innerHTML = "";
  return true;
}

/**
 * Hàm nhận vào 2 tham số và trả về kết quả true hoặc false. True khi hợp lệ và false khi không hợp lệ
 * @param {*} value Giá trị đầu vào
 * @param {*} selectorError Nơi in ra lỗi
 * @param {*} name là text hiển thị ra tên trường bị lỗi
 */

function kiemTraRong(value, selectorError, name) {
  //.trim(): Loại bỏ khoảng trống đầu và cuối của chuỗi
  //   abc  =>abc

  if (value.trim() !== "") {
    document.querySelector(selectorError).innerHTML = "";
    return true;
  } else {
    document.querySelector(selectorError).innerHTML =
      name + " Không được bỏ trống ! ";
    return false;
  }
}
function kiemTraRongOnblur(id, selectorError, name) {
  //.trim(): Loại bỏ khoảng trống đầu và cuối của chuỗi
  //   abc  =>abc

  var value = document.querySelector(id).value;

  if (value.trim() !== "") {
    document.querySelector(selectorError).innerHTML = "";

    return true;
  } else {
    document.querySelector(selectorError).innerHTML =
      name + " không được bỏ trống ! ";

    return false;
  }
}
function focusElement(id) {
  document.querySelector(id).innerHTML = "";
}
