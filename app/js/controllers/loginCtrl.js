/*
 *登录功能
 */
define([
    'app',
    'errortip',
    'footer',
    'loginService'
], function(app) {

    app.controller('loginCtrl', ['$scope','loginService',function($scope,service) {
        $scope.mytips = '请正确输入手机号';
        $scope.mytips1 = '';
        $scope.mystatus = true;
        $scope.mystatus1 = true;


        $scope.focus = function(index) {
            if (index == 0) {
                $scope.mystatus = true;

            } else {
                $scope.mystatus1 = true;
            }
        };


        //$scope.blur = function(index) {
        //    if (index == 0) {
        //        ;
        //    }
        //    else{
        //
        //    }
        //};

        $scope.login=function(){
            var result=service.validatorForm(0,$scope.mobile);
            var result1=service.validatorForm(1,$scope.pwd);
            if(!result.flag){
                $scope.mystatus=false;
                $scope.mytips=result.tips;
            }
            if(!result1.flag){
                $scope.mystatus1=false;
                $scope.mytips1=result1.tips;
            }
        };

    	}
    ]);


});
