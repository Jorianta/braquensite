import { Component } from "@angular/core";


@Component({
    selector: "logo-box",
    template:`
        <img id="logo" src="/logo.png">
    `,
    styles: `
    :host{
        width: fit-content;
        display: flex;
        justify-content: center;
        background-color: var(--braquenwinkle);
    }
    `,
    standalone: true
})
export class BannerComponent {

}