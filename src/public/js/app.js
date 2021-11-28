$(document).ready(function () {
  $(".image-slider").slick({
    slidesToShow: 1.66,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    draggable: true,
    prevArrow: `<button type='button' class='slick-prev slick-arrow'><ion-icon name="arrow-back-outline"></ion-icon></button>`,
    nextArrow: `<button type='button' class='slick-next slick-arrow'><ion-icon name="arrow-forward-outline"></ion-icon></button>`,
    dots: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          arrows: false,
          infinite: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
          infinite: false,
        },
      },
    ],
    autoplay: true,
    autoplaySpeed: 2000,
  });
});


$(document).ready(function () {
  $(".video-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    draggable: true,
    prevArrow: `<button type='button' class='slick-prev slick-arrow'><ion-icon name="arrow-back-outline"></ion-icon></button>`,
    nextArrow: `<button type='button' class='slick-next slick-arrow'><ion-icon name="arrow-forward-outline"></ion-icon></button>`,
    dots: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          arrows: true,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: true,
          infinite: true,
        },
      },
    ],

  });
});

function popupclose() {
  let modalCamOn = document.querySelector(".popupThuCamOn");
  modalCamOn.style.display = "none";
}

function onBlurPopup() {
  let modalCamOn = document.querySelector(".popupThuCamOn");
  modalCamOn.style.display = "none"
}


function popupCamOn() {
  let modal = document.querySelector(".popup");
  let modalCamOn = document.querySelector(".popupThuCamOn");

  let closeBtn1 = document.querySelector(".close-btn1");
  modalCamOn.style.display = "block";
  modalCamOn.style.transition = "2s";

  modal.style.display = "none"
  closeBtn1.onclick = function () {
    modalCamOn.style.display = "none";
  }
}

function popupclose() {
  let modalCamOn = document.querySelector(".popupThuCamOn");
  modalCamOn.style.display = "none";
}

function onBlurPopup() {
  let modalCamOn = document.querySelector(".popupThuCamOn");
  modalCamOn.style.display = "none"
}

function popupCamOn() {
  let modal = document.querySelector(".popup");
  let modalCamOn = document.querySelector(".popupThuCamOn");

  let closeBtn1 = document.querySelector(".close-btn1");
  modalCamOn.style.display = "block";
  modalCamOn.style.transition = "2s";

  modal.style.display = "none"
  closeBtn1.onclick = function () {
    modalCamOn.style.display = "none";
  }
}

function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function popupDangNhap() {
  let modal = document.querySelector(".popup");
  let closeBtn = document.querySelector(".close-btn");
  let nodeluupass = document.getElementById("checkbox");

  if (nodeluupass.checked == true) {
    modal.style.display = "block";

    closeBtn.onclick = function () {
      modal.style.display = "none"
    }
  }
  if (nodeluupass.checked == false) {
    modal.style.display = "none";
  }
}

let gioiTinh2 = document.querySelectorAll('.gioi-tinh-2');
$(document).ready(function () {
  // let nodeluupass = document.getElementById("checkbox");
  let modal = document.querySelector(".popup");
  let closeBtn = document.querySelector(".close-btn");
  let dongBtnThongTin = document.querySelector(".btn-primary");
  document.querySelector('.descTenNguoi').innerHTML = getParameterByName('name');

  if (getParameterByName('payol') === 'Chuyển khoản') {
    modal.style.display = "block";
      closeBtn.onclick = function () {
        modal.style.display = "none";
        if (getParameterByName('thanks') === 'true') {
          popupCamOn();
        }
      }
      dongBtnThongTin.onclick = function () {
        modal.style.display = "none";
        if (getParameterByName('thanks') === 'true') {
          popupCamOn();
        }
      }
  } else {
    if (getParameterByName('thanks') === 'true') {
      popupCamOn();
    }
  }

  if (getParameterByName('gender') === 'Nam') {
    document.querySelector('#gioi-tinh').innerHTML = 'anh';
    Array.from(gioiTinh2).forEach(gender => {
      gender.innerHTML = 'anh';
    })
  }

  if (getParameterByName('gender') === 'Nữ') {
    document.querySelector('#gioi-tinh').innerHTML = 'chị';
    Array.from(gioiTinh2).forEach(gender => {
      gender.innerHTML = 'chị';
    })
  }

  if (getParameterByName('gender') === 'Khác') {
    document.querySelector('#gioi-tinh').innerHTML = '';
    Array.from(gioiTinh2).forEach(gender => {
      gender.innerHTML = 'bạn';
    })
  }
});
