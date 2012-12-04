/**
 * User: ryuone
 * Date: 2012/12/04
 * Time: 23:19
 * License: MIT License
 */
if(typeof define !== 'function'){
    var define = require('amdefine')(module)
}
define(function(){
    function triple(x){
        return x * 3;
    }

    if(typeof require === "function" && typeof module !== "undefined"){
        module.exports.triple = triple;
    } else {
        return {triple: triple};
    }
});