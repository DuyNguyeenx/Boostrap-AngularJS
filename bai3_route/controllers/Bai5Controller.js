window.Bai5Controller = function($scope) {
    $scope.student = {};
    $scope.check = function() {
    var a = parseFloat($scope.student.mark);
    if(a<5){
        $scope.student.grade = "Failed";
    }else{
        $scope.student.grade = "Passed";
    }
}
}