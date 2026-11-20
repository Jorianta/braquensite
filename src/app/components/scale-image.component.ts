import { AfterViewChecked, AfterViewInit, Component, computed, effect, ElementRef, input, numberAttribute, signal, TemplateRef, viewChild, ViewChild } from "@angular/core";
import { toObservable } from "@angular/core/rxjs-interop";
import { debounce, debounceTime } from "rxjs";
import { CdkObserveContent } from "@angular/cdk/observers";

// make this a directive
@Component({
    selector: 'scale-image',
    template: `
        <img #image [width]="finalWidth()" [src]='src()' draggable="false" (load)="imageLoad()">
    `,
    styles: `
    :host{
        display: contents;
    }`
})
export class ScaleImage implements AfterViewInit {
    private imageRef = viewChild.required<ElementRef<HTMLImageElement>>('image')
    private elm: HTMLImageElement

    imageWidth = signal(0)
    finalWidth = computed(() => this.imageWidth() * this.scale())

    scale = input<number, number | string>(1, {transform: numberAttribute})

    src = input.required<string>()
    src$ = toObservable(this.src);

    constructor(){
        // effect(() => {
        //     let elm = this.imageRef()?.nativeElement
        //     if(!elm)  return;
        //     let src = this.src()
        //     elm.src = src
        //     let scale = this.scale()
        //     setTimeout(() => {
        //          let naturalWidth = elm.naturalWidth
        //         let val = naturalWidth * scale
        //         if(val == 0) console.log(naturalWidth, scale , src)

        //         this.finalWidth.set(val)
        //     },100)
           
        // })
    }

    ngAfterViewInit(): void {
        this.elm = this.imageRef().nativeElement
    }

    imageLoad(){
        console.log('a')
        this.imageWidth.set(this.elm.naturalWidth)
    }
}