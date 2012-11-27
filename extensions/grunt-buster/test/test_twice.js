/**
 * User: ryuone
 * Date: 2012/11/28
 * Time: 0:47
 * Licence : MIT
 */
if (typeof module == "object" && typeof require == "function") {
    var buster = require("buster");
    var twice = require("../lib/twice.js").twice;
    var assert = buster.assertions.assert;
}

buster.testCase("UNIT base module", {
    setUp : function(){
    },

    tearDown : function(){
    },

    "get twice value": function () {
        assert.equals(twice(10), 20)
    }
});
