/**
 * User: ryuone
 * Date: 2012/11/28
 * Time: 0:37
 * License : MIT
 */
var config = module.exports;
config["Browser tests"] = {
    sources: [
        "js/twice.js"
    ],
    tests: [
        "test/test*.js"
    ],
    libs: ["lib/require.js"],
    rootPath: "../",
    extensions: [require("buster-amd")],
    environment: "browser" // "browser" or "node"
};
config["Node tests"] = {
    extends: "Browser tests",
    extensions: [],
    environment: "node" // "browser" or "node"
};
