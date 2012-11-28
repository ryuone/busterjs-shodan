/**
 * User: ryuone
 * Date: 2012/11/28
 * Time: 0:47
 * Licence : MIT
 */
if(typeof module == "object" && typeof require == "function"){
    var buster = require("buster");
    var assert = buster.assertions.assert;
    var requirejs = require('requirejs');
}
requirejs({
    baseUrl: requirejs.isBrowser ? './' : './'
}, ["js/twice"], function(twice){
    buster.testCase("UNIT base module", {
        setUp: function(){
        },
        tearDown: function(){
        },
        "get twice value": function(){
            assert.equals(twice.twice(10), 20)
        }
    });
});
