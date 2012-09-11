var config = module.exports;
config["buster-amd"] = {
    environment: "browser",
    rootPath: ".",
    sources: ["src/main.js"],
    tests: ["test/*test.js"],
    libs: ["lib/require.js"],
    extensions: [require("buster-amd")],
    "buster-amd": {
//        pathMapper: function (path) {
//            return path.replace(/\.js$/, "").replace(/^\//, "");
//        }
    }
};
