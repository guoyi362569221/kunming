/**
 * Created by jimmy on 16/9/21.
 */
define(['app'],function(app){
    app.controller('docDetailCtrl',['$scope','$stateParams',function($scope,$stateParams){
        $scope.id=$stateParams.docid;

        $scope.basicInfo=[{
            name:'发送人',
            val:'张三'
        },{
            name:'发送时间',
            val:'2016年3月3日',
        },{
            name:'说明',
            val:'国家行政学院教授竹立家表示，现在好多人认为农民失了身份就会失地，其实不是这样。居民制度不是剥夺农民的财产，而是给予农民平等的身份，平等的待遇。',
        }]
    }]);
});