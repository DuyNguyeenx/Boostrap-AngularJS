window.Bai5Controller = function($scope) {
    $scope.student = {};
    $scope.check = function() {
    var a = parseFloat($scope.student.mark);
    if(a>=0 && a<5){
        $scope.student.grade = "Failed";
    }else if(a<=10){
        $scope.student.grade = "Passed";
    }else{
        $scope.student.grade = "Nhap sai"
    }
}
}