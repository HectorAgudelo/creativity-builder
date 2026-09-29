function debounce(fn, delay) {
    var timeout;
    var debounced = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        clearTimeout(timeout);
        timeout = setTimeout(function () { fn.apply(void 0, args); }, delay);
    };
    debounced.cancel = function () { return clearTimeout(timeout); };
    return debounced;
}
function click(something) {
    console.log(something);
}
var debouncedClick = debounce(click, 500);
debouncedClick("Hello, world!");
debouncedClick("Hello again!");
debouncedClick("And one more time!");
debouncedClick("Final call!");
