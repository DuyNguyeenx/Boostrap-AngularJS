window.listCustomerController = function($scope,$http) {
    let apiUrl = "http://localhost:5501/customer"; 
    $http.get(apiUrl).then(function(reponse) {
        $scope.danhsach = reponse.data
    });
}