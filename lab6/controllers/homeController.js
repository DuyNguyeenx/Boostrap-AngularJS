window.homeController = function ($scope) {
    $scope.sanpham = [
      {
        id: 1,
        ten: "IPHONE 14",
        gia: 200000,
        mau: "red",
        tt: "Kích hoạt",
      },
      {
        id: 2,
        ten: "IPHONE 14 PRO",
        gia: 100000,
        mau: "blue",
        tt: "Không kích hoạt",
      },
      {
        id: 3,
        ten: "IPHONE 14 PRO MAX",
        gia: "6666666",
        mau: "purple",
        tt: "Kích hoạt",
      },
    ];
    $scope.sp = {};
    $scope.kiemTra = {
      ten: true,
      gia: true,
      mau: true,
      tt: true,
    };
    $scope.onEdit = function (editID) {
      $scope.editID = editID;
      let editItem = {
        ten: "",
        gia: "",
        mau: "",
        tt: "",
      };
      for (let i = 0; i < $scope.sanpham.length; i++) {
        if ($scope.sanpham[i].id == editID) {
          editItem.ten = $scope.sanpham[i].ten;
                  editItem.gia = $scope.sanpham[i].gia;
                  editItem.mau = $scope.sanpham[i].mau;
                  editItem.tt = $scope.sanpham[i].tt;
        }
      }
      // bắn thông tin cần sửa lên form
      $scope.sp = {
              ten: editItem.ten,
              gia: editItem.gia,
              mau: editItem.mau,
              tt: editItem.tt,
      };
    };
    $scope.onClose = function () {
      $scope.sp = {
              ten: "",
              gia: "",
              mau: "",
              tt: "",
      };
      $scope.editID = 0;
    };
    $scope.submit = function () {
          let editID = $scope.editID;
      if (editID) {
        for (let i = 0; i < $scope.sanpham.length; i++) {
          if ($scope.sanpham[i].id == editID) {
            $scope.sanpham[i].ten = $scope.sp.ten;
            $scope.sanpham[i].gia = $scope.sp.gia;
            $scope.sanpham[i].mau = $scope.sp.mau;
            $scope.sanpham[i].tt = $scope.sp.tt;
          }
        }
        $scope.onClose();
        return;
      }
      let ds = $scope.sanpham;
      let newID = ds.length > 0 ? ds[ds.length - 1].id + 1 : 1;
      let ten = $scope.sp.ten;
      let gia = $scope.sp.gia;
      let mau = $scope.sp.mau;
      let tt = $scope.sp.tt;
  
      if (ten == undefined || ten == "") {
        $scope.kiemTra.ten = false;
      } else {
        $scope.kiemTra.ten = true;
      }
      if (gia == undefined || gia == "") {
        $scope.kiemTra.gia = false;
        $scope.gia = "Vui lòng nhập giá";
      } else if (gia < 0) {
        $scope.kiemTra.gia = false;
        $scope.gia = "Phải lớn hơn 0";
      } else {
        $scope.kiemTra.gia = true;
      }
      if (mau == undefined || mau == "") {
        $scope.kiemTra.mau = false;
      } else {
        $scope.kiemTra.mau = true;
      }
      
      if (
        $scope.kiemTra.ten == true &&
        $scope.kiemTra.gia == true &&
        $scope.kiemTra.mau == true &&
        $scope.kiemTra.tt == true
      ) {
        $scope.sanpham.push({
          id: newID,
          ten: ten,
          gia: gia,
          mau: mau,
          tt: tt,
        });
      }
    };
  };
  