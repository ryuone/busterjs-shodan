/**
 * User: ryuone
 * Date: 2012/11/28
 * Time: 0:43
 * License: MIT License
 */
require({
    baseUrl: requirejs.isBrowser ? '../' : './'
}, ["js/double"], function(double){
    console.log(double.double(100));
});