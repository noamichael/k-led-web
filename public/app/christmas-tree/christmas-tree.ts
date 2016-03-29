import {Component, Input} from 'angular2/core';
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

    getStyleForLight(light: Light, index: number) {
        return { background: `rgb(${light.r},${light.g},${light.b})` };
    }
    ngOnChanges(changes) {
        this.ngOnInit();
    }

}
export interface Light {
    r: number;
    g: number;
    b: number;
}