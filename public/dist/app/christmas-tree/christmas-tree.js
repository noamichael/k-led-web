System.register(['angular2/core', '../common'], function(exports_1, context_1) {
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
    var core_1, common_1;
    var ChristmasTree;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            ChristmasTree = (function () {
                function ChristmasTree() {
                }
                ChristmasTree.prototype.ngOnInit = function () {
                    this.lightRows = [];
                    var numberOfItemsPerRow = 1, currentLightRow = [];
                    for (var i = 0; i < this.lights.length; i++) {
                        currentLightRow.push(this.lights[i]);
                        if (currentLightRow.length === numberOfItemsPerRow) {
                            numberOfItemsPerRow++;
                            this.lightRows.push(currentLightRow);
                            currentLightRow = [];
                        }
                    }
                };
                ChristmasTree.prototype.getStyleForLight = function (light) {
                    return common_1.getRGBStyle(light);
                };
                ChristmasTree.prototype.ngOnChanges = function (changes) {
                    this.ngOnInit();
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], ChristmasTree.prototype, "lights", void 0);
                ChristmasTree = __decorate([
                    core_1.Component({
                        selector: 'christmas-tree',
                        template: "\n    <div class=\"tree\">\n        <div class=\"light-row\" *ngFor=\"#lightRow of lightRows;\">\n            <div class=\"light\" *ngFor=\"#light of lightRow\" [ngStyle]=\"getStyleForLight(light, i)\"></div>\n        </div>\n        <div class=\"tree-base\"><div>\n    </div>\n    ",
                        styleUrls: ['app/christmas-tree/christmas-tree.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], ChristmasTree);
                return ChristmasTree;
            }());
            exports_1("ChristmasTree", ChristmasTree);
        }
    }
});
