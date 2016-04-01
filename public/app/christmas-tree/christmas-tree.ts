import {Component, Input} from 'angular2/core';
import {Light, getRGBStyle} from '../common';
@Component({
    selector: 'christmas-tree',
    template: `
    <div class="tree">
        <div class="light-row" *ngFor="#lightRow of lightRows;">
            <div class="light" *ngFor="#light of lightRow" [ngStyle]="getStyleForLight(light, i)"></div>
        </div>
        <div class="tree-base"><div>
    </div>
    `,
    styleUrls: ['app/christmas-tree/christmas-tree.css']
})
export class ChristmasTree {
    @Input() lights: Light[]
    lightRows: Light[][];

    ngOnInit() {
        this.lightRows = [];
        var numberOfItemsPerRow = 1, currentLightRow: Light[] = [];
        for (let i = 0; i < this.lights.length; i++) {
            currentLightRow.push(this.lights[i]);
            if (currentLightRow.length === numberOfItemsPerRow) {
                numberOfItemsPerRow++;
                this.lightRows.push(currentLightRow);
                currentLightRow = [];
            }
        }
    }

    getStyleForLight(light: Light) {
        return getRGBStyle(light);
    }
    ngOnChanges(changes) {
        this.ngOnInit();
    }

}