/**
 * Created by jimmy on 16/9/21.
 */
define(['app'],function(app){
    app.controller('docDetailCtrl',['$scope','$stateParams','$filter',function($scope,$stateParams,$filter){
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
        }];

        $scope.currentProcess=1;
        //选择通过或者退审
        $scope.doChoose=function(index){
            $scope.currentProcess = 2;
            if(index==0){
                $scope.preveResult ='通过';
                $scope.originOption ='同意。';

            }else{
                $scope.preveResult ='退审';
                $scope.originOption ='不同意。';
            }
        };

        $scope.recheck=function(status){
            $scope.currentProcess = status;
        };

        $scope.checkNext=function(){
            $scope.currentProcess = 3;
        }
        $scope.nowTime = $filter("date")(new Date(), "yyyy-MM-dd");





    }]);
});


function allowDrop(ev){
    ev.preventDefault();
}

function drag(ev){
    ev.dataTransfer.setData("Text",ev.target.id);
}

function drop(ev){
    ev.preventDefault();
    var data=ev.dataTransfer.getData("Text");
    ev.target.appendChild(document.getElementById(data));
}