import { Component, computed, HostBinding, input } from "@angular/core";
import { BalatroFrameComponent } from "./balatro-frame/balatro-frame.component";
import { Friend } from "../util/util";


@Component({
    selector: "friend-frame",
    template: `
    @let url = link();
    @if(url){
        <a [href]='url ?? null' target="_blank">
            <balatro-frame>
                <img draggable="false" [src]="portrait()">
                <img draggable="false" shadow [src]="portrait()">
            </balatro-frame>
        </a>
    }
    @else{
        <balatro-frame>
            <img draggable="false" [src]="portrait()">
            <img draggable="false" shadow [src]="portrait()">
        </balatro-frame>
    }
    <h3 class='name'>{{friend().name}}</h3>
    @let title = friend().title;
    
    <div class='title'>{{title ?? ''}}</div>

    `,
    styles:`
    :host {
        color: var(--braqblack);
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    img {
        width: 128px;
        height: 128px;
        user-drag: none;
        -webkit-user-drag: none;
        user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;

        border-style: solid;
        border-image: url("/frame.png") fill 12 / 24px / 12px repeat;
        margin: 20px;
    }
    .name{
       
        margin: 0px;
    }
    .title{
        height: 20px;
    }
    .title:not(:empty)::before, .title:not(:empty)::after{
        content: '"';
    }
    `,
    imports: [BalatroFrameComponent]
})
export class FriendFrameComponent{
    friend = input.required<Friend>()

    portrait = computed(() => {
        let portrait = this.friend().portrait ?? 'unknown';
        return `/portraits/friends/${portrait}.png`
    })
    link = computed(() => this.friend().website)
}