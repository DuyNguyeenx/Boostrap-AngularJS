window.addController = function ($scope, $http, $location) {
  $scope.sp = {};
  let apiUrl = "http://localhost:5501/thithu";
    $scope.kiemTra = {
    name: false,
    price: false,
    categoryName: false,
    };
  $scope.submit = function () {
    let newItem = {
      // id:newId,
      name: $scope.sp.name,
      price: $scope.sp.price,
      categoryName: $scope.sp.cate,
    };
    if ($scope.sp.name == undefined || $scope.sp.name == "") {
      $scope.kiemTra.name = true;
    } else {
      $scope.kiemTra.name = false;
    }
    if ($scope.sp.price == undefined || $scope.sp.price == "") {
      $scope.kiemTra.price = true;
      $scope.gia = "Vui long nhap gia!";
    } else if ($scope.sp.price <= 100) {
      $scope.kiemTra.name = true;
      $scope.gia = "Gia phai lon hon 100!";
    } else {
      $scope.sp.price = false;
    }
    if ($scope.sp.cate == undefined || $scope.sp.cate == "") {
      $scope.kiemTra.cate = true;
    } else {
      $scope.kiemTra.cate = false;
    }
    if (
      $scope.sp.name == false &&
      $scope.sp.price == false &&
      $scope.sp.cate == false
    ) {
      $http
        .post(
          apiUrl, //đường dẫn API
          newItem // cục dữ liệu để thêm mới
        )
        .then(function (reponse) {
          // console.log(reponse);
          $location.path("/");
        });
    }
  };
};
