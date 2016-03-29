import {Component} from 'angular2/core';
import {ChristmasTree, Light} from "../christmas-tree/christmas-tree";

@Component({
    selector: 'k-led-app',
    templateUrl: 'app/k-led-app/k-led-app.html',
    directives: [ChristmasTree]
})
export class KLedApp {
    lights: Light[]
    constructor() {
        this.lights = [];
        for (let i = 0; i < 265; i++) {
            this.lights.push({ r: this.rgb() , g: this.rgb(), b: this.rgb() });
        }
        setInterval(() => {
            this.randomizeColors();
        }, 3000);

    }

    randomizeColors() {
        this.lights.forEach((light) => {
            light.r = this.rgb();
            light.g = this.rgb();
            light.b = this.rgb();
        });
    }
    private rgb() {
        return this.randomNumber(0, 255);
    }
    private randomNumber(min: number, max: number) {
        return Math.floor(Math.random() * max) + min;
    }

}