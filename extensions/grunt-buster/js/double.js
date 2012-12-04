/**
 * User: ryuone
 * Date: 2012/09/09
 * Time: 18:49
 * License: MIT License
 */
if(typeof define !== 'function'){
    var define = require('amdefine')(module)
}
define(function(){
    function double(x){
        return x * 2;
    }

    if(typeof require === "function" && typeof module !== "undefined"){
        module.exports.double = double;
    } else {
        return {double: double};
    }
});
