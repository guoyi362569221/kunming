/**
 * Created by jimmy on 2016/04/26.
 */

requirejs.config({
    baseUrl: 'js/',
    paths: {
        angular:'libs/angular.min',
        'ui-router':'libs/angular-ui-router',
        domReady: 'libs/domReady',

        app:'app',
        router:'router',

        loginCtrl:'controllers/loginCtrl',
        errortip:'directives/errortip'
    },
    shim: {
        angular: {
            exports: 'angular'
        },
        'ui-router':{
            deps:['angular'],
            output:'ui-router'
        }
    },
    deps: ['js/bootstrap.js']
});
