/**
 * Created by medibox on 30/7/17.
 */

angular.module('appMain',['appMainCtrl'])

.config(function($stateProvider) {
    $stateProvider

        .state('app.home', {
            url: "/home",
            templateUrl: "modules/main/template/main.html"
        })
});
