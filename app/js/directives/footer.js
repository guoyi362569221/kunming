/**
 * Created by jimmy on 16/9/11.
 */
define(['app'],function(app){
    app.directive('footer',function(){
        return {
            templateUrl: '../app/pages/footer.html',
            restrict: 'A',
            replace:true
        }
    });
});