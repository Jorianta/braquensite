import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
    selector: "app-nav-bar",
    template:`
        
        <div routerLink="/">Home</div>
        
        <div routerLink="/Gallery">Gallery</div>
        
        <div routerLink="/Characters">Characters</div>
        
        <!-- <div routerLink="/Games">Games</div> -->
        
        
    `,
    styles: `
    :host{
        position: sticky;

        top:0px;

        padding-left: 25vw;
        display: flex;
        flex-direction: row;
        height: fit-content;
        align-items: center;

        border-width: 1px 0px;
        border-style: solid;
        background-color: var(--braqblack);
        border-color: var(--braqwhite);
    }

    div{
        cursor: pointer;
        padding: 6px;
    }
    div:hover{
        color: var(--braquenwinkle)
    }
    `,
    imports: [
        RouterLink
    ],
    standalone: true
})
export class AppNavBarComponent {

}