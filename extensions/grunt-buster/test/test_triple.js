/**
 * User: ryuone
 * Date: 2012/12/05
 * Time: 1:26
 * Licence : MIT
 */
if(typeof module == "object" && typeof require == "function"){
    var buster = require("buster");
    var assert = buster.assertions.assert;
    var define = require('amdefine')(module);
}
define(["../js/triple"], function(triple){
    buster.testCase("Triple UNIT base module", {
        setUp: function(){
        },
        tearDown: function(){
        },
        "get triple value": function(){
            assert.equals(triple.triple(10), 30)
        }
    });
});