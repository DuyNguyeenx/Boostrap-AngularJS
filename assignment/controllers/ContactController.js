window.ContactController = function ($scope) {
  $scope.contact = {};
  $scope.kiemTra = {
    name: false,
    email: false,
    mess: false,
  };
  $scope.send = function () {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if ($scope.contact.name == undefined || $scope.contact.name == "") {
      $scope.kiemTra.name = true;
    } else {
      $scope.kiemTra.name = false;
    }
    if ($scope.contact.email == undefined || $scope.contact.email == "") {
      $scope.kiemTra.email = true;
      $scope.email = "Vui lòng nhập email!";
    } else if(!emailRegex.test($scope.contact.email)){
      $scope.kiemTra.email = true;
      $scope.email = "Email bạn nhập không hợp lệ";
    } else {
      $scope.kiemTra.email = false;
    }
    if ($scope.contact.mess == undefined || $scope.contact.mess == "") {
        $scope.kiemTra.mess = true;
      } else {
        $scope.kiemTra.mess = false;
      }
  };
};
