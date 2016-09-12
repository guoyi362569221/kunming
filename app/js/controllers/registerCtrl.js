/*
 *登录功能
 */
define([
    'app',
    'errortip',
    'footer',
    'registerService'
], function(app) {

    app.controller('registerCtrl', ['$scope','registerService',function($scope,service) {
        $scope.mytips = '';
        $scope.mytips1 = '';
        $scope.mytips2 = '';
        $scope.mytips3 = '';
        $scope.mytip4 = '请选择身份证照';
        $scope.mytips5 = '请选择电子签名';
        $scope.mystatus = true;
        $scope.mystatus1 = true;
        $scope.mystatus2 = true;
        $scope.mystatus3 = true;
        $scope.mystatus4 = true;
        $scope.mystatus5 = true;
        //
        //
        //$scope.focus = function(index) {
        //    if (index == 0) {
        //        $scope.mystatus = true;
        //
        //    } else {
        //        $scope.mystatus1 = true;
        //    }
        //};
        //
        //$scope.login=function(){
        //    var result=service.validatorForm(0,$scope.mobile);
        //    var result1=service.validatorForm(1,$scope.pwd);
        //    if(!result.flag){
        //        $scope.mystatus=false;
        //        $scope.mytips=result.tips;
        //    }
        //    if(!result1.flag){
        //        $scope.mystatus1=false;
        //        $scope.mytips1=result1.tips;
        //    }
        //};

    	}
    ]);


});
