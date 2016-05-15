'use strict';

angular.module('gemaraBooster').controller('DafCtrl',
['$scope', '$resource', '$http', function($scope, $resource, $http){

    var _init = function(){
        $scope.getText('Berakhot.2b', function(data){
            $scope.talmud = data.he;
            console.log("length "+ $scope.talmud.length);
            $scope.$digest();
            $scope.getText('Rashi_on_Berakhot.2b.1-3a.1', function(data){
                $scope.rashi = data.he[0];
                $scope.$digest();
            });
            $scope.getText('Tosafot_on_Berakhot.2b.1-2b.'+ $scope.talmud.length.toString(), function(data){
                $scope.tosafot = data.he[0];
                $scope.$digest();
            });
        });

    };

    $scope.hello = 'hello world';

    $scope.getText = function getText(endPoint, callback){
        // var res = $resource("http://www.sefaria.org/api/texts/"+endPoint, {"callback":"?"},
        //     {'jsonp':{
        //             method: "JSONP",
        //             isArray: false
        //         }
        // });
        // var promise = res.jsonp();
        // promise.$promise.then(function(data){
        //     debugger;
        //     callback(data);
        // });
        $.getJSON("http://www.sefaria.org/api/texts/"+endPoint+"?callback=?&commentary=0", function(data){

            callback(data);
        });
    };

    $scope.highlightText = function(idx){
        $(".daf-columns .highlightable").each(function(){
            $(this).find("span").eq(idx).toggleClass("highlighted");
        });
    };

    _init();


}]);
