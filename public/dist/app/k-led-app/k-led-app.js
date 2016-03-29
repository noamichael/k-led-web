System.register(['angular2/core', "../christmas-tree/christmas-tree"], function(exports_1, context_1) {
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
    var core_1, christmas_tree_1;
    var KLedApp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (christmas_tree_1_1) {
                christmas_tree_1 = christmas_tree_1_1;
            }],
        execute: function() {
            KLedApp = (function () {
                function KLedApp() {
                    var _this = this;
                    this.lights = [];
                    for (var i = 0; i < 265; i++) {
                        this.lights.push({ r: this.rgb(), g: this.rgb(), b: this.rgb() });
                    }
                    setInterval(function () {
                        _this.randomizeColors();
                    }, 3000);
                }
                KLedApp.prototype.randomizeColors = function () {
                    var _this = this;
                    this.lights.forEach(function (light) {
                        light.r = _this.rgb();
                        light.g = _this.rgb();
                        light.b = _this.rgb();
                    });
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
                        templateUrl: 'app/k-led-app/k-led-app.html',
                        directives: [christmas_tree_1.ChristmasTree]
                    }), 
                    __metadata('design:paramtypes', [])
                ], KLedApp);
                return KLedApp;
            }());
            exports_1("KLedApp", KLedApp);
        }
    }
});
