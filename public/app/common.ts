
export interface Light {
    r: number;
    g: number;
    b: number;
}
export interface Color {
    name: string;
    r: number;
    g: number;
    b: number;
}
export interface ColorRequest {
    color?: Color;
}

export function getRGBStyle(light: Light | Color) {
    return { background: `rgb(${light.r},${light.g},${light.b})` };
}