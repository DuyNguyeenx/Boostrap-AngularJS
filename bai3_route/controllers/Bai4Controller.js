window.Bai4Controller = function($scope) {
    $scope.calculate = function () {
        var a = parseFloat($scope.length);
        var b = parseFloat($scope.width);
        $scope.dientich = a*b;
        $scope.chuvi = (a+b) *2;
    }
}