import { Component, computed, input, numberAttribute } from "@angular/core";
import { Social } from "../../util/util";
import { BalatroFrameComponent } from "../balatro-frame/balatro-frame.component";

@Component({
    selector: 'social-icon',
    template: `
        <a [href]='link()' target="_blank">
                <img [width]="16*scale()" [height]="16*scale()" [src]="icon()" >
        </a>
    `,
    styles: `
        :host{
            display: contents;
        }
        a{
            display: contents;
            // width: fit-content;
            // height: fit-content;
        }
    
    `,
    imports: [BalatroFrameComponent]
})
export class SocialIcon {
    
    social = input.required<Social>()
    icon = computed(() => `/icons/socials/${this.social()}.png`)

    link = input.required<string>()
    scale = input<number, string | number>(1, {transform: numberAttribute});

}