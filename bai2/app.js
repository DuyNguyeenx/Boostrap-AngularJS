function myFunc($scope) { //tất cả các hàm để phải có tham số mặc định $scope
        // xử lý việc render dữ liệu ra khu vực sẽ sử dụng angular js
        $scope.welcome = "hello world"
    }
    
    //khởi tạp angular js và định nghĩa vùng để sử dụng angular js
    var app = angular.module("myapp", [])
    //map demoController với hàm myFunc để xử lý render dữ liệu ra
    app.controller("demoController", myFunc)
    app.controller("infoController",function($scope){
        $scope.info= [
            {
        name:"duyng",
        age:"20",
        phone:"0964678184"
        },{
        name:"ng van a",
        age:"21",
        phone:"0964678***"
        },{
        name:"ng van c",
        age:"22",
        phone:"0964***184"
        }
    ];
    $scope.sayHello = function(){
        $scope.hihi = ($scope.gioitinh == 0) ? "NAM" : "NU";
    }
    $scope.count = 0
    $scope.myMouse = function() {
        $scope.count++;
    }
    $scope.name = "";
    $scope.button = function(){
        let tuoi = new Date().getFullYear() - $scope.namsinh;
        if(tuoi <= 17 || tuoi >= 26 || $scope.gioitinh == "nu"){
            $scope.traloi = $scope.name + "-"+ tuoi +" tuoi"+" khong du dieu kien di";
        }if(tuoi >= 18 && tuoi <= 25 && $scope.gioitinh == "nam"){
            $scope.traloi = $scope.name + "-"+ tuoi +" tuoi"+" du dieu kien di";    
        }
        
    }
    })