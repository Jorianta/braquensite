import { Component } from "@angular/core";
import { CharacterFrameComponent } from "../components/character.frame.component";
import { RouterLink } from "@angular/router";
import { DancingLettersComponent } from "../components/dancing-letters/dancing-letters.component";
import { friends } from "../util/friends";
import { FriendFrameComponent } from "../components/friend-frame.component";
import { shuffle } from "../games/games.util";

@Component({
    selector: 'friends-page',
    template: `
        <h1 id="header">- <dancing-letters text="Friends"></dancing-letters> -</h1>
        <div id='gallery'>

            @for(friend of friends; track friend.portrait){
                <friend-frame [friend]="friend"></friend-frame>
            }
            @for(friend of friends; track friend.portrait){
                <friend-frame [friend]="friend"></friend-frame>
            }

        </div>
    `,
    imports: [
        FriendFrameComponent,
        DancingLettersComponent
    ],
    styleUrl: `page.css`,
    styles: `
    :host{
        background-color: var(--braquenwinkle); 
    }
    #header{
        text-align: center;
        color: var(--braqblack)
    }
    #gallery{
        justify-content: space-evenly;
        align-items: center;
        display: flex;
        flex-wrap: wrap
    }
    friend-frame{
        margin: 20px;
    }
    `
    
})
export class FriendsPage {
    friends = shuffle(friends);
}
