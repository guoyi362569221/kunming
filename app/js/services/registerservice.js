/**
 * Created by jimmy on 16/9/11.
 */

define(['app'],function (app) {
    app.service('registerService',[function () {
        this.validatorForm = function (index, val) {
            var result={
                flag:true,
                tips:''
            };
            switch(index){
                case 0:
                    var reg=/^[\u4e00-\u9fa5]{2,5}$/;
                    if (!reg.test(val)) {
                        result.tips='请正确输入姓名';
                        result.flag=false;
                    }
                    break;
                case 1:
                    var reg = /^1\d{10}$/;
                    if (!reg.test(val)) {
                        result.tips='请正确输入手机号';
                        result.flag=false;
                    }
                    break;
                case 2:
                    if(!val){
                        result.flag=false;
                        result.tips='请输入密码';
                    }
                    break;
                case 3:
                    //if()
                    break;
                default:
                    break;
            }
            return result;
        };

        return {
            validatorForm: this.validatorForm
        }
    }]);
});