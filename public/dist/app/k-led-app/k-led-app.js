System.register(['angular2/core', 'angular2/http', "../christmas-tree/christmas-tree", "../common"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, christmas_tree_1, common_1;
    var KLedApp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (christmas_tree_1_1) {
                christmas_tree_1 = christmas_tree_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            KLedApp = (function () {
                function KLedApp(http) {
                    var _this = this;
                    var CONNECTION_URL = window.location.host.indexOf("localhost") > -1 ? "192.168.1.195" : "69.121.190.207";
                    this.http = http;
                    this.websocket = new WebSocket("ws://" + CONNECTION_URL + ":4567/lights");
                    this.websocket.onmessage = function (event) { return _this.handleWebsocketMessage(JSON.parse(event.data)); };
                    http.get("http://" + CONNECTION_URL + ":4567/colors").subscribe(function (res) {
                        _this.colors = res.json();
                    });
                    this.lights = [];
                    for (var i = 0; i < 265; i++) {
                        this.lights.push({ r: this.rgb(), g: this.rgb(), b: this.rgb() });
                    }
                }
                KLedApp.prototype.randomizeColors = function () {
                    var _this = this;
                    this.lights.forEach(function (light) {
                        light.r = _this.rgb();
                        light.g = _this.rgb();
                        light.b = _this.rgb();
                    });
                };
                KLedApp.prototype.handleWebsocketMessage = function (colorRequest) {
                    this.handleColorRequest(colorRequest.color);
                };
                KLedApp.prototype.handleColorRequest = function (color) {
                    this.lights.forEach(function (light) {
                        light.r = color.r;
                        light.g = color.g;
                        light.b = color.b;
                    });
                };
                KLedApp.prototype.getRGBStyle = function (color) {
                    return common_1.getRGBStyle(color);
                };
                KLedApp.prototype.rgb = function () {
                    return this.randomNumber(0, 255);
                };
                KLedApp.prototype.randomNumber = function (min, max) {
                    return Math.floor(Math.random() * max) + min;
                };
                KLedApp = __decorate([
                    core_1.Component({
                        selector: 'k-led-app',
                        providers: [http_1.HTTP_PROVIDERS],
                        templateUrl: 'app/k-led-app/k-led-app.html',
                        directives: [christmas_tree_1.ChristmasTree]
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], KLedApp);
                return KLedApp;
            }());
            exports_1("KLedApp", KLedApp);
        }
    }
});
