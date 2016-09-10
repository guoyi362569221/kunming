/**
 * Created by jimmy on 16/9/11.
 */

define(['app'],function (app) {
    app.service('loginService',[function () {
        this.validatorForm = function (index, val) {
            var result={
                flag:true,
                tips:''
            };
            //用户名
            if (index == 0) {
                if(!val){
                    result.tips='请输入手机号';
                    result.flag=false;
                }else {
                    val = val.trim();
                    var reg = /^1\d{10}$/;
                    if (!reg.test(val)) {
                        result.tips='请正确输入手机号';
                        result.flag=false;
                    }
                }
            }else{
                if(!val){
                    result.flag=false;
                    result.tips='请输入密码';
                }
            }
            return result;
        };

        return {
            validatorForm: this.validatorForm
        }
    }]);
});