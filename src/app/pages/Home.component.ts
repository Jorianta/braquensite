import { Component } from "@angular/core";
import { DancingLettersComponent } from "../components/dancing-letters/dancing-letters.component";

@Component({
    selector: 'home-page',

    styleUrl: './page.css',
    template: `
        <h1><dancing-letters text='Welcome To my cool homepage!'></dancing-letters></h1>
        <br>
        Hello! My name is Braquen, and I am a pixel artist and professional web developer. I have done plenty of work on websites for the man, so I decided it was time I carved out my own little place on the web.
        <br>
        Here you can find all kinds of neat little projects I am working on, like my pixel art, character design, and little games made in javascript!
        <br>
        You can also find me in some other places around the net:
        <br>
    `,
    imports: [DancingLettersComponent]
})
export class HomePage {
    
}