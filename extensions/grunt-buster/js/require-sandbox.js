/**
 * User: ryuone
 * Date: 2012/11/28
 * Time: 0:43
 * License: MIT License
 */
require({
    baseUrl: requirejs.isBrowser ? '../' : './'
}, ["js/twice"], function(twice){
    console.log(twice.twice(100));
});