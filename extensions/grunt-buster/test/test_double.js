/**
 * User: ryuone
 * Date: 2012/11/28
 * Time: 0:47
 * Licence : MIT
 */
if(typeof module == "object" && typeof require == "function"){
    var buster = require("buster");
    var assert = buster.assertions.assert;
    var define = require('amdefine')(module);
}
define(["../js/double"], function(double){
    buster.testCase("Double UNIT base module", {
        setUp: function(){
        },
        tearDown: function(){
        },
        "get double value": function(){
            assert.equals(double.double(10), 20)
        }
    });
});
