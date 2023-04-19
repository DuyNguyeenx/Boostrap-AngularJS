window.homeController = function($scope,$http,$location){
    let api = "http://localhost:5501/profile";
    $http.get(api).then(function(response){
        $scope.list = response.data;
    });
    $scope.onEdit = function(id){
        $location.path('/edit/'+id);
    }
    $scope.add = function(){
        $location.path('/add');
    }
}