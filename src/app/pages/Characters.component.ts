import { Component } from "@angular/core";
import { CharacterFrameComponent } from "../components/character.frame.component";
import { RouterLink } from "@angular/router";
import { DancingLettersComponent } from "../components/dancing-letters/dancing-letters.component";

@Component({
    selector: 'character-gallery',
    template: `
        <h1 id="header">- <dancing-letters text="Characters"></dancing-letters> -</h1>
        <div  id='gallery'>
            <character-frame src="/portraits/braq.png" routerLink="Braq"></character-frame>
            <character-frame src="/portraits/bird.png" routerLink="Braq_Bird"></character-frame>
            <character-frame src="/portraits/teeny_tiny.png" routerLink="Teeny_and_Tiny"></character-frame>
            <character-frame src="/portraits/darryl.png" routerLink="Darryl"></character-frame>
            <character-frame src="/portraits/big_bird.png" routerLink="Big_Bird"></character-frame>
        </div>
    `,
    imports: [
        CharacterFrameComponent,
        RouterLink,
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
    character-frame{
        margin: 20px;
    }
    `
    
})
export class CharactersPage {
    
}

 
    // imports: [CharacterFrameComponent, RouterLink],
    // styles: 