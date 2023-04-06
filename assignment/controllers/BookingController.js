window.BookingController = function ($scope, $http, $location) {
  $scope.user = {};
  let apiUrl = "http://localhost:5501/customer";
  $scope.kiemTra = {
    name: false,
    cccd: false,
    email: false,
    gender: false,
    phone: false,
    birth: false,
    checkin: false,
    checkout: false,
    guest: false,
    room: false,
    pay:false,
  };
  $scope.submit = function () {
    let newItem = {
      name: $scope.user.name,
      cccd: $scope.user.cccd,
      email:$scope.user.email,
      gender:$scope.user.gender,
      phone:$scope.user.phone,
      birth:$scope.user.birth,
      checkin:$scope.user.checkin,
      checkout:$scope.user.checkout,
      guest:$scope.user.guest,
      room:$scope.user.room,
      pay:$scope.user.pay,
    }
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    var phoneRegex = /^(03|05|07|08|09)+([0-9]{8})\b/;
    if ($scope.user.name == undefined || $scope.user.name == "") {
      $scope.kiemTra.name = true;
    } else {
      $scope.kiemTra.name = false;
    }
    if ($scope.user.cccd == undefined || $scope.user.cccd == "") {
      $scope.kiemTra.cccd = true;
      $scope.cccd = "Vui lòng nhập CCCD!"
    }else if(isNaN($scope.user.cccd)){
      $scope.kiemTra.cccd = true;
      $scope.cccd = "CCCD phải là số mời bạn nhập lại"
    }
     else {
      $scope.kiemTra.cccd = false;
    }
    if ($scope.user.email == undefined || $scope.user.email == "") {
      $scope.kiemTra.email = true;
      $scope.email = "Vui lòng nhập email!";
    } else if (
      !emailRegex.test($scope.user.email)
    ) {
      $scope.kiemTra.email = true;
      $scope.email = "Email bạn nhập không hợp lệ";
    } else {
      $scope.kiemTra.email = false;
    }
    if ($scope.user.gender == undefined || $scope.user.gender == "") {
      $scope.kiemTra.gender = true;
    } else {
      $scope.kiemTra.gender = false;
    }
    if ($scope.user.phone == undefined || $scope.user.phone == "") {
      $scope.kiemTra.phone = true;
      $scope.phone = "Vui lòng nhập số điện thoại!";
    } else if (!phoneRegex.test($scope.user.phone)) {
      $scope.kiemTra.phone = true;
      $scope.phone = "Không phải sđt hợp lệ ở VN";
    } else {
      $scope.kiemTra.phone = false;
    }
    if ($scope.user.birth == undefined || $scope.user.birth == "") {
      $scope.kiemTra.birth = true;
    } else {
      $scope.kiemTra.birth = false;
    }
    if ($scope.user.checkin == undefined || $scope.user.checkin == "") {
      $scope.kiemTra.checkin = true;
    } else {
      $scope.kiemTra.checkin = false;
    }
    if ($scope.user.checkout == undefined || $scope.user.checkout == "") {
      $scope.kiemTra.checkout = true;
    } else {
      $scope.kiemTra.checkout = false;
    }
    if ($scope.user.guest == undefined || $scope.user.guest == "") {
      $scope.kiemTra.guest = true;
    } else {
      $scope.kiemTra.guest = false;
    }
    if ($scope.user.room == undefined || $scope.user.room == "") {
      $scope.kiemTra.room = true;
    } else {
      $scope.kiemTra.room = false;
    }
    if ($scope.user.pay == undefined || $scope.user.pay == "") {
      $scope.kiemTra.pay = true;
    } else {
      $scope.kiemTra.pay = false;
    }
    if($scope.kiemTra.name == false &&
      $scope.kiemTra.cccd == false &&
      $scope.kiemTra.email == false &&
      $scope.kiemTra.gender == false &&
      $scope.kiemTra.phone == false &&
      $scope.kiemTra.birth == false &&
      $scope.kiemTra.checkin == false &&
      $scope.kiemTra.checkout == false &&
      $scope.kiemTra.guest == false &&
      $scope.kiemTra.room == false &&
      $scope.kiemTra.pay == false
      ) {
        $http.post(apiUrl,newItem).then(function(reponse) {
          alert('Đặt phòng thành công');
          $location.path("/list")
        });
      }
  };
};
