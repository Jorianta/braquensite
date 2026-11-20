import { Component, computed, effect, input, signal } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { interval, map, timer } from "rxjs";


@Component({
    selector: 'dancing-letters',
    template: `
        @for(letter of text(); track $index){
            <span class="letter" [class.jump]="$index == jumping()">{{letter}}</span>
        }
    `,
    styles: `
    .letter{
        white-space: pre;
        display: inline-block;
        transition: transform .2s;
    }
    .letter.jump{
        transform: translateY(-20%);
    }
    `
})
export class DancingLettersComponent{
    text = input.required<string>()

    last_letter = computed(() => this.text().length)
    jumping = toSignal(interval(200).pipe(map(v => {
           return (v % this.last_letter())
        })), {initialValue: 0})
}