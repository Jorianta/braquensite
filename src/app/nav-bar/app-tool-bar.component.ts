import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { SocialArrayComponent } from "../components/socials/social-array";
import { Me } from "../util/friends";

@Component({
    selector: "app-nav-bar",
    template:`
        <div class="nav">
            <div routerLink="/">Home</div>
            <!-- <div routerLink="/Gallery">Gallery</div> -->
            <div routerLink="/Characters">Characters</div>
            <div routerLink="/Friends">Friends</div>
        </div>
        <!-- <div routerLink="/Games">Games</div> -->
        
        <social-array [socials]="socials" [scale]='2'></social-array>
        
    `,
    styles: `
    :host{
        position: sticky;

        top:0px;
        padding: 0 20vw;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: fit-content;

        border-width: 1px 0px;
        border-style: solid;
        background-color: var(--braqblack);
        border-color: var(--braqwhite);
    }
    .nav {
        display: flex;
        flex-direction: row;
        align-items: center;

        div{
            cursor: pointer;
            padding: 6px;
        }
        div:hover{
            color: var(--braquenwinkle)
        }
    }
    
    social-array{
        margin: 6px 0px;
    }
    `,
    imports: [
    RouterLink,
    SocialArrayComponent
],
    standalone: true
})
export class AppNavBarComponent {

    socials = Me.socials
}