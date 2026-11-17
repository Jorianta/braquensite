import { Component } from "@angular/core";
import { CharacterBioPage as CharacterBioComponent } from "./character-bio.component";
import { RouterLink } from "@angular/router";

@Component({
    selector: "teeny-tiny-bio",
    template: `
        <character-bio>
            <span name>Teeny and Tiny</span>
            <div bio>
                After escaping the <a [routerLink]="'../Darryl'">Durge</a> Family Circus, these two primates established their law firm. They specialize in animal abuse suits, litigating on the behalf of the animal of course. They first gained notoriety in the case <a [routerLink]="'../Braq'">Braq</a> v. Durge Entertainment LLC.
                They also both have nicotine addictions left over from circus work.
                <br>
                Tiny is a Gorilla (Ape), and Teeny is a Mandrill (Monkey). Do not call Tiny a monkey, nor Teeny an Ape, or they will be extremely offended.
            </div>
            <img portrait src="/portraits/teeny_tiny.png">
            <div factoid><h3>Preferred Nictoine Source:</h3>Lucky Strikes | Banana Swishers</div>
            <div factoid><h3>Favorite TV Show:</h3>Columbo | Twin Peaks</div>
            <div factoid><h3>Commute Method:</h3>Piggy Back | Unicycle</div>
        </character-bio>
    `,
    styleUrl:'./character-bio.css',
    imports: [
    CharacterBioComponent,
    RouterLink
]
})
export class TeenyTinyBioPage{

}