window.Lab5Controller = function($scope,$routeParams) {
    $scope.chucVu = $routeParams.name;
    $scope.user = {};
    $scope.kiemTra = {
        name:false,
        gender:false,
        step:false,
        work:false,
    };
    $scope.submit = function() {
        // validate
        if(!$scope.user || !$scope.user.name) {
            $scope.kiemTra.name = true;
        }if(!$scope.user || !$scope.user.gender) {
            $scope.kiemTra.gender = true;
        }if(!$scope.user || !$scope.user.step) {
            $scope.kiemTra.step = true;
        }if(!$scope.user || !$scope.user.work ) {
            $scope.kiemTra.work = true;
        }
        if($scope.user.gender == "nam"){
            $scope.user.gender = 'Ong';
        }else {
            $scope.user.gender = 'Ba';
        }
        // nhan vien
        if($routeParams.name == ":Nhan Vien" && $scope.user.step == "bac1"){
            const totalLuong  = $scope.user.work * 700;
            $scope.traLoi = $scope.user.gender + ' '+$scope.user.name+' la '+$scope.chucVu+' '+$scope.user.step+' duoc tri tra '+totalLuong+' tien vien!';
        }else if($routeParams.name == ":Nhan Vien" && $scope.user.step == "bac2"){
            const totalLuong  = $scope.user.work * 1400;
            $scope.traLoi = $scope.user.gender + ' '+$scope.user.name+' la '+$scope.chucVu+' '+$scope.user.step+' duoc tri tra '+totalLuong+' tien vien!';
        }else if($routeParams.name == ":Nhan Vien" && $scope.user.step == "bac3"){
            const totalLuong  = $scope.user.work * 2100;
            $scope.traLoi = $scope.user.gender + ' '+$scope.user.name+' la '+$scope.chucVu+' '+$scope.user.step+' duoc tri tra '+totalLuong+' tien vien!';
        }
        //can bo
        if($routeParams.name == ":Can Bo" && $scope.user.step == "bac1"){
            const totalLuong  = $scope.user.work * 1000;
            $scope.traLoi = $scope.user.gender + ' '+$scope.user.name+' la '+$scope.chucVu+' '+$scope.user.step+' duoc tri tra '+totalLuong+' tien vien!';
        }else if($routeParams.name == ":Can Bo" && $scope.user.step == "bac2"){
            const totalLuong  = $scope.user.work * 1700;
            $scope.traLoi = $scope.user.gender + ' '+$scope.user.name+' la '+$scope.chucVu+' '+$scope.user.step+' duoc tri tra '+totalLuong+' tien vien!';
        }else if($routeParams.name == ":Can Bo" && $scope.user.step == "bac3"){
            const totalLuong  = $scope.user.work * 2400;
            $scope.traLoi = $scope.user.gender + ' '+$scope.user.name+' la '+$scope.chucVu+' '+$scope.user.step+' duoc tri tra '+totalLuong+' tien vien!';
        }
        // quan ly
        if($routeParams.name == ":Quan Ly" && $scope.user.step == "bac1"){
            const totalLuong  = $scope.user.work * 1300;
            $scope.traLoi = $scope.user.gender + ' '+$scope.user.name+' la '+$scope.chucVu+' '+$scope.user.step+' duoc tri tra '+totalLuong+' tien vien!';
        }else if($routeParams.name == ":Quan Ly" && $scope.user.step == "bac2"){
            const totalLuong  = $scope.user.work * 2000;
            $scope.traLoi = $scope.user.gender + ' '+$scope.user.name+' la '+$scope.chucVu+' '+$scope.user.step+' duoc tri tra '+totalLuong+' tien vien!';
        }else if($routeParams.name == ":Quan Ly" && $scope.user.step == "bac3"){
            const totalLuong  = $scope.user.work * 2700;
            $scope.traLoi = $scope.user.gender + ' '+$scope.user.name+' la '+$scope.chucVu+' '+$scope.user.step+' duoc tri tra '+totalLuong+' tien vien!';
        }
        
    }
} 