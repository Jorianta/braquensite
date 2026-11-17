import { Component } from "@angular/core";
import { BalatroFrameComponent } from "./balatro-frame/balatro-frame.component";


@Component({
    selector: "logo-box",
    template:`
    <balatro-frame>
        <img id="logo" src="/logo.png">
        <img shadow src="/logo.png">
    </balatro-frame>
    `,
    styles: `
    :host{
        padding: 20px 0px;
        width: fit-content;
        display: flex;
        justify-content: center;
        background-color: var(--braquenwinkle);
    }
    
    
    `,
    standalone: true,
    imports: [BalatroFrameComponent]
})
export class BannerComponent {

}