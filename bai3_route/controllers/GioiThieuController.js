window.GioiThieuController = function($scope,$routeParams) {
    // $routeParams  lay ra object cac tham so tren url
    // console.log($routeParams.name);
    $scope.kiemTraDuLieu = {
        ten:false,
        tuoi:false,
    };
    $scope.danhsach = [
        {
            id:1,
            ten: 'Do Phuong Nam',
            tuoi:19
        },
        {
            id:2,
            ten: 'Ng Huu Duy',
            tuoi:20
        },
        {
            id:3,
            ten: 'Ng Huu Thang',
            tuoi:25
        }
    ]
    $scope.onClose = function() {
        $scope.inputValue = {      //RESET LAI INPUT
            ten: "",
            tuoi: ""
        }
    }
    $scope.onSubmitForm = function() {
        if(!$scope.inputValue || !$scope.inputValue.ten) {
            $scope.kiemTraDuLieu.ten = true;
        }if(!$scope.inputValue || !$scope.inputValue.tuoi) {
            $scope.kiemTraDuLieu.tuoi = true;
        }
        //neu nhu khong co loi gi thi xu ly them
        // if(!flag) {
            //xu ly sua
            let editId = $scope.editId;
            // neu nhu ton tai bien edit id thuc hien sua
            if(editId){
                for(let i =0; i< $scope.danhsach.length; i++) {
                    if($scope.danhsach[i].id == editId) {
                        $scope.danhsach[i].ten = $scope.inputValue.ten;
                        $scope.danhsach[i].tuoi = $scope.inputValue.tuoi;
                    }
                }
                $scope.onClose();
                return;
            }
            let ds = $scope.danhsach
            //fake id tang tu dong
            let newId = ds.length > 0 ? ds[ds.length-1].id+1 : 1;
            let newItem = {
                id:newId,
                ten:$scope.inputValue.ten,
                tuoi:$scope.inputValue.tuoi
            };
            //push doi tuong do vao mang
            $scope.danhsach.push(newItem);
            $scope.onClose();
        // }
    }
    $scope.onEdit = function(editId) {
        $scope.editId = editId;
        let editItem = {
            ten: "",
            tuoi: ""
        }
        for(let i = 0; i < $scope.danhsach.length; i++){
            if($scope.danhsach[i].id == editId){
                editItem.ten = $scope.danhsach[i].ten;
                editItem.tuoi = $scope.danhsach[i].tuoi;
            }
        }
        $scope.inputValue = {
            ten:editItem.ten,
            tuoi:editItem.tuoi
        }
    }
}