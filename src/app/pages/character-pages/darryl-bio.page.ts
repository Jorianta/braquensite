import { Component } from "@angular/core";
import { CharacterBioPage as CharacterBioComponent } from "./character-bio.component";
import { RouterLink } from "@angular/router";

@Component({
    selector: "darryl-bio",
    template: `
        <character-bio>
            <span name>Ringmaster Darryl</span>
            <div bio>
                Darryl Durge, the leader of the Durge family circus. He has little respect for <a [routerLink]="'../Braq'">worker's</a> rights, <a [routerLink]="'../Braq_Bird'">animal's</a> rights, and the rights of others in general.
            </div>
            <img portrait src="/portraits/darryl.png">
            <div factoid><h3>Motor Vehicle:</h3>'68 Lincoln Continental (Black)</div>
            <div factoid><h3>Party Membership:</h3>Libertarian</div>
        </character-bio>
    `,
    styleUrl:'./character-bio.css',
    imports: [
    CharacterBioComponent,
    RouterLink
]
})
export class DarrylBioPage{

}