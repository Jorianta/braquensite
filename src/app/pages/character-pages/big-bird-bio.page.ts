import { Component } from "@angular/core";
import { CharacterBioPage as CharacterBioComponent } from "./character-bio.component";
import { RouterLink } from "@angular/router";

@Component({
    selector: "big-bird-bio",
    template: `
        <character-bio>
            <span name>Braqito</span>
            <div bio>
                Originally just a Braq Bird as a Rito from the Legend of Zelda, he has kinda become his own character. Thats about all I can say about him really.
            </div>
            <img portrait src="/portraits/big_bird.png">
        </character-bio>
    `,
    styleUrl:'./character-bio.css',
    imports: [
    CharacterBioComponent,
    RouterLink
]
})
export class BigBirdBioPage{

}