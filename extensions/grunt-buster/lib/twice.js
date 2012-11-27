/**
 * User: ryuone
 * Date: 2012/09/09
 * Time: 18:49
 * License: MIT License
 */
function twice(x){
    return x * 2;
}
if(typeof require === "function" && typeof module !== "undefined"){
    module.exports.twice = twice;
}