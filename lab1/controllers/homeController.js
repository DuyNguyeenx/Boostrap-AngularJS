window.homeController = function($scope){
    $scope.danhsach = [
        
    ];
    $scope.user = {};
    $scope.kiemTra = {
      ten: true,
      birth: true,
      dantoc: true,
      cccd: true,
      ngaycap:true,
      noicap:true,
      sonha:true,
      phoneSV:true,
      email:true,
      tenPH:true,
      phonePH:true,
      school:true,
      hktt1:true,  
      hktt2:true, 
      hktt3:true, 
      nv1:true,
      nv2:true,
      noitn1:true,  
      noitn2:true,  
      noitn3:true,  
      thisinh:true,
      ph:true,
      hk:true,
      khac:true,
      anhmt:true,
      anhms:true,
      camdoan:true,
      camket:true,
    };
   
    $scope.onEdit = function(editID) {
        $scope.editID = editID;
        let editItem = {
            ten: "",
            birth: "",
            gender: "",
            dantoc: "",
            cccd: "",
            sonha: "",
            phoneSV: "",
            email: "",
        };
        for(let i = 0; i < $scope.danhsach.length; i++) {
            if($scope.danhsach[i].id == editID) {
                editItem.ten = $scope.danhsach[i].ten;
                editItem.birth = $scope.danhsach[i].birth;
                editItem.gender = $scope.danhsach[i].gender;
                editItem.dantoc = $scope.danhsach[i].dantoc;
                editItem.cccd = $scope.danhsach[i].cccd;
                editItem.sonha = $scope.danhsach[i].sonha;
                editItem.phoneSV = $scope.danhsach[i].phoneSV;
                editItem.email = $scope.danhsach[i].email;
            }
        }
        $scope.user = {
            ten: editItem.ten,
            birth: editItem.birth,
            gender: editItem.gender,
            dantoc: editItem.dantoc,
            cccd: editItem.cccd,
            sonha: editItem.sonha,
            phoneSV: editItem.phoneSV,
            email: editItem.email,
        };
    };
    $scope.onClose = function() {
        $scope.user= {
            ten: "",
            birth: "",
            gender: "",
            dantoc: "",
            cccd: "",
            sonha: "",
            phoneSV: "",
            email: "",
        };
        $scope.editID = 0;
    };
    $scope.submit = function() {
        let editID = $scope.editID;
        if(editID){
            for(let i = 0; i < $scope.danhsach.length;i++) {
                if($scope.danhsach[i].id == editID) {
                    $scope.danhsach[i].ten = $scope.user.ten;
                    $scope.danhsach[i].birth = $scope.user.birth;
                    $scope.danhsach[i].gender = $scope.user.gender;
                    $scope.danhsach[i].dantoc = $scope.user.dantoc;
                    $scope.danhsach[i].cccd = $scope.user.cccd;
                    $scope.danhsach[i].sonha = $scope.user.sonha;
                    $scope.danhsach[i].phoneSV = $scope.user.phoneSV;
                    $scope.danhsach[i].email = $scope.user.email;
                }
            }
            $scope.onClose();
            return;
        }
        let ds = $scope.danhsach;
        let newID = ds.length > 0 ? ds[ds.length-1].id+1 : 1 ;
        let ten = $scope.user.ten;
        let birth = $scope.user.birth;
        let gender = $scope.user.gender;
        let dantoc = $scope.user.dantoc;
        let cccd = $scope.user.cccd;
        let sonha = $scope.user.sonha;
        let phoneSV = $scope.user.phoneSV;
        let email = $scope.user.email;
        // validate
        if(!$scope.user || !$scope.user.ten) {
            $scope.kiemTra.ten = false;
        }if(!$scope.user || !$scope.user.birth) {
            $scope.kiemTra.birth = false;
        }if(!$scope.user || !$scope.user.dantoc) {
            $scope.kiemTra.dantoc = false;
        }if(!$scope.user || !$scope.user.cccd) {
            $scope.kiemTra.cccd = false;
        }if(!$scope.user || !$scope.user.ngaycap) {
            $scope.kiemTra.ngaycap = false;
        }if(!$scope.user || !$scope.user.noicap) {
            $scope.kiemTra.noicap = false;
        }if(!$scope.user || !$scope.user.sonha) {
            $scope.kiemTra.sonha = false;
        }if(!$scope.user || !$scope.user.phoneSV) {
            $scope.kiemTra.phoneSV = false;
        }if(!$scope.user || !$scope.user.email) {
            $scope.kiemTra.email = false;
        }if(!$scope.user || !$scope.user.tenPH) {
            $scope.kiemTra.tenPH = false;
        }if(!$scope.user || !$scope.user.phonePH) {
            $scope.kiemTra.phonePH = false;
        }if(!$scope.user || !$scope.user.school) {
            $scope.kiemTra.school = false;
        }if(!$scope.user || !$scope.user.hktt1) {
            $scope.kiemTra.hktt1 = false;
        }if(!$scope.user || !$scope.user.hktt2) {
            $scope.kiemTra.hktt2 = false;
        }if(!$scope.user || !$scope.user.hktt3) {
            $scope.kiemTra.hktt3 = false;
        }if(!$scope.user || !$scope.user.nv1) {
            $scope.kiemTra.nv1 = false;
        }if(!$scope.user || !$scope.user.nv2) {
            $scope.kiemTra.nv2 = false;
        }if(!$scope.user || !$scope.user.noitn1) {
            $scope.kiemTra.noitn1 = false;
        }if(!$scope.user || !$scope.user.noitn2) {
            $scope.kiemTra.noitn2 = false;
        }if(!$scope.user || !$scope.user.noitn3) {
            $scope.kiemTra.noitn3 = false;
        }if(!$scope.user || !$scope.user.thisinh) {
            $scope.kiemTra.thisinh = false;
        }if(!$scope.user || !$scope.user.ph) {
            $scope.kiemTra.ph = false;
        }if(!$scope.user || !$scope.user.hk) {
            $scope.kiemTra.hk = false;
        }if(!$scope.user || !$scope.user.khac) {
            $scope.kiemTra.khac = false;
        }if(!$scope.user || !$scope.user.anhmt) {
            $scope.kiemTra.anhmt = false;
        }if(!$scope.user || !$scope.user.anhms) {
            $scope.kiemTra.anhms = false;
        }if(!$scope.user || !$scope.user.anhtn) {
            $scope.kiemTra.anhtn = false;
        }if(!$scope.user || !$scope.user.camdoan) {
            $scope.kiemTra.camdoan = false;
        }if(!$scope.user || !$scope.user.camket) {
            $scope.kiemTra.camket = false;
        }

        if(
            $scope.kiemTra.ten == true &&
            $scope.kiemTra.birth == true &&
            $scope.kiemTra.dantoc == true &&
            $scope.kiemTra.cccd == true &&
            $scope.kiemTra.sonha == true &&
            $scope.kiemTra.phoneSV == true &&
            $scope.kiemTra.email == true 
        ){
            $scope.danhsach.push({
                id:newID,
                ten:ten,
                birth:birth,
                gender:gender,
                dantoc:dantoc,
                cccd:cccd,
                sonha:sonha,
                phoneSV:phoneSV,
                email:email
            })  ; 
        }
    }
}