window.productController = function($scope,$http,$location){
    let apiUrl = "http://localhost:5501/thithu"; 
    
        //gọi api sử dụng phương thức get để lấy toàn bộ dữ liệu
        $http.get(apiUrl).then(function (reponse) {
          // sau khi đón được thành công dữ liệu thì dữ liệu sẽ nằm ở
          //reponse
          // if (reponse.status == 200) {
          //   console.log(reponse);
            $scope.danhsach = reponse.data;
        //   }
        });
        $scope.onEdit = function(id) {
          $location.path("/edit/" + id);
        }
      // };
      // $scope.getData();
      
}