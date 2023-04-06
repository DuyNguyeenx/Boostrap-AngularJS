window.SignInController = function($scope) {
    $scope.signin = {};
    $scope.kiemTra = {
        name:false,
        pass:false,
    }
    $scope.login = function() {
        if($scope.signin.name == undefined || $scope.signin.name == ""){
            $scope.kiemTra.name = true;
        }else{
            $scope.kiemTra.name = false;
        }
        if($scope.signin.pass == undefined || $scope.signin.pass == ""){
            $scope.kiemTra.pass = true;
        }else{
            $scope.kiemTra.pass = false;
        }
    }
}