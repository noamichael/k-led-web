import {Component} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {ChristmasTree} from "../christmas-tree/christmas-tree";
import { Light, Color, ColorRequest,getRGBStyle} from "../common";

@Component({
    selector: 'k-led-app',
    providers: [HTTP_PROVIDERS],
    templateUrl: 'app/k-led-app/k-led-app.html',
    directives: [ChristmasTree]
})
export class KLedApp {
    lights: Light[]
    colors: Color
    http: Http
    websocket: WebSocket
    selectedColor: Color
    constructor(http: Http) {
        let CONNECTION_URL = window.location.host.indexOf("localhost") > -1 ? "192.168.1.195" : "69.121.190.207";
        this.http = http;
        this.websocket = new WebSocket(`ws://${CONNECTION_URL}:4567/lights`);
        this.websocket.onmessage = (event) => this.handleWebsocketMessage(JSON.parse(event.data));

        http.get(`http://${CONNECTION_URL}:4567/colors`).subscribe(res => {
            this.colors = res.json();
        });
        this.lights = [];
        for (let i = 0; i < 265; i++) {
            this.lights.push({ r: this.rgb(), g: this.rgb(), b: this.rgb() });
        }

    }

    randomizeColors() {
        this.lights.forEach((light) => {
            light.r = this.rgb();
            light.g = this.rgb();
            light.b = this.rgb();
        });
    }
    handleWebsocketMessage(colorRequest: ColorRequest) {
         this.handleColorRequest(colorRequest.color);

    }
    handleColorRequest(color: Color) {
        this.lights.forEach((light) => {
            light.r = color.r;
            light.g = color.g;
            light.b = color.b;
        });
    }
    getRGBStyle(color: Color){
        return getRGBStyle(color);
    }
   

    private rgb() {
        return this.randomNumber(0, 255);
    }
    private randomNumber(min: number, max: number) {
        return Math.floor(Math.random() * max) + min;
    }

}