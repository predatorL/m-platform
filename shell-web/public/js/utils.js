window.$ = str => document.querySelector(str);
window.$all = str => document.querySelectorAll(str);
window.__Utils = {};
// args: target, source | Array([[target, source], [target, source]])
__Utils.mountCode = (...args) => {
    if (args.length === 1 && Array.isArray(args[0])) {
        args.forEach(([target, source]) => {
            $(target).innerHTML = $(source).innerHTML;
        });
    }
    if (args.length === 2) {
        $(args[0]).innerHTML = $(args[1]).innerHTML;
    }
};

window.$http = new axios.create({
    baseURL: '/api/'
});
window.$http.interceptors.response.use(
    function(response) {
        // Do something with response data
        return response.data;
    },
    function(error) {
        // Do something with response error
        return Promise.reject(error);
    }
);
