window.editController = function($scope,$http,$location,$routeParams){
    let api = "http://localhost:5501/profile/" + $routeParams.id;
    $scope.user = {};
    $http.get(api).then(function(response){
        $scope.user= response.data;
    });
    $scope.update = function(){
        $http.put(api,$scope.user).then(function(response){
            alert('update thanh cong!');
            $location.path('/');
        })
    }
}