/**
 * Created by jimmy on 16/9/21.
 */
define(['app'],function(app){
    app.controller('myDesktopCtrl',['$scope',function($scope){
        $scope.docArr=[{
            id:1,
            status:true,
            name:'超电压昆明项目文件',
            downloadUrl:''
        },{
            id:2,
            status:true,
            name:'南宁电力高压输电项目',
            downloadUrl:''
        },{
            id:3,
            status:true,
            name:'武汉洪山电力改造工程文件',
            downloadUrl:''
        },{
            id:4,
            status:true,
            name:'兰州高压输电项目文件',
            downloadUrl:''
        },{
            id:5,
            status:false,
            name:'襄阳电力改造工程项目文件',
            downloadUrl:''
        }];

        $scope.showDocDeailInfo=function(id){
            window.location.href='index.html#/docdetail/' + id;
        }
    }]);
});