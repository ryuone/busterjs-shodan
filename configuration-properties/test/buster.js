/**
 * User: ryuone
 * Date: 2012/09/09
 * Time: 18:50
 * License: MIT License
 */
var config = module.exports;

config["Browser tests"] = {
    sources: [
        "src/twice.js"
    ],
    tests: [
        "test/test*.js"
    ],
    rootPath: "../",
    extensions: [],
    environment: "browser" // "browser" or "node"
};

config["Node tests"] = {
    extends: "Browser tests",
    extensions: [],
    environment: "node" // "browser" or "node"
};
