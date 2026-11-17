import { Component, input } from "@angular/core";
import { BalatroFrameComponent } from "./balatro-frame/balatro-frame.component";


@Component({
    selector: "character-frame",
    template: `
    <balatro-frame>
        <img draggable="false" [src]="src()">
        <img draggable="false" shadow [src]="src()">
    </balatro-frame>
    `,
    styles:`
    img {
        user-drag: none;
        -webkit-user-drag: none;
        user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
    }
    `,
    imports: [BalatroFrameComponent]
})
export class CharacterFrameComponent{
    src = input.required<string>()
}