import { AsyncPipe } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, effect, inject, input } from "@angular/core";
import { toObservable } from "@angular/core/rxjs-interop";
import { Routes } from "@angular/router";
import { catchError, map, Observable, of, startWith, switchMap, tap } from "rxjs";
import { BalatroFrameComponent } from "../../components/balatro-frame/balatro-frame.component";

@Component({
    selector: "character-bio",
    template: `
        <h1 class="header"><ng-content select="[name]"></ng-content></h1>
        <div id="bio">
            <div id="portrait">
                <ng-content select="[portrait]"></ng-content>
            </div>
            <ng-content select="[bio]"></ng-content>
        </div>

        @if(facts.childNodes.length > 0){
            <h2 class="header">Factoids</h2>
        }
        <div #facts id="factoids"><ng-content select="[factoid]"></ng-content></div>

        @if(gallery.childNodes.length > 0){
            <h2 class="header">Gallery</h2>
        }
        <div #gallery id="gallery"><ng-content select="[gallery]"></ng-content></div>
    `,
    styleUrl: `../page.css`,
    styles: `
        .header{
            width:100%;
            text-align: center;
            white-space: nowrap;
            display: inline-block;
        }
        .header:before{
            content: '- ';
        }
        .header:after{
            content: ' -';
        }
        #portrait{
            float: right;
        }
        #factoids{
            display: grid;
            grid-template-columns: repeat(3, 1fr);
        }
    `,
    standalone: true
})
export class CharacterBioPage{
    
}

export interface CharacterInfo {
    name: string
    bio: string
}