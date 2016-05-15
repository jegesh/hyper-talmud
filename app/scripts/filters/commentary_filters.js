'use strict';

angular.module('gemaraBooster').filter('openingWords', function(){
    return function(text){
        if(!text[0]){
            return '<span></span>';
        }
        if(Array.isArray(text)){
            var result = "";
            for (var i = 0;i < text.length;i++){
                text[i] = text[i].replace(String.fromCharCode(8211), '-');
                var textArr = text[i].split('-');

                var opening = '<span class="commentary-opening">' + textArr[0] + ".</span>";
                var mainTxt = '<span class="commentary-text">' + textArr[1] + ":</span>";
                result += opening + mainTxt;
            }
            return result;
        }
        text = text.replace(String.fromCharCode(8211), '-');
        var textArr = text.split('-');

        var opening = '<span class="commentary-opening">' + textArr[0] + "</span>";
        var mainTxt = '<span class="commentary-text">' + textArr[1] + "</span>";
        return opening + mainTxt;
    };
});
