System.register(['angular2/platform/browser', './k-led-app/k-led-app'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, k_led_app_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (k_led_app_1_1) {
                k_led_app_1 = k_led_app_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(k_led_app_1.KLedApp);
        }
    }
});
