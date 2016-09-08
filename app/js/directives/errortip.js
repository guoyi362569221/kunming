/*
* 错误提示指令 
*	
*/

define(['app'],function (app) {
	
	app.directive('errortip',function(){
		return {
			scope:{
				tipwords:'=mytips',
			},
			restrict:'A',
			template:'<div class="login-form"><div class="common-error-tips"><div>{{tipwords}}<div></div></div>',
			replace:true
		}
	});

});