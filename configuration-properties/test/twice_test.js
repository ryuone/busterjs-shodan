/**
 * User: ryuone
 * Date: 2012/09/09
 * Time: 18:50
 * License: MIT License
 */
if (typeof module == "object" && typeof require == "function") {
    var buster = require("buster");
    var twice = require("../src/twice.js").twice;
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
