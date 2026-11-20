import { Component, computed, input, numberAttribute } from "@angular/core";
import { Social, Socials } from "../../util/util";
import { SocialIcon } from "./social-icon";

@Component({
    selector: `social-array`,
    template: `
        @for(entry of entries(); track entry[1]){
            <social-icon [scale]='scale()' [social]='entry[0]' [link]="entry[1]"></social-icon>
        }
    `,
    styles: `
    :host{
        display: flex;
        // gap: 6px;
    }
    `,
    host: {
        '[style.gap.px]': 'scale()*3'
    },
    imports: [
        SocialIcon
    ]
})
export class SocialArrayComponent{
    socials = input.required<Socials>()

    entries = computed(() => Object.entries(this.socials()) as [Social, string][])
    scale = input<number, string | number>(1, {transform: numberAttribute});
}