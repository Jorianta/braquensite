import { Component } from "@angular/core";
import { CharacterBioPage as CharacterBioComponent } from "./character-bio.component";
import { RouterLink } from "@angular/router";
import { DancingLettersComponent } from "../../components/dancing-letters/dancing-letters.component";

@Component({
    selector: "braq-bio",
    template: `
        <character-bio>
            <span name>The <dancing-letters text='Fabulous'></dancing-letters> Braq</span>
            <div bio>
                The clown himself. Braq, or by his stage name, the Fabulous Braq, has left the circus and gone freelance. He entertains with his troupe of performing <a [routerLink]="'../Braq_Bird'">birds</a> he raises and trains himself.
                <br>
                His departure from the circus was not on good terms, and Braq struggled through a civil suit as a result of his non-compete. Fortunately, he had a <a [routerLink]="'../Teeny_and_Tiny'">crack legal team</a> on his side to get him off scot-free! Now he and his birds are free from the thumb of the man and perform at only the most prestigious street corners and birthday parties.
            </div>
            <img width='144' portrait src="/portraits/braq.png">
            <!-- <div factoids id='factoids'> -->
            <div factoid><h3>Alma Mater:</h3> Ohio State College of the Performing Arts Cleveland</div>
            <!-- </div> -->
        </character-bio>
    `,
    styleUrl:'./character-bio.css',
    imports: [
    CharacterBioComponent,
    RouterLink,
    DancingLettersComponent
]
})
export class BraqBioPage{

}