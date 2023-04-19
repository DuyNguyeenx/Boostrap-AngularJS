window.addController = function($scope,$http,$location){
    let api = "http://localhost:5501/profile"
    $scope.user = {};
    $scope.kiemTra = {
        name:false,
        gender:false,
        address:false,
        age:false
    }
    $scope.submit = function(){
        if($scope.user.name == undefined || $scope.user.name == ""){
            $scope.kiemTra.name = true;
        }else {
            $scope.kiemTra.name = false;
        }
        if($scope.user.gender == undefined || $scope.user.gender == ""){
            $scope.kiemTra.gender = true;
        }else {
            $scope.kiemTra.gender = false;
        }
        if($scope.user.address == undefined || $scope.user.address == ""){
            $scope.kiemTra.address = true;
        }else {
            $scope.kiemTra.address = false;
        }
        if($scope.user.age == undefined || $scope.user.age == ""){
            $scope.kiemTra.age = true;
        }else {
            $scope.kiemTra.age = false;
        }
        if($scope.kiemTra.name == false &&
            $scope.kiemTra.gender == false &&
            $scope.kiemTra.address == false &&
            $scope.kiemTra.age == false){
                $http.post(api,$scope.user).then(function(response){
                    alert('them thanh cong');
                    $location.path('/');
                })
            }
            
        
}
}
