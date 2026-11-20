import { Component } from "@angular/core";
import { CharacterBioPage as CharacterBioComponent } from "./character-bio.component";
import { RouterLink } from "@angular/router";

@Component({
    selector: "braq-bird-bio",
    template: `
        <character-bio>
            <span name>Braq's Performing Birds</span>
            <div bio>
                Members of the <a [routerLink]="'../Braq'">Fabulous Braq's</a> troupe of world-renowned performing birds. These guys can do a variety of exciting tricks, like balance on a ball or eat a lot of seed really fast.
            </div>
            <img width='111' portrait src="/portraits/bird.png">
            <div factoid><h3>Favorite Food:</h3>Sunflower Seeds (Dill Pickle)</div>
        </character-bio>
    `,
    styleUrl:'./character-bio.css',
    imports: [
    CharacterBioComponent,
    RouterLink
]
})
export class BraqBirdBioPage{

}