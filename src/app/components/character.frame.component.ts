import { Component, input } from "@angular/core";
import { BalatroFrameComponent } from "./balatro-frame/balatro-frame.component";
import { ScaleImage } from "./scale-image.component";


@Component({
    selector: "character-frame",
    template: `
    <balatro-frame>
        <scale-image [src]="src()" [scale]="3"></scale-image>
        <scale-image draggable="false" shadow [src]="src()" [scale]="3"></scale-image>
    </balatro-frame>
    `,
    styles:`
    img {
        scale: 3;
        user-drag: none;
        -webkit-user-drag: none;
        user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
    }
    `,
    imports: [BalatroFrameComponent, ScaleImage]
})
export class CharacterFrameComponent{
    src = input.required<string>()
}